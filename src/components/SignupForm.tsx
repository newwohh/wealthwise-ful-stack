"use client";

import { signupstyles } from "@/styles/Signup";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const SignupForm: React.FC = () => {
  return (
    <Box sx={signupstyles.firstdiv}>
      <Box sx={{ marginBottom: "60px" }}>
        <Typography variant="h3">Create an account</Typography>
        <Typography>Let&apos;s get started with your free trial </Typography>
      </Box>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <TextField
          placeholder="Username"
          sx={{ width: "400px", marginBottom: "50px" }}
          variant="standard"
        />
        <TextField
          placeholder="Email"
          sx={{ width: "400px", marginBottom: "50px" }}
          variant="standard"
        />
        <TextField
          placeholder="Password"
          type="password"
          sx={{ width: "400px", marginBottom: "" }}
          variant="standard"
        />
        <Button variant="text" sx={signupstyles.signupbtn}>
          Create account
        </Button>
      </form>
      <Link
        style={{
          color: "black",
          textDecoration: "none",
        }}
        href={"/login"}
      >
        Already registered? Click to login
      </Link>
    </Box>
  );
};

export default SignupForm;
