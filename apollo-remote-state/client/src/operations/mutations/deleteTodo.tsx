
import { gql, useMutation } from "@apollo/client";
import { GET_ALL_TODOS } from "../queries/getAllTodos";
import { DeleteTodoMutation, DeleteTodoMutationVariables, GetAllTodosQuery } from "../../generated/graphql";

export const DELETE_TODO = gql`
  mutation DeleteTodo ($id: Int!) {
    deleteTodo (id: $id) {
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
      }
    }
  }
`

export function useDeleteTodo () {
  const [mutate, { data, error }] = useMutation<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >(
    DELETE_TODO,
    {
      update (cache, { data }) {
        const deletedTodoId = data?.deleteTodo.todo?.id;
        const allTodos = cache.readQuery<GetAllTodosQuery>({
          query: GET_ALL_TODOS
        });

        cache.writeQuery({
          query: GET_ALL_TODOS,
          data: {
            todos: {
              edges: allTodos?.todos.edges.filter((t) => t?.node.id !== deletedTodoId)
            },
          },
        });
      }
    }
  )

  return { mutate, data, error };
}
