"use client";

import React from "react";
import BarChart from "@/components/Chart";
import { UserData } from "@/data/dev-data";
import { Box, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Expenses by Month",
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: UserData.map((data) => data.userGain),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const Dashboard = () => {
  return (
    <div style={{ padding: "150px" }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 1000 }}>
          Dashboard
        </Typography>
        <Typography variant="h5">remote: Resolving deltas</Typography>
      </Box>
      <Box sx={{ marginTop: "70px" }}>
        <BarChart options={options} chartdata={data} />
      </Box>
    </div>
  );
};

export default Dashboard;
