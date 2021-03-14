import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ScreenTitle from "../components/head/screenTitle";
import MenuList from "../components/category/menuList";

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
    <SafeAreaView style={styles.container}>
      <ScreenTitle title={title} color={color} />
      <MenuList handleMenuPress={handleMenuPress} title={title} />
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
