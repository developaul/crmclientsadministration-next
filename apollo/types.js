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

export const GET_CLIENTS_BY_SELLER = gql`
query getClientsBySeller {
  getClientsBySeller {
    id
    name
    lastName
    company
    email
  }
}
`

export const GET_USER = gql`
query getUser {
  getUser {
    name
    lastName
  }
}
`

export const MUTATION_CREATE_CLIENTE = gql`
mutation createClient($input: ClientInput!) {
  createClient(input: $input) {
    id
    name
    lastName
    company
    email
    phone
  }
}
`