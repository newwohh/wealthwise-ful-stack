"use client";

import React from "react";
import { AuthProvider } from "@/context/authContext";
import axios, { AxiosResponse } from "axios";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = React.useState<any>("");

  const getFinancialData = async (user: string): Promise<void> => {
    const currentUser: string = JSON.parse(localStorage.getItem("user")!);
    try {
      const res: AxiosResponse<any> = await axios.get<any>(
        "/api/financedata/" + currentUser
      );
      user = res.data;
      setUser(user);
      return console.log(res.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    getFinancialData(user);
  }, []);

  return (
    <AuthProvider value={{ user, setUser }}>
      <main>{children}</main>
    </AuthProvider>
  );
}
