"use client";

import React from "react";
import { AuthProvider } from "@/context/authContext";
import { Drawer } from "@mui/material";
import axios from "axios";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = React.useState("");

  const getFinancialData = async (user: string) => {
    const currentUser = JSON.parse(localStorage.getItem("user")!);
    try {
      const res = await axios.get("/api/financedata/" + currentUser);
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
      <main>
        <Drawer />
        {children}
      </main>
    </AuthProvider>
  );
}
