import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createContext } from "react";
import ListUsers from "./components/ListUsers";
import Login from "./components/Login";
import ChangeColorTheme from "./theme/theme";
import ColorThemeButton from "./ui/ColorThemeButton";

export const ColorModeContext = createContext(() => {}); //При создании контекста необходимо указывать тип в т.ч. и функцию
const test = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "8-296575563",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "8-296575563",
  },
];

function App() {
  const { theme, colorMode } = ChangeColorTheme();
  console.log("Render APP.tsx");
  return (
    <>
      <ColorModeContext.Provider value={colorMode.changeColorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <ColorThemeButton />
            <Login label={"Vot i TS"}></Login>
            <ListUsers test={test} />
          </CssBaseline>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
