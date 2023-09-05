import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import axios from "axios";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "500px",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function FinanceModal() {
  let user = JSON.parse(localStorage.getItem("user")!);
  const [findanceData, setFinanceData] = React.useState<any>({
    annualIncome: "",
    user: user,
    rent: "",
    food: "",
    investement: "",
    goal: "",
  });

  const modalSubmitHandler = async () => {
    try {
      const res = await axios.post("/api/financedata", findanceData);
      console.log(res);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "250px 250px",
            justifyContent: "space-evenly",
            rowGap: "30px",
            columnGap: "30px",
            marginBottom: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Annual income"
            variant="outlined"
            onChange={(e) => {
              setFinanceData({ ...findanceData, annualIncome: e.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Rent/Housing"
            variant="outlined"
            onChange={(e) => {
              setFinanceData({ ...findanceData, rent: e.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Food"
            variant="outlined"
            onChange={(e) => {
              setFinanceData({ ...findanceData, food: e.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Investment"
            variant="outlined"
            onChange={(e) => {
              setFinanceData({ ...findanceData, investemet: e.target.value });
            }}
          />
          <TextField id="outlined-basic" label="Other" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Your financial goal"
            variant="outlined"
            onChange={(e) => {
              setFinanceData({ ...findanceData, goal: e.target.value });
            }}
          />
        </Box>
        <Button
          sx={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "black",
            color: "white",
            width: "200px",
            fontWeight: 1000,
            "&:hover": {
              backgroundColor: "black",
            },
          }}
          onClick={() => modalSubmitHandler()}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
