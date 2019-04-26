import {gql} from 'apollo-boost';

export const activeUser = gql`
query {
  activeUser{
    id
    username
    created_date
  }
}
`

export const allSnaps = gql`
query {
  allSnaps {
    id
    text
    user_id
    user {
      username
    }
  }
}
`
