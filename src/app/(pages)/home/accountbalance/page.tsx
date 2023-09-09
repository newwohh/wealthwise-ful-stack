"use client";

import React, { useContext } from "react";
import { titleHandler } from "@/actions/actions";
import PageWrapper from "@/components/PageWrapper";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import linechart from "../../../../assets/chart.jpg";
import AuthContext from "@/context/authContext";

interface DataType {
  name: string;
  Income: number;
  Expense: number;
  amt: number;
}

type UserContext = {
  user: any;
  setUser: (user: any) => void;
};

interface UserData {
  annualIncome: number;
  user: string;
  rent: number;
  food: number;
  investement: number;
  goal: number;
}

const data: DataType[] = [
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

function AccountBalance(): React.JSX.Element {
  React.useEffect(() => {
    titleHandler("Account Balance");
  }, []);
  const { user } = useContext<UserContext>(AuthContext);
  const userData: UserData = user.data;
  console.log(userData);
  const isMatch: boolean = useMediaQuery("(min-width: 600px)");

  return (
    <PageWrapper>
      <Box sx={{ display: isMatch ? "flex" : "block" }}>
        <Box sx={{ width: isMatch ? "900px" : "400px" }}>
          <Typography variant="h4" sx={{ fontWeight: 1000 }}>
            Your Income
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "70px",
              flexDirection: isMatch ? "row" : "column",
            }}
          >
            <Card sx={{}}>
              <CardContent sx={{ display: "flex" }}>
                <Image src={linechart} alt="any" height={50} width={50} />
                <Box>
                  <Typography>Monthly Income</Typography>
                  <Typography sx={{ fontWeight: 1000 }}>
                    ${userData?.annualIncome / 12 || ""}
                  </Typography>
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
                  <Typography sx={{ fontWeight: 1000 }}>
                    ${userData?.food + userData?.rent / 12 || ""}
                  </Typography>
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
                  <Typography sx={{ fontWeight: 1000 }}>
                    ${userData?.investement / 12 || ""}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ marginTop: "150px" }}>
            <BarChart
              width={isMatch ? 900 : 300}
              height={isMatch ? 400 : 250}
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
                  width: isMatch ? "300px" : "200",
                  height: isMatch ? "350px" : "200",
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
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
}

export default AccountBalance;
