import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        primary: {
          100: "#3f3f46",
          200: "#27272a",
          300: "#18181b",
          400: "#09090b",
          500: "#09090b",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        greenAccent: {
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        redAccent: {
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        blueAccent: {
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  const thinBorderDark = "1px solid rgba(255, 255, 255, 0.08)";
  const thinBorderLight = "1px solid #EBEBEB";
  const softShadow = mode === "light" ? "0 1px 3px rgba(0, 0, 0, 0.04)" : "none";

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.blueAccent[500],
            },
            secondary: {
              main: colors.blueAccent[400],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[300],
            },
            background: {
              default: "#09090b",
              paper: "#18181b",
            },
          }
        : {
            primary: {
              main: colors.blueAccent[500],
            },
            secondary: {
              main: colors.blueAccent[400],
            },
            neutral: {
              dark: colors.grey[300],
              main: colors.grey[500],
              light: colors.grey[800],
            },
            background: {
              default: "#FDFCFB",
              paper: "#FFFFFF",
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 48,
        fontWeight: 800,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 36,
        fontWeight: 700,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 28,
        fontWeight: 600,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 600,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 500,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 500,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: mode === "dark" ? "#09090b" : "#FDFCFB",
            color: mode === "dark" ? "#f4f4f5" : "#0a2540",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: mode === "dark" ? "#18181b" : "#ffffff",
            border: mode === "dark" ? thinBorderDark : thinBorderLight,
            boxShadow: softShadow,
            borderRadius: "12px",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: mode === "dark" ? "#18181b" : "#ffffff",
            border: mode === "dark" ? thinBorderDark : thinBorderLight,
            boxShadow: softShadow,
            borderRadius: "12px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "8px",
          },
          containedPrimary: {
            boxShadow: "none",
            backgroundColor: colors.blueAccent[500],
            color: "#ffffff",
            ":hover": {
              boxShadow: "none",
              backgroundColor: colors.blueAccent[600],
            },
          },
          outlinedPrimary: {
            borderColor: mode === "dark" ? "rgba(255,255,255,0.2)" : "#D9D6CF",
            color: mode === "dark" ? colors.grey[100] : colors.grey[100],
            ":hover": {
              borderColor: mode === "dark" ? "rgba(255,255,255,0.35)" : "#C7C2B9",
              backgroundColor: mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(94, 106, 210, 0.06)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#111114" : "#F9F7F4",
            borderRadius: "10px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: mode === "dark" ? "rgba(255,255,255,0.08)" : "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: mode === "dark" ? "rgba(255,255,255,0.16)" : "#E3E1DC",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.blueAccent[500],
              boxShadow: mode === "dark" ? "0 0 0 2px rgba(94, 106, 210, 0.25)" : "0 0 0 2px rgba(94, 106, 210, 0.15)",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: mode === "dark" ? colors.grey[500] : colors.grey[500],
            "&.Mui-focused": {
              color: colors.blueAccent[500],
            },
          },
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: mode === "dark" ? thinBorderDark : thinBorderLight,
            backgroundColor: mode === "dark" ? "#18181b" : "#ffffff",
            boxShadow: softShadow,
            borderRadius: "12px",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: mode === "dark" ? "#151518" : "#FBFAF8",
              borderBottom: mode === "dark" ? thinBorderDark : thinBorderLight,
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(94, 106, 210, 0.04)",
            },
          }
        }
      }
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
