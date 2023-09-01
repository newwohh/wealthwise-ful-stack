"use client";

import React from "react";
import { BarChart, Bar } from "recharts";

function Chart(props: any) {
  return (
    <BarChart width={450} height={60} data={props.data}>
      <Bar dataKey="uv" fill="lightblue" />
    </BarChart>
  );
}

export default Chart;
