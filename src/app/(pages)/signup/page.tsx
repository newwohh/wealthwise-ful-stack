import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import signup from "../../../assets/signup.jpg";
import React from "react";

const Signup: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "200vh",
      }}
    >
      <Box
        sx={{
          width: "100vh",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ marginBottom: "60px" }}>
          <Typography variant="h3">Create an account</Typography>
          <Typography>Let&apos;s get started with your free trial </Typography>
        </Box>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
          <Button
            variant="text"
            sx={{
              width: "300px",
              height: "50px",
              backgroundColor: "black",
              color: "white",
              marginTop: "30px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Create account
          </Button>
        </form>
      </Box>
      <Box
        sx={{
          width: "100vh",
          height: "100vh",
          background: "#2b5876",
          backgroundColor:
            "-webkit-linear-gradient(to right, #4e4376, #2b5876)",
        }}
      >
        <Box>
          <Image src={signup} alt="any" height={1000} width={1000} />
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
