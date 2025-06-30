// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// export function useTheme() {
//   const context = useContext(ThemeContext);

//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }

//   const { theme, toggleTheme } = context;
//   return { theme, toggleTheme };
// }
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context; // returns { theme, toggleTheme }
}
  
