import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenTitle from "../components/head/screenTitle";
import CategoryList from "../components/category/categoryList";

export default function CategoryMenus({
  navigation,
  route /*  handleMenuPress */,
}) {
  const { title, color } = route.params.category;

  const handleMenuPress = (title) => {
    console.log("menus title:", title);
    navigation.push("Menü", title);
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title={title} color={color} />
      <CategoryList handleMenuPress={handleMenuPress} title={title} />
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
