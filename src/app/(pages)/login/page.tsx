"use client";

import React from "react";
import { titleHandler } from "@/actions/actions";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { loginstyles } from "@/styles/Login";

const Login = () => {
  React.useEffect(() => {
    titleHandler("Login");
  }, []);

  return (
    <div style={loginstyles.logincontainer}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography variant="h4">Login</Typography>
          <Typography>Welcome back</Typography>
        </Box>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <TextField
            label="Email"
            placeholder="Email"
            sx={{ width: "400px", marginBottom: "30px" }}
            variant="standard"
          />
          <TextField
            label="Password"
            placeholder="Password"
            type="password"
            sx={{ width: "400px", marginBottom: "" }}
            variant="standard"
          />
          <Button variant="text" sx={loginstyles.loginbtn}>
            Create account
          </Button>
        </form>
        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          href={"/forgotpassword"}
        >
          Forgot password?
        </Link>
      </Box>
    </div>
  );
};

export default Login;
