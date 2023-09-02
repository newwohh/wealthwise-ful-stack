"use client";

import React from "react";
import PageWrapper from "@/components/PageWrapper";
import { Box, FormControl, Input, InputLabel, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { titleHandler } from "@/actions/actions";

const Profile = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  React.useEffect(() => {
    titleHandler("Profile");
  }, []);

  return (
    <PageWrapper>
      <Box sx={{ padding: "50px" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "500px 500px" }}>
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
            sx={{ marginRight: "100px", marginBottom: "100px" }}
          >
            <InputLabel htmlFor="component-simple">Username</InputLabel>
            <Input id="component-simple" defaultValue="Composed TextField" />
          </FormControl>
          <Box
            sx={{ marginRight: "100px", marginBottom: "100px", minWidth: 120 }}
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
            </FormControl>

            <Typography variant="h5">Profile Image</Typography>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default Profile;
