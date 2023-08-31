import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import signup from "../assets/signup.jpg";
import { usePathname } from "next/navigation";

function Drawer(): JSX.Element {
  const links: { title: string; link: string }[] = [
    { title: "Home", link: "/home" },
    { title: "Dashboard", link: "/home/dashboard" },
    { title: "Account Balance", link: "/home/accountbalance" },
    { title: "Logout", link: "/logout" },
  ];
  const path = usePathname();

  console.log(path);
  return (
    <div
      style={{
        height: "69vh",
        width: "100px",
        padding: "150px",
        backgroundColor: " black",
      }}
    >
      <Box>
        <Box>
          <Image
            src={signup}
            alt="any"
            height={50}
            width={50}
            style={{ borderRadius: "15px" }}
          />
          <Typography variant="h4" color="white">
            Username
          </Typography>
          <Typography variant="caption" color="grey">
            email
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "50px" }}
        >
          {links.map((el, i) => {
            return (
              <Link
                href={el.link}
                key={i}
                sx={{
                  color: path === el.link ? "white" : "grey",
                  textDecoration: "none",
                  marginTop: "50px",
                  transition: "0.2s ease-in-out",
                  "&:hover": {
                    color: "white",
                  },
                  fontWeight: 1000,
                  fontSize: "20px",
                }}
              >
                {el.title}
              </Link>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}

export default Drawer;