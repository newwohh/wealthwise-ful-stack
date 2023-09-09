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

interface User {
  email: string;
  password: string;
  username: string;
}

const SignupForm: React.FC = () => {
  const router: AppRouterInstance = useRouter();
  const [user, setUser] = React.useState<User>({
    email: "",
    password: "",
    username: "",
  });

  const isMatch: boolean = useMediaQuery("(min-width: 600px)");

  const signupHandler = async () => {
    try {
      const res: AxiosResponse<any> = await axios.post<User>(
        "/api/users/signup",
        user
      );
      console.log(res);
      router.push("/login");
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
          sx={{ width: isMatch ? "400px" : "300px", marginBottom: "" }}
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
