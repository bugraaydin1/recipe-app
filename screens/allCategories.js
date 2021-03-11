import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenTitle from "../components/head/screenTitle";
import CategoriesList from "../components/categories/categoriesList";

export default function AllCategories({ navigation }) {
  return (
    <View style={styles.container}>
      <ScreenTitle title="Kategoriler" color="crimson" />
      <CategoriesList title="Kategoriler" navigation={navigation} />
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
