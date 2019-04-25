import {gql} from 'apollo-boost';

export const activeUser = gql`
query {
  activeUser{
    username
    created_date
  }
}
`
