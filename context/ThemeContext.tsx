import { createContext, useCallback, useState } from "react";
import { useColorScheme } from "nativewind";
import { View } from "react-native";

// import { View } from "react-native-reanimated/lib/typescript/Animated";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { setColorScheme } = useColorScheme();
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
      if (theme === "light") {
        setTheme("dark");
        setColorScheme("dark");
      } else {
        setTheme("light");
        setColorScheme("light");
      }
    }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <View className="flex-1 bg-backgroundLight dark:bg-primary">
          {children}
        </View>
      </ThemeContext.Provider>
    );
}
