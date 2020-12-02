import React from "react";
import withRoot from "./withRoot";
import { Query } from "react-apollo";
import { gql } from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";


const Root = () => (
    <Query query={ME_QUERY}>
        {({data, loading, error}) => {
            console.log(111, data)
            if (loading) return  <div>Loading..</div>
            if (error) return  <div> error..</div>
            return (
                <>
                    <Header />
                    <Router>
                        <Switch>
                            <Route exact path='/' component={App}/>
                            <Route path='/profile/:id' component={Profile}/>
                        </Switch>
                    </Router>
                </>
            )
        }}
    </Query>
);

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
      likeSet {
        track {
          id
        }
      }
    }
  }
`;

// const GET_TRACKS_QUERY = gql`
//     {
//       tracks(search:"") {
//         id
//         title
//         url
//       }
//     }
// `

export default withRoot(Root);
