import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import signup from "../assets/signup.jpg";
import { usePathname } from "next/navigation";

function Drawer(): JSX.Element {
  const links: { title: string; link: string }[] = [
    { title: "Home", link: "/home" },
    { title: "Account Balance", link: "/home/accountbalance" },
    { title: "Profile", link: "/home/profile" },
    { title: "Logout", link: "/logout" },
  ];
  const path = usePathname();

  console.log(path);
  return (
    <div
      style={{
        height: "80vh",
        width: "50px",
        padding: "130px",
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
            style={{ borderRadius: "15px", marginBottom: "30px" }}
          />
          <Typography variant="h4" color="white">
            Username
          </Typography>
          <Typography variant="h6" color="grey">
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
