import React from "react";
import { Card } from "semantic-ui-react";
import "../styles/TileGroup.css";

const Tile = ({ item }) => (
  <div className="my-card">
    <Card>
      <Card.Content header={item.name} />
      <Card.Content description={`$${item.value / 100}`} />
    </Card>
  </div>
);
export default Tile;