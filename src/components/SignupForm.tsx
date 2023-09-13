"use client";

import { signupstyles } from "@/styles/Signup";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { motion } from "framer-motion";

interface User {
  email: string;
  password: string;
  username: string;
}
interface FinanceData {
  annualIncome: string;
  user: any;
  rent: string;
  food: string;
  investement: string;
  goal: string;
}

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

const SignupForm: React.FC = () => {
  const router: AppRouterInstance = useRouter();
  const [financeForm, setFinanceForm] = React.useState(true);
  const [user, setUser] = React.useState<User>({
    email: "",
    password: "",
    username: "",
  });
  const [findanceData, setFinanceData] = React.useState<FinanceData>({
    annualIncome: "",
    user: user,
    rent: "",
    food: "",
    investement: "",
    goal: "",
  });

  const isMatch: boolean = useMediaQuery("(min-width: 600px)");

  const signupHandler = async () => {
    try {
      // const res: AxiosResponse<any> = await axios.post<User>(
      //   "/api/users/signup",
      //   user
      // );
      // console.log(res);
      // router.push("/login");
      setFinanceForm(!financeForm);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        width: isMatch ? "100vh" : "300px",
        height: isMatch ? "100vh" : "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ marginBottom: "60px", textAlign: isMatch ? "left" : "center" }}
      >
        <Typography variant={isMatch ? "h3" : "h5"}>
          Create an account
        </Typography>
        <Typography>Let&apos;s get started with your free trial </Typography>
      </Box>
      {financeForm ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "10px",
              justifyContent: "center",
            }}
            onSubmit={signupHandler}
          >
            <TextField
              placeholder="Username"
              sx={{ width: isMatch ? "400px" : "300px", marginBottom: "50px" }}
              variant="standard"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <TextField
              placeholder="Email"
              sx={{ width: isMatch ? "400px" : "300px", marginBottom: "50px" }}
              variant="standard"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              placeholder="Password"
              type="password"
              sx={{ width: isMatch ? "400px" : "300px", marginBottom: "3 0px" }}
              variant="standard"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Button
              variant="text"
              sx={signupstyles.signupbtn}
              onClick={() => signupHandler()}
            >
              Create account
            </Button>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
                marginTop: "20px",
              }}
              href={"/login"}
            >
              Already registered? Click to login
            </Link>
          </form>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <form
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "250px 250px",
                  justifyContent: "space-evenly",
                  rowGap: "30px",
                  columnGap: "30px",
                  marginBottom: "20px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Annual income"
                  variant="outlined"
                  onChange={(e) => {
                    setFinanceData({
                      ...findanceData,
                      annualIncome: e.target.value,
                    });
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Rent/Housing"
                  variant="outlined"
                  onChange={(e) => {
                    setFinanceData({ ...findanceData, rent: e.target.value });
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Food"
                  variant="outlined"
                  onChange={(e) => {
                    setFinanceData({ ...findanceData, food: e.target.value });
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Investment"
                  variant="outlined"
                  onChange={(e) => {
                    setFinanceData({
                      ...findanceData,
                      investement: e.target.value,
                    });
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Other"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Your financial goal"
                  variant="outlined"
                  onChange={(e) => {
                    setFinanceData({ ...findanceData, goal: e.target.value });
                  }}
                />
              </Box>
            </form>
          </motion.div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "350px",
            }}
          >
            <Button
              sx={{
                width: "150px",
                height: "50px",
                backgroundColor: "black",
                color: "white",
                marginTop: "30px",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
              onClick={() => setFinanceForm(true)}
            >
              Back
            </Button>
            <Button
              sx={{
                padding: "15px",
                backgroundColor: "black",
                color: "white",
                width: "150px",
                height: "50px",
                marginTop: "30px",
                fontWeight: 1000,
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
              // onClick={() => modalSubmitHandler()}
            >
              Submit
            </Button>
          </div>
        </>
      )}
    </Box>
  );
};

export default SignupForm;
