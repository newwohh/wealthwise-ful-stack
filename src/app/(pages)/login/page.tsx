"use client";

import React from "react";
import { titleHandler } from "@/actions/actions";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { loginstyles } from "@/styles/Login";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
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
            sx={{ width: "400px", marginBottom: "" }}
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
