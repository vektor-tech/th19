import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import NetWorthGraph from "./NetWorthGraph";
import Tile from "./Tile";
import Header from "./Header";
import IncomeModal from "./IncomeModal";
import ExpenseModal from "./ExpenseModal";
import "../styles/App.css";

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
              <div className="app-root">
                <Header />
                <div>
                  <p className="intro">Hey, {data.user.username}</p>
                </div>
                <div className="graph-hero">
                  <NetWorthGraph nwArray={data.user.yearlyHistory} />
                </div>
                <div className="tile-group">
                  {data.user &&
                    data.user.assets &&
                    data.user.assets.map((item, i) => (
                      <Tile key={i} item={item.cash} />
                    ))}
                  {data.user &&
                    data.user.liabilities &&
                    data.user.liabilities.map((item, i) => (
                      <Tile key={i} item={item.loan} />
                    ))}
                </div>
              </div>
            );
          }}
        </Query>
        <IncomeModal />
        <ExpenseModal />
      </div>
    );
  }
}

const HELLO_QUERY = gql`
  {
    user(where: { id: "cjremrker001b07969z5epnt1" }) {
      username
      password
      assets {
        cash {
          name
          value
          timestamp
        }
      }
      yearlyHistory {
        value
        timestamp
      }
      liabilities {
        loan {
          type
          apr
          name
          value
          initial
          timestamp
        }
      }
    }
  }
`;

export default App;
