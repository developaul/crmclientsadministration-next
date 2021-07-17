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

export const MUTATION_DELETE_CLIENT = gql`
mutation deleteClient($id: ID!) {
  deleteClient(id: $id)
} 
`

export const GET_CLIENT = gql`
query getClient($id: ID!) {
  getClient(id: $id) {
    name
    lastName
    company
    email
    phone 
  }
}
`

export const MUTATION_UPDATE_CLIENT = gql`
mutation updateClient($id: ID! $input: ClientInput!) {
  updateClient(id: $id, input: $input) {
    id
    name
    lastName
    company
    email
    seller
  }
}
`

export const GET_PRODUCTS = gql`
query getProduct {
  getProducts {
    id
    name
    stock
    price
  }
}
`

export const MUTATION_DELETE_PRODUCT = gql`
mutation deleteProduct($id: ID!) {
  deleteProduct(id: $id)
}
`

export const MUTATION_CREATE_PRODUCT = gql`
mutation createProduct($input: ProductInput!) {
  createProduct(input: $input) {
    id
    name
    stock
    price
  }
}
`

export const GET_PRODUCT = gql`
query getProduct($id: ID!) {
  getProduct(id: $id) {
    name
    stock
    price
  }
}
`

export const MUTATION_UPDATE_PRODUCT = gql`
mutation updateProduct($id: ID!, $input: ProductInput) {
  updateProduct(id: $id, input: $input) {
    id
    name
    stock
    price
  }
}
`

export const MUTATION_CREATE_ORDER = gql`
mutation createOrder($input: clear!) {
  createOrder(input: $input) {
    id
    seller
    total
    status
    order {
      id
      quantity
      price
      name
    }
    client {
      id
      name
      lastName
      email
      phone
    }
  }
}
`

export const GET_ORDERS_BY_SELLER = gql`
query getOrdersBySeller {
  getOrdersBySeller {
    id
    seller
    total
    status
    order {
      id
      quantity
      name
      price
    }
    client {
      id
      name
      lastName
      email
      phone
    }
  }
}
`

export const MUTATION_UPDATE_ORDER = gql`
mutation updateOrder($id: ID!, $input: OrderInput!) {
  updateOrder(id: $id, input: $input) {
    id
    status    
  }
}
`

export const MUTATION_DELETE_ORDER = gql`
mutation deleteOrder($id: ID!) {
  deleteOrder(id: $id)
}
`