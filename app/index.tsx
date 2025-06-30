import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import Onboarding from "../screens/onboarding/OnBoarding";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@/context/useTheme"; 

export default function index() {
  const { toggleTheme, theme } = useTheme();
  console.log(theme);
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeIcon}>
        <Icon
          name={theme === "light" ? "dark-mode" : "light-mode"}
          size={30}
          color={theme === "light" ? "#000000" : "#FFFFFF"}
        />
      </TouchableOpacity>

      <Onboarding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themeIcon: {
    position: "absolute",
    top: 60,
    right: 30,
    zIndex: 10,
  },
});
