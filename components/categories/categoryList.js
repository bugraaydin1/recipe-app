import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import {
  Spacing,
  TextPrimaryColor,
  FontSizeSubTitle,
} from "../../config/theme";
import CategoryCard from "./categoryCard";
import { CategoriesSliderData } from "../../config/data";

export default function CategoryList({ title, navigation }) {
  console.log(navigation);
  return (
    <SafeAreaView style={{ top: Spacing * 5, flex: 1, width: "100%" }}>
      <CategoryCard title={title} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: FontSizeSubTitle,
    textAlign: "center",
    textAlignVertical: "bottom",
    fontWeight: "bold",
    color: TextPrimaryColor,
  },
});
