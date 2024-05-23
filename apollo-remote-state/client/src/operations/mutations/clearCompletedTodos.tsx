import { gql, useMutation } from "@apollo/client";
import { ClearCompletedTodosMutation, GetAllTodosQuery } from '../../generated/graphql'
import { GET_ALL_TODOS } from "../queries/getAllTodos";

export const CLEAR_COMPLETED_TODOS = gql`
  mutation ClearCompletedTodos {
    clearCompletedTodos {
      success
      todos {
        id 
        text
        completed
      }
    }
  }
`

export function useClearCompletedTodos () {
  const [mutate, { data, error }] = useMutation<
      ClearCompletedTodosMutation
  >(
    CLEAR_COMPLETED_TODOS,
    {
      update (cache) {
        const allTodos = cache.readQuery<GetAllTodosQuery>({
          query: GET_ALL_TODOS
        });

        cache.writeQuery({
          query: GET_ALL_TODOS,
          data: {
            todos: {
              edges: allTodos?.todos.edges
                .filter((t) => !t?.node.completed)
            },
          },
        });
      }
    }
  )

  return { mutate, data, error };
}
