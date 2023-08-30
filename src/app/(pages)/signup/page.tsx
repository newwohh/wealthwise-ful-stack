import { Box, Button, Container, Input, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

const Signup: React.FC = () => {
  return (
    <>
      <Container>
        <Box sx={{ width: "500px" }}>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button variant="text">Text</Button>
          </form>
        </Box>
        <Box>{/* <Image/> */}</Box>
      </Container>
    </>
  );
};

export default Signup;
