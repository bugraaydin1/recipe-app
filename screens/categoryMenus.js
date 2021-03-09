import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import List from "../components/list";
import ScreenTitle from "../components/head/screenTitle";
import CategoryMenuList from "./../components/categoryMenu/categoryMenuList";
//import Details from "./../screens/details";

export default function CategoryMenus({
  navigation,
  route /*  handleMenuPress */,
}) {
  console.log(route);
  const { title, color } = route.params.category;

  const handleMenuPress = (title) => {
    console.log("menus title:", title);
    navigation.push("Menü", title);
  };

  return (
    <View style={styles.container}>
      <ScreenTitle title={title} color={color} />
      <CategoryMenuList handleMenuPress={handleMenuPress} title={title} />
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
