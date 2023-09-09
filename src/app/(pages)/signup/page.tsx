"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import signup from "../../../assets/signup.jpg";
import React from "react";
import { titleHandler } from "@/actions/actions";
import { signupstyles } from "@/styles/Signup";
import SignupForm from "@/components/SignupForm";
import { useMediaQuery } from "@mui/material";

const Signup: React.FC = () => {
  React.useEffect(() => {
    titleHandler("Register");
  }, []);

  const isMatch: boolean = useMediaQuery("(min-width: 600px)");

  return (
    <div
      style={{
        display: isMatch ? "flex" : "block",
        justifyContent: "space-between",
        alignItems: "center",
        height: isMatch ? "100vh" : "100vh",
        width: isMatch ? "200vh" : "300px",
      }}
    >
      <Box
        sx={{
          width: isMatch ? "100vh" : "350px",
          height: isMatch ? "100vh" : "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SignupForm />
      </Box>
      {isMatch && (
        <Box sx={signupstyles.seconddiv}>
          <Box>
            <Image src={signup} alt="any" height={1000} width={1000} />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Signup;
