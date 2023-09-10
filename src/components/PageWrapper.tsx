import { Box, useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";

const PageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const isMatch: boolean = useMediaQuery("(min-width: 600px)");
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);
  useEffect(() => {
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      setShowMobileDrawer(!isMatch);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [isMatch]);
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "0px",
            lg: "70px",
          },
          backgroundColor: {
            xs: "white",
            lg: "black",
          },
          width: "100%",
        }}
      >
        <Box
          sx={{
            padding: {
              xs: "0px",
              lg: "50px",
            },
            display: {
              xs: "block",
              lg: "flex",
            },
            border: "1px solid black",
            borderRadius: {
              xs: "none",
              lg: "30px",
            },
            backgroundColor: "white",
            height: {
              lg: "750px",
              xs: "0px",
            },
          }}
        >
          {children}
        </Box>
        )
      </Box>
      )
    </>
  );
};

export default PageWrapper;
