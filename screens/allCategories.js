import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ScreenTitle from "../components/head/screenTitle";
import CategoryList from "../components/categories/categoryList";

export default function AllCategories({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle title="Kategoriler" color="crimson" />
      <CategoryList title="Kategoriler" navigation={navigation} />
    </SafeAreaView>
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
