import { gql } from "@apollo/client";

export const MUTATION_CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      name
    }
  }
`

export const MUTATION_AUTHENTICATE_USER = gql`
mutation authenticateUser($input: AuthenticateInput!) {
  authenticateUser(input: $input) {
    token
  }
}
`