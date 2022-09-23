import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/login/LoginPage";
import LoginLayout from "./Layout/LoginLayout";
import { BackgroundBox } from "./StyledApp";
import { StyledEngineProvider } from "@mui/material/styles";
import ChangeColorTheme from "./theme/theme";
import ColorThemeButton from "./ui/ColorThemeButton";

export const ColorModeContext = createContext(() => {});
//При создании контекста необходимо указывать тип в т.ч. и функцию

function App() {
  const { theme, colorMode } = ChangeColorTheme();

  return (
    <>
      <ColorModeContext.Provider value={colorMode.changeColorMode}>
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <CssBaseline>
              <BackgroundBox themeColor={theme.palette.mode}>
                <Container>
                  <Routes>
                    <Route element={<LoginLayout />}>
                      <Route index element={<HomePage />} />
                      <Route path="/login" element={<LoginPage />} />
                    </Route>
                  </Routes>
                </Container>
                <ColorThemeButton />
              </BackgroundBox>
            </CssBaseline>
          </MuiThemeProvider>
        </StyledEngineProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
