

import { gql, useMutation } from "@apollo/client";
import { GET_ALL_TODOS } from "../queries/getAllTodos";
import { EditTodoMutation, EditTodoMutationVariables, GetAllTodosQuery } from "../../generated/graphql";

export const EDIT_TODO = gql`
  mutation EditTodo ($id: Int!, $text: String!) {
    editTodo (id: $id, text: $text) {
      success
      todo {
        id
        text 
        completed
      }
      error {
        ... on TodoNotFoundError {
          message
        }
        ... on TodoValidationError {
          message
        }
      }
    }
  }
`

export function useEditTodo () {
  const [mutate, { data, error }] = useMutation<
    EditTodoMutation,
    EditTodoMutationVariables
  >(
    EDIT_TODO,
    {
      update: (cache) => {
        let allTodos = cache.readQuery<GetAllTodosQuery>({
          query: GET_ALL_TODOS
        });

        if (allTodos) {
          cache.writeQuery({
            query: GET_ALL_TODOS,
            data: {
              todos: {
                edges: allTodos?.todos.edges.map(
                  (t) => t?.node.id === data?.editTodo.todo?.id ? {
                    ...t,
                    node: {
                      ...t?.node,
                      text: data?.editTodo.todo?.text
                    }
                } : t)
              },
            },
          });
        }
      }
    }
  )

  return { mutate, data, error };
}
