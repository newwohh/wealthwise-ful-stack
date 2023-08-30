"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import signup from "../../../assets/signup.jpg";
import React from "react";
import { titleHandler } from "@/actions/actions";
import { signupstyles } from "@/styles/Signup";
import SignupForm from "@/components/SignupForm";

const Signup: React.FC = () => {
  React.useEffect(() => {
    titleHandler("Register");
  }, []);

  return (
    <div style={signupstyles.containerdiv}>
      <Box sx={signupstyles.firstdiv}>
        <SignupForm />
      </Box>
      <Box sx={signupstyles.seconddiv}>
        <Box>
          <Image src={signup} alt="any" height={1000} width={1000} />
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
