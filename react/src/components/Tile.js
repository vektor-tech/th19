import React from "react";
import { Card } from "semantic-ui-react";
import "../styles/TileGroup.css";

const Tile = ({ item, negative, type }) => (
  <div className="my-card">
    <Card color={negative ? "red" : "green"}>
      <Card.Content header={`${item.name} - ${type}`} />
      <Card.Content description={`$${item.value / 100}`} />
    </Card>
  </div>
);
export default Tile;
