import React from "react";
import withRoot from "./withRoot";
import { Query } from "react-apollo";
import { gql } from 'apollo-boost';

const Root = () => (
    <Query query={GET_TRACKS_QUERY}>
        {({data, loading, error}) => {
            console.log(111, data)
            if (loading) return  <div>Loading..</div>
            if (error) return  <div> error..</div>
            return <div>{JSON.stringify(data)}</div>
        }}
    </Query>
);

const GET_TRACKS_QUERY = gql`
    {
      tracks(search:"") {
        id
        title
        url
      }
    }
`

export default withRoot(Root);
