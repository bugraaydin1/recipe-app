import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { FontSizeTitle, Spacing } from "../config/theme";

export default function Favorites() {
  return (
    <SafeAreaView style={styles.mainGrid}>
      <Text style={{ fontSize: FontSizeTitle }}>Favori Tariflerim</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainGrid: {
    paddingTop: Spacing * 5,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
