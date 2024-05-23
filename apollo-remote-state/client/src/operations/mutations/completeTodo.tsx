
import { gql, useMutation } from "@apollo/client";
import { CompleteTodoMutation, CompleteTodoMutationVariables } from "../../generated/graphql";

export const COMPLETE_TODO = gql`
  mutation CompleteTodo ($id: Int!) {
    completeTodo (id: $id) {
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
        ... on TodoAlreadyCompletedError {
          message
        }
      }
    }
  }
`

export function useCompleteTodo () {
  const [mutate, { data, error }] = useMutation<
    CompleteTodoMutation,
    CompleteTodoMutationVariables
  >(
    COMPLETE_TODO
  )

  return { mutate, data, error };
}
