import {gql} from 'apollo-boost';

export const signUp = gql`
mutation($username: String!, $password: String!) {
  signUpMutation(username: $username, password: $password) {
    token
  }
}
`

export const signIn = gql`
mutation($username:String! $password:String!) {
  signInMutation(username: $username, password: $password) {
    token
  }
}
`
