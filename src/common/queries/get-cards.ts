import {gql} from '@apollo/client'

export const GET_LAUNCHES_LIST = gql`
  query getLaunchesList($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_unix
      rocket {
        rocket_name
      }
      details
      links {
        presskit
      }
    }
  }
`
