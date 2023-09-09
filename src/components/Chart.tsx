"use client";

import { useMediaQuery } from "@mui/material";
import React from "react";
import { BarChart, Bar } from "recharts";

type ChartProps = {
  data: any;
};

function Chart(props: ChartProps): JSX.Element {
  const isMatch: boolean = useMediaQuery("(min-width: 600px)");

  return (
    <BarChart width={isMatch ? 450 : 250} height={60} data={props.data}>
      <Bar dataKey="uv" fill="lightblue" />
    </BarChart>
  );
}

export default Chart;
