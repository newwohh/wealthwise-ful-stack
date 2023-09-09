import * as React from "react";
import { TextField, Box, Button } from "@mui/material";
import axios, { AxiosResponse } from "axios";

export default function FinanceModal(): JSX.Element {
  let user = JSON.parse(localStorage.getItem("user")!);
  const [findanceData, setFinanceData] = React.useState<{
    annualIncome: string;
    user: string;
    rent: string;
    food: string;
    investement: string;
    goal: string;
  }>({
    annualIncome: "",
    user: user,
    rent: "",
    food: "",
    investement: "",
    goal: "",
  });

  const modalSubmitHandler = async () => {
    try {
      const res: AxiosResponse<any> = await axios.post(
        "/api/financedata",
        findanceData
      );
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
              setFinanceData({ ...findanceData, investement: e.target.value });
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
