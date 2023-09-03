"use client";

import { signupstyles } from "@/styles/Signup";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignupForm: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const signupHandler = async () => {
    try {
      const res = await axios.post("/api/users/signup", user);
      console.log(res);
      router.push("/login");
    } catch (error: any) {
      console.log(error);
    }
  };

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
        onSubmit={signupHandler}
      >
        <TextField
          placeholder="Username"
          sx={{ width: "400px", marginBottom: "50px" }}
          variant="standard"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <TextField
          placeholder="Email"
          sx={{ width: "400px", marginBottom: "50px" }}
          variant="standard"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          placeholder="Password"
          type="password"
          sx={{ width: "400px", marginBottom: "" }}
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
