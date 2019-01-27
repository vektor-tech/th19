import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

class App extends Component {
  render() {
    return (
      <div>
        <Query query={HELLO_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <div>Loading</div>;
            }

            if (error) {
              return <div>An unexpected error occurred</div>;
            }

            return (
              <div>
                <p>{data.user.username}</p>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

const HELLO_QUERY = gql`
  {
    user(where: { id: "cjremrker001b07969z5epnt1" }) {
      username
      password
    }
  }
`;

export default App;
