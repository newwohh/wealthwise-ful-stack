"use client";

import React from "react";
import { AuthProvider } from "@/context/authContext";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress } from "@mui/material";

interface UserFinancialData {
  message: string;
  data: any;
}

interface ResponseData {
  _id: string;
  annualIncome: number;
  food: number;
  goal: number;
  investement: number;
  rent: number;
  user: string;
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = React.useState<UserFinancialData>({
    data: "",
    message: "",
  });

  const getFinancialData = async (): Promise<ResponseData> => {
    const currentUser: string = JSON.parse(localStorage.getItem("user")!);
    const res: AxiosResponse<any> = await axios.get<ResponseData>(
      "/api/financedata/" + currentUser
    );
    console.log(res.data);
    setUser(res.data);
    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["financedata"],
    queryFn: () => getFinancialData(),
  });

  // console.log(user);

  return (
    <AuthProvider value={{ user, setUser }}>
      <main>
        {isLoading && <LinearProgress />}
        {children}
      </main>
    </AuthProvider>
  );
}
