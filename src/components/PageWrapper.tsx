import { useMediaQuery } from "@mui/material";
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
        <div style={{ padding: 0 }}>{children}</div>
      )}
    </>
  );
};

export default PageWrapper;
