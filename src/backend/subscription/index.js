import {gql} from 'apollo-boost';

export const snapAddedSubs = gql`
subscription {
  snapSubscription {
    id
    text
    user {
      username
      id
    }
  }
}
`

export const userLoginSubs = gql`
subscription {
  userLogin {
    username
  }
}
`

export const userRegisterSubs = gql`
subscription {
  userRegister {
    username
  }
}
`
