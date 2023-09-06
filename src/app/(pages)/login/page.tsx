"use client";

import React from "react";
import { titleHandler } from "@/actions/actions";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { loginstyles } from "@/styles/Login";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const isMatch = useMediaQuery("(min-width: 600px)");
  const router = useRouter();
  const [loginCredentials, setLoginCredentials] = React.useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    titleHandler("Login");
  }, []);

  const loginHandler = async () => {
    try {
      const res = await axios.post("/api/users/login", loginCredentials);
      console.log(res.data);
      if (res.data.message === "success") {
        router.push("/home");
        localStorage.setItem("user", JSON.stringify(res.data.user._id));
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: isMatch ? "200vh" : "380px",
        backgroundColor: "#f6f6f6",
        backgroundImage: "linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: isMatch ? "start" : "center",
        }}
      >
        <Box sx={{ marginBottom: "50px" }}>
          <Typography variant="h3">Login</Typography>
          <Typography>Hi, Welcome back !</Typography>
        </Box>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <TextField
            label="Email"
            placeholder="Email"
            sx={{ width: isMatch ? "400px" : "300px", marginBottom: "30px" }}
            variant="standard"
            value={loginCredentials.email}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                email: e.target.value,
              })
            }
          />
          <TextField
            label="Password"
            placeholder="Password"
            type="password"
            sx={{ width: isMatch ? "400px" : "300px", marginBottom: "" }}
            variant="standard"
            value={loginCredentials.password}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                password: e.target.value,
              })
            }
          />
          <Button
            onClick={() => loginHandler()}
            variant="text"
            sx={loginstyles.loginbtn}
          >
            Submit
          </Button>
        </form>
        <Box
          sx={{
            display: isMatch ? "block" : "flex",
            flexDirection: isMatch ? "row" : "column",
          }}
        >
          <Link
            style={{
              color: "black",
              textDecoration: "none",
              marginRight: isMatch ? "50px" : "20px",
              marginBottom: isMatch ? 0 : "30px",
            }}
            href={"/forgotpassword"}
          >
            Forgot password?
          </Link>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            href={"/signup"}
          >
            Not a member? Click to signup
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
