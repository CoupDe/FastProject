import { Box, Typography } from "@mui/material";
import React from "react";
import AuthForm from "../components/login/AuthForm";
import TaskList from "../components/TaskList";

interface LoginLayoutProps {
  children?: React.ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <>
      <main>
        <Box
          sx={{
            display: "flex",
            margin: "0 auto",
            width: "100vh",
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
          <AuthForm />
          <TaskList />

          {children}
        </Box>
      </main>
    </>
  );
};

export default LoginLayout;
