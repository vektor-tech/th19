import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import NetWorthGraph from "./NetWorthGraph";
import Tile from "./Tile";
import Header from "./Header";
import "../styles/App.css";

export default () => (
  <div>
    <Query query={HELLO_QUERY}>
      {({ loading, error, data }) => {
        console.log(data);
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
              {data.user && data.user.income && (
                <Tile item={data.user.income[data.user.income.length - 1]} />
              )}
              {data.user && data.user.expenses && (
                <Tile
                  item={data.user.expenses[data.user.expenses.length - 1]}
                />
              )}
            </div>
          </div>
        );
      }}
    </Query>
  </div>
);

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
      expenses {
        name
        value
        timestamp
      }
      income {
        name
        value
        timestamp
      }
    }
  }
`;
