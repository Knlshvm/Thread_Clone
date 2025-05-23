import "../../global.css";

import { Slot, Stack } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { AuthProvider } from "@/providers/AuthProvider";

export default function RootLayout() {
  const myTheme = {
    ...DarkTheme,
    colors: { ...DarkTheme.colors, primary: "white", card: "#101010" },
  };
  return (
    <ThemeProvider value={myTheme}>
      <StatusBar barStyle="light-content" backgroundColor="#101010" />
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
}
