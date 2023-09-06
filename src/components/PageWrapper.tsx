import { useMediaQuery } from "@mui/material";
import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const isMatch = useMediaQuery("(min-width: 600px)");

  return (
    <>
      {isMatch ? (
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
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default PageWrapper;
