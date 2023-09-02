"use client";

import React from "react";
import { titleHandler } from "@/actions/actions";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { loginstyles } from "@/styles/Login";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  React.useEffect(() => {
    titleHandler("Login");
  }, []);

  return (
    <div style={loginstyles.logincontainer}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
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
          <Button
            onClick={() => router.push("/home")}
            variant="text"
            sx={loginstyles.loginbtn}
          >
            Create account
          </Button>
        </form>
        <Box>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
              marginRight: "50px",
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
