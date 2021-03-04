import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Details from "./screens/details";
import List from "./screens/list";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Details /> */}
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
