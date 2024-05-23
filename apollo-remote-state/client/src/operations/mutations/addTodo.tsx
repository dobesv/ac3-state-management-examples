
import { gql, useMutation } from "@apollo/client";
import { GET_ALL_TODOS } from "../queries/getAllTodos";
import { AddTodoMutation, AddTodoMutationVariables, GetAllTodosQuery } from "../../generated/graphql";

export const ADD_TODO = gql`
  mutation AddTodo ($text: String!) {
    addTodo (text: $text) {
      success
      todo {
        id
        text 
        completed
      }
      error {
        message
      }
    }
  }
`

export function useAddTodo () {
  const [mutate, { data, error }] = useMutation<
    AddTodoMutation,
    AddTodoMutationVariables
  >(
    ADD_TODO,
    {
      update (cache, { data }) {
        const newTodoFromResponse = data?.addTodo.todo;
        const existingTodos = cache.readQuery<GetAllTodosQuery>({
          query: GET_ALL_TODOS,
        });

        if (existingTodos && newTodoFromResponse) {
          cache.writeQuery({
            query: GET_ALL_TODOS,
            data: {
              todos: {
                edges: [
                  ...existingTodos?.todos.edges,
                  { __typename: 'TodosEdge', node: newTodoFromResponse },
                ],
              },
            },
          });
        }
      }
    }
  )
  return { mutate, data, error };
}
