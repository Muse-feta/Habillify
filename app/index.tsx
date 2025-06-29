import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Onboarding from "../screens/onboarding/OnBoarding";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Onboarding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
