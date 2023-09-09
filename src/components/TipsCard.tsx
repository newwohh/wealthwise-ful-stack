import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import saving from "../assets/saving.jpg";
import moneytree from "../assets/moneytree.jpg";

const TipsCard = (): JSX.Element => {
  return (
    <Card
      sx={{
        height: "300px",
        width: "250px",
        marginTop: "70px",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Image src={saving} alt="any" height={50} width={50} />
          <Image src={moneytree} alt="any" height={50} width={50} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 1000 }}>
            Save more money
          </Typography>
          <Typography sx={{ marginBottom: "50px", marginTop: "10px" }}>
            Learn more about saving money ?
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Button
            sx={{
              color: "white",
              backgroundColor: "black",
              height: "50px",
              width: "200px",
              "&:hover": {
                backgroundColor: "black",
              },
            }}
          >
            View Tips
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TipsCard;
