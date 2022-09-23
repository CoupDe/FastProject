import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import photo from "../../images/photo/photo.jpg";

const PreviewIntro: React.FC<{ startGame: Function }> = ({ startGame }) => {
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
          "Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке/",
          1000,
          () => {
            startGame();
          },
          "Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке обнаружение сходства приписывается Ричарду Макклинтоку.",
          1000,
          () => {
            console.log("END TEXT");
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
