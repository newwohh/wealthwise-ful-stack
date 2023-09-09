import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { BackgroundColorsType } from "@/app/(pages)/home/page";

function DashBoardCard({ bg }: { bg: BackgroundColorsType }) {
  const isMatch: boolean = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Card
        sx={{
          marginTop: isMatch ? 0 : "20px",
          width: 290,
          borderRadius: "30px",
          padding: "20px",
          height: "150px",
          marginRight: "20px",
          backgroundColor: bg.bgColor || "",
          backgroundImage: bg.bgImage || "",
        }}
      >
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h6" component="div">
              Monthly investments
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Dashboard
            </Typography>
            <Typography component="div">Dashboard</Typography>
          </Box>
          <Box>
            <Button
              sx={{
                borderRadius: "20px",
                height: 50,
                width: 50,
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowOutwardIcon />
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashBoardCard;
