"use client";

import React from "react";
import Chart from "@/components/Chart";
import { UserData } from "@/data/dev-data";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DashBoardCard from "@/components/DashBoardCard";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import TipsCard from "@/components/TipsCard";
import PageWrapper from "@/components/PageWrapper";
import { titleHandler } from "@/actions/actions";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export type BackgroundColorsType = {
  bgColor: string;
  bgImage: string;
};

const Home = (): JSX.Element => {
  const d = new Date();
  let date: string = d.toISOString();
  const isMatch = useMediaQuery("(min-width: 600px)");
  React.useEffect(() => {
    titleHandler("Dashboard");
  }, []);

  let bgArray: BackgroundColorsType[] = [
    {
      bgColor: "#74EBD5",
      bgImage: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
    },
    {
      bgColor: "#A9C9FF",
      bgImage: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
    },
    {
      bgColor: "#FBDA61",
      bgImage: "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);",
    },
  ];

  return (
    <PageWrapper>
      <Box>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 1000 }}>
            Dashboard
          </Typography>
          <Typography>{`${date}`}</Typography>
        </Box>
        <Box sx={{ marginTop: "70px" }}>
          <Chart data={UserData} />
        </Box>
        <Box
          sx={{
            marginTop: "70px",
            display: "flex",
            flexDirection: isMatch ? "row" : "column",
          }}
        >
          {[1, 2, 3].map((el, i) => {
            return <DashBoardCard key={el} bg={bgArray[i]} />;
          })}
        </Box>
        <Box sx={{ marginTop: "70px" }}>
          <Typography variant="h5">Today</Typography>
          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  $45000
                </IconButton>
              }
              sx={{
                width: "1000px",
              }}
            >
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    {"I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ marginLeft: "20px" }}>
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Where your money go?
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            marginBottom: "20px",
          }}
        >
          <Typography>Food and drinks</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            marginBottom: "20px",
          }}
        >
          <Typography>Shopping</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            marginBottom: "20px",
          }}
        >
          <Typography>Housing</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            marginBottom: "20px",
          }}
        >
          <Typography>Transportation</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
        </List>
        <Box>
          <TipsCard />
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default Home;
