import React from "react";
import { Area, AreaChart, XAxis, YAxis, Tooltip } from "recharts";

const NetWorthGraph = ({ nwArray }) => {
  nwArray = nwArray.map(({ value, timestamp }) => {
    return {
      value: value / 100,
      timestamp: new Date(timestamp).getFullYear()
    };
  });
  return (
    <AreaChart
      width={750}
      height={250}
      data={nwArray}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />{" "}
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />{" "}
        </linearGradient>{" "}
      </defs>{" "}
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="value"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default NetWorthGraph;
