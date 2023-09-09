"use client";

import React from "react";
import PageWrapper from "@/components/PageWrapper";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { titleHandler } from "@/actions/actions";

const Profile = () => {
  const isMatch: boolean = useMediaQuery("(min-width: 600px)");
  const [age, setAge] = React.useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  React.useEffect(() => {
    titleHandler("Profile");
  }, []);

  return (
    <PageWrapper>
      <Box sx={{ padding: isMatch ? "50px" : "0px" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMatch ? "500px 500px" : "500px",
          }}
        >
          <FormControl
            variant="standard"
            sx={{ marginRight: "100px", marginBottom: "100px" }}
          >
            <InputLabel htmlFor="component-simple">First name</InputLabel>
            <Input id="component-simple" defaultValue="Composed TextField" />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginRight: "100px", marginBottom: "100px" }}
          >
            <InputLabel htmlFor="component-simple">Last name</InputLabel>
            <Input id="component-simple" defaultValue="Composed TextField" />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginRight: "100px", marginBottom: "100px" }}
          >
            <InputLabel htmlFor="component-simple">Email address</InputLabel>
            <Input id="component-simple" defaultValue="Composed TextField" />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ marginRight: "100px", marginBottom: "50px" }}
          >
            <InputLabel htmlFor="component-simple">Username</InputLabel>
            <Input id="component-simple" defaultValue="Composed TextField" />
          </FormControl>
          <Box
            sx={{ marginRight: "100px", marginBottom: "50px", minWidth: 120 }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">India</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="India"
                onChange={handleChange}
              >
                <MenuItem value={10}>United States</MenuItem>
                <MenuItem value={20}>China</MenuItem>
                <MenuItem value={30}>Russia</MenuItem>
              </Select>
              <Typography variant="h6" sx={{ marginTop: "50px" }}>
                Password Guidelines
              </Typography>
              <Typography sx={{ fontStyle: "oblique" }}>
                *Choose a strong password that includes a combination of
                uppercase and lowercase letters, numbers, and special
                characters. Avoid using easily guessable information like your
                name or common words.
              </Typography>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                marginTop: "50px",
              }}
            >
              <FormControl
                variant="standard"
                sx={{ marginRight: "20px", marginBottom: "100px" }}
              >
                <InputLabel htmlFor="component-simple">Old password</InputLabel>
                <Input id="component-simple" />
              </FormControl>
              <FormControl variant="standard" sx={{ marginBottom: "100px" }}>
                <InputLabel htmlFor="component-simple">New password</InputLabel>
                <Input id="component-simple" />
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default Profile;
