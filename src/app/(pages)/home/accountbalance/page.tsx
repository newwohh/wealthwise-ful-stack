"use client";

import React from "react";
import { titleHandler } from "@/actions/actions";
import PageWrapper from "@/components/PageWrapper";
import {
  Box,
  Card,
  CardContent,
  Divider,
  List,
  Typography,
} from "@mui/material";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import linechart from "../../../../assets/chart.jpg";

const data = [
  {
    name: "Janury",
    Income: 4000,
    Expense: 2400,
    amt: 2400,
  },
  {
    name: "February",
    Income: 3000,
    Expense: 1398,
    amt: 2210,
  },
  {
    name: "March",
    Income: 2000,
    Expense: 9800,
    amt: 2290,
  },
  {
    name: "April",
    Income: 2780,
    Expense: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Income: 1890,
    Expense: 4800,
    amt: 2181,
  },
  {
    name: "June",
    Income: 2390,
    Expense: 3800,
    amt: 2500,
  },
];

function AccountBalance() {
  React.useEffect(() => {
    titleHandler("Account Balance");
  }, []);

  return (
    <PageWrapper>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "900px" }}>
          <Typography variant="h4" sx={{ fontWeight: 1000 }}>
            Your Income
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "70px",
            }}
          >
            <Card>
              <CardContent sx={{ display: "flex" }}>
                <Box>
                  <Image src={linechart} alt="any" height={50} width={50} />
                </Box>
                <Box>
                  <Typography>Monthly Income</Typography>
                  <Typography sx={{ fontWeight: 1000 }}>$1252</Typography>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent sx={{ display: "flex" }}>
                <Box>
                  <Image src={linechart} alt="any" height={50} width={50} />
                </Box>
                <Box>
                  <Typography>Monthly Expense</Typography>
                  <Typography sx={{ fontWeight: 1000 }}>$1252</Typography>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent sx={{ display: "flex" }}>
                <Box>
                  <Image src={linechart} alt="any" height={50} width={50} />
                </Box>
                <Box>
                  <Typography>Investments</Typography>
                  <Typography sx={{ fontWeight: 1000 }}>$1252</Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ marginTop: "150px" }}>
            <BarChart
              width={900}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Expense" fill="#8884d8" />
              <Bar dataKey="Income" fill="#82ca9d" />
            </BarChart>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ marginLeft: "40px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "50px",
            }}
          >
            <Typography>My cards</Typography>
            <Box>
              <Card
                sx={{
                  width: "300px",
                  height: "350px",
                  borderRadius: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#8884d8",
                }}
              >
                <CardContent sx={{ color: "white", textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 1000, fontStyle: "50px" }}
                  >
                    Your balance
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    $ 1252
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ marginTop: "40px" }}>
              <Typography variant="h6">Transactions</Typography>
            </Box>
            <List></List>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
}

export default AccountBalance;
