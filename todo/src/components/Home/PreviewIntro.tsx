import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import photo from "../../images/photo/photo.jpg";
import { useOutletContext } from "react-router-dom";

const PreviewIntro: React.FC<{ startGame: Function }> = ({ startGame }) => {
  const setShowProjectLink =
    useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>();

  console.log(setShowProjectLink);

  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        alignSelf: "start",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginX: "4px",
      }}
    >
      <Avatar
        sx={{
          marginY: "4px",
          width: "100px",
          height: "100px",

          justifyContent: "center",
        }}
        alt="Portfolio_photo"
        src={photo}
      />
      {/* сделать выравнивание текста слева */}
      <TypeAnimation
        sequence={[
          "Добро пожаловать в мой 'мини' Pet-проект котрый является класический TODO-list, за исключением того что он представляет из себя полноценное приложение в котором реализованно взаимодействие клиента с сервером, Front-end и backend написан полность мной. А перед тем, как я вам немного расскажу про используемые технологии, предлогаю вам вспомнить школьную игру,",
          1500,
          () => {
            startGame();
          },
          "Добро пожаловать в мой 'мини' Pet-проект котрый является класический TODO-list, за исключением того что он представляет из себя полноценное приложение в котором реализованно взаимодействие клиента с сервером, Front-end и backend написан полность мной. А перед тем, как я вам немного расскажу про используемые технологии, предлогаю вам вспомнить школьную игру, ну или присупить сразу к просмотру проекта",
          1000,
          () => {
            setShowProjectLink(true);
          },
        ]}
        speed={99}
        style={{ fontSize: "1.5em", font: "Arial" }}
        wrapper="p"
        repeat={0}
      />
    </Box>
  );
};

export default PreviewIntro;
