"use client";

import Drawer from "@/components/Drawer";
import MobileDrawer from "@/components/MobileDrawer";
import { useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMatch: boolean = useMediaQuery("(min-width: 600px)");
  const [showMobileDrawer, setShowMobileDrawer] = useState<boolean>(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMobileDrawer(!isMatch);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [isMatch]);

  return (
    <section style={{ display: "flex" }}>
      {showMobileDrawer && !isMatch ? <MobileDrawer /> : <Drawer />}
      {children}
    </section>
  );
}
