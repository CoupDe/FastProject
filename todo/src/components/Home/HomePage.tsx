import { Replay } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Box, Grow } from "@mui/material";
import { default as MyGrid } from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useEffect, useState } from "react";
import { machineStep } from "../../services/gameLogic/gameLogic";
import { IGameStep } from "../../typeinterfaces/types";
import PreviewIntro from "./PreviewIntro";
import { MyItem, Reload, StyledGrid } from "./styledHomePage";
interface IWinnerComb {
  winner: number[];
}

const HomePage = () => {
  const [showGame, setShowGame] = useState<boolean>(false);
  const [winCombination, setWinCombination] = useState<IWinnerComb>({
    winner: [],
  });
  const [statusGame, setStatusGame] = useState();
  const [touch, setTouched] = useState<boolean>(false);
  const [step, setStep] = useState<IGameStep>({
    compStep: [],
    playerStep: [],
  });
  let allSteps: number[] = [];

  useEffect(() => {
    console.log("USEeFFECT", winCombination);
  }, [winCombination]);
  function startGame() {
    setShowGame(true);
    setTimeout(
      () =>
        setStep((prev) => ({
          playerStep: [...prev.playerStep],
          compStep: [...prev.compStep, Math.floor(Math.random() * 9)],
        })),

      500
    );
  }

  function setValue(e: React.MouseEvent<HTMLDivElement>) {
    const id = +e.currentTarget.id;

    if (!step.playerStep.includes(id) && !step.compStep.includes(id)) {
      const playerStep = step.playerStep.concat(id);
      const compStep = step.compStep;
      const logicStep = machineStep(playerStep, compStep);

      logicStep.winner && setWinCombination({ winner: [...logicStep.winner] });

      // setStep({ playerStep: step.playerStep.concat(id), compStep: [id] });
      setStep((prev) => ({
        playerStep: [...prev.playerStep, id],
        compStep: [...prev.compStep, logicStep.step],
      }));
    }
  }

  function Card({ index }: { index: number }): JSX.Element {
    if (step.playerStep.includes(index)) {
      return (
        <CloseIcon
          sx={{ width: "140px", height: "140px" }}
          color={winCombination.winner.includes(index) ? "success" : "primary"}
        />
      );
    } else if (step.compStep.includes(index)) {
      return (
        <RadioButtonUncheckedIcon
          sx={{ width: "110px", height: "110px" }}
          color={winCombination.winner.includes(index) ? "success" : "primary"}
        />
      );
    } else {
      return <Box sx={{ width: "140px", height: "140px" }} />;
    }
  }

  return (
    <>
      <Box
        sx={{
          bgcolor: "#fff5",
          width: "100%",
          height: "80vh",
          display: "flex",

          justifyContent: "space-between",
          alignItems: "center",
        }}
        aria-label="intro"
      >
        <MyGrid
          container
          spacing={2}
          columns={12}
          sx={{
            gridTemplateColumns: "repeat(3,1fr)",
            display: "grid",
            minWidth: "30%",
            justifyItems: "center",
            position: "relative",
          }}
        >
          <Reload>
            <Replay sx={{}} fontSize="large" />
          </Reload>
          {/* Скачет разметка */}
          {showGame &&
            Array.from(Array(9)).map((_, index) => {
              return (
                <StyledGrid sx={{ alignItems: "center" }} key={index}>
                  <MyItem
                    sx={{
                      alignItems: "center",
                      width: "140px",
                      height: "140px",
                    }}
                    $isTouched={touch}
                    onClick={(e) => setValue(e)}
                    elevation={8}
                    id={`${index}`}
                  >
                    <Card index={index} />
                  </MyItem>
                </StyledGrid>
              );
            })}
        </MyGrid>
        <PreviewIntro startGame={startGame} />
      </Box>
    </>
  );
};

export default HomePage;
