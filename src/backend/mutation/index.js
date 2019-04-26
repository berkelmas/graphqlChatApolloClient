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

export const snapMutation = gql`
mutation($user_id: ID! $text: String!) {
  snapMutation(text: $text user_id: $user_id) {
    text
    user_id
  }
}
`
