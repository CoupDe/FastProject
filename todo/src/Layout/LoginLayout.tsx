import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LinkButton } from "./StyledLinkButton";

const LoginLayout = () => {
  const [showProjectLink, setShowProjectLink] = useState<boolean>(false);
  useEffect(() => {
    console.log(showProjectLink);
  }, [showProjectLink]);

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
          {/* {showProjectLink && <LinkButton variant="outlined">Tru</LinkButton>} */}
          <Box sx={{ alignSelf: "flex-end", paddingRight: 5 }}>
            <motion.div
              animate={{
                y: 60,
                scale: [0, 2],

                borderRadius: ["20%", "20%", "100%", "50%", "20%"],
                rotate: 10,
              }}
              transition={{
                delay: 1,
                type: "spring",
                duration: 2,
                bounce: 0.7,
               
              }}
            >
              <Button component={motion.div} variant="outlined">
                Tru
              </Button>
            </motion.div>
          </Box>
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

          <Outlet context={setShowProjectLink} />
        </Box>
      </main>
    </>
  );
};

export default LoginLayout;
