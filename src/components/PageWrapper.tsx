import { useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const isMatch = useMediaQuery("(min-width: 600px)");
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMobileDrawer(!isMatch);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [isMatch]);
  return (
    <>
      {showMobileDrawer && isMatch ? (
        <div>{children}</div>
      ) : (
        <div
          style={{ padding: "70px", backgroundColor: "black", width: "100%" }}
        >
          <div
            style={{
              padding: "50px",
              display: "flex",
              border: "1px solid black",
              borderRadius: "30px",
              backgroundColor: "white",
              height: "750px",
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default PageWrapper;
