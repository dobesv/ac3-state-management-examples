import { gql, useMutation } from "@apollo/client";
import { CompleteAllTodosMutation } from "../../generated/graphql";

export const COMPLETE_ALL_TODOS = gql`
  mutation CompleteAllTodos {
    completeAllTodos {
      success
      todos {
        id 
        text
        completed
      }
    }
  }
`

export function useCompleteAllTodos () {
  const [mutate, { data, error }] = useMutation<
    CompleteAllTodosMutation
  >(
    COMPLETE_ALL_TODOS
  )

  return { mutate, data, error };
}
