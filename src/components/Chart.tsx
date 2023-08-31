"use client";

import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart(props: any) {
  return (
    <Bar
      style={{ width: "500px", height: "10px" }}
      options={props.options}
      data={props.chartdata}
    />
  );
}

export default BarChart;
