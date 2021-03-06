import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBox from "./../components/searchBox";
import Details from "./../screens/details";
import List from "./../screens/list";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <SearchBox />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "column",
    //flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
