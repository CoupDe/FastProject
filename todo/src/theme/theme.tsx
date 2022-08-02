import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";

export const colorTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#333333",
          },
          secondary: {
            main: "#ff5500",
          },
          background: {
            paper: "#b1b1b1",
          },
          info: {
            main: "#3388dd",
          },
          text: {
            primary: "#0a0a0a",
          },
          divider: "rgba(115,113,113,0.12)",
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#fff",
            light: "#5a5a5a",
            dark: "#252424",
            contrastText: "#fff",
          },
          secondary: {
            main: "#ff5500",
          },
          background: {
            paper: "#b1b0b0",
            default: "#373737",
          },
          info: {
            main: "#3388dd",
          },
          text: {
            primary: "#ffffff",
            secondary: "#ffffff",
            disabled: "rgba(255,255,255,0.5)",
            hint: "rgba(255,255,255,0.5)",
          },
          divider: "rgba(115,113,113,0.12)",
        }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: mode === "light" ? "#0a0a0a" : "#fff",
        },
      },
    },
  },
});

export default function ChangeColorTheme() {
  const [themeColor, setThemeColor] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      changeColorMode: () => {
        setThemeColor((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(colorTheme(themeColor)),
    [themeColor]
  );

  return { theme, colorMode };
}

//Необходимо использовать создание темы
// palette: {
//     mode: "light",
//     primary: {};

//       main: "#333333",
//     },
//     secondary: {
//       main: "#ff5500",
//     },
//     background: {
//       paper: "#b1b1b1",
//     },
//   },
// export const theme = createTheme({
//   palette: {
//     mode,
//     ...(mode=== "dark"?{
//     primary: {
//       main: "#333333",
//     },
//     secondary: {
//       main: "#ff5500",
//     },
//     background: {
//       paper: "#b1b1b1",
//     },
//     info: {
//       main: "#3388dd",
//     },
//     divider: "rgba(115,113,113,0.12)",
//   }:{
//     primary: '#fff',
//     divider: deepOrange[700],
//     background: {
//       default: deepOrange[900],
//       paper: deepOrange[900],
//     },
//     text: {
//       primary: '#fff',
//       secondary: '#fff',
//     },
//   }),
// });

// palette: {
//     type: 'dark',
//     primary: {
//       main: '#333333',
//     },
//     secondary: {
//       main: '#ff5500',
//     },
//     background: {
//       paper: '#b1b1b1',
//     },
//     info: {
//       main: '#3388dd',
//     },
//     divider: 'rgba(115,113,113,0.12)',
//   },
