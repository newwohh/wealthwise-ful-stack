"use client";

import Drawer from "@/components/Drawer";
import MobileDrawer from "@/components/MobileDrawer";
import { useMediaQuery } from "@mui/material";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMatch = useMediaQuery("(min-width: 600px)");

  return (
    <section style={{ display: "flex" }}>
      {!isMatch ? <MobileDrawer /> : <Drawer />}
      {children}
    </section>
  );
}
