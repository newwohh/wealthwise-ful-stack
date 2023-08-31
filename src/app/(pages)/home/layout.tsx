"use client";

import Drawer from "@/components/Drawer";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: "flex" }}>
      <Drawer />
      {children}
    </section>
  );
}
