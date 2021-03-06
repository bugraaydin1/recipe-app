import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SearchBox from "./../components/searchBox";
import List from "../components/list";
//import Details from "./../screens/details";

export default function Recipes() {
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery);

  return (
    <View style={styles.container}>
      <SearchBox text={searchQuery} onChangeText={setSearchQuery} />
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
