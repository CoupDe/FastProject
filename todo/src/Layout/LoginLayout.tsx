import { Box, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
interface LoginLayoutProps {
  children?: React.ReactNode;
}

const LoginLayout = () => {
  return (
    <>
      <main>
        <Box
          sx={{
            display: "flex",
            margin: "0 auto",
            width: "100%",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="section"
        >
          <Typography
            letterSpacing={"3px"}
            mb={"40px"}
            variant="h4"
            component="h1"
          >
            TODO'{" "}
            <Box
              component="span"
              sx={{ fontStyle: "italic", fontFamily: "Arial" }}
            >
              шник
            </Box>
          </Typography>

          <Outlet />
        </Box>
      </main>
    </>
  );
};

export default LoginLayout;
