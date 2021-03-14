import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SearchBox from "./../components/searchBox";
import List from "../components/list";
import AllCategories from "./allCategories";
import CategoryMenus from "./categoryMenus";
import MenuDetails from "./menuDetails";
import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Spacing } from "../config/theme";

const Stack = createStackNavigator();
//const Stack = createSharedElementStackNavigator();

export function Home() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: "tomato",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Tarifler" component={Recipes} />
      <Stack.Screen name="Kategoriler" component={AllCategories} />
      <Stack.Screen
        name="Kategori"
        component={CategoryMenus}
        options={({ route }) => ({
          title: route.params.category.title,
          headerStyle: {
            backgroundColor: route.params.category.color,
          },
        })}
      />
      <Stack.Screen
        name="Menü"
        component={MenuDetails}
        options={({ route }) => ({
          title: route.params.menu?.title,
        })}
      />
    </Stack.Navigator>
  );
}

export default function Recipes({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery, navigation);

  return (
    <SafeAreaView
      style={[
        Platform.OS === "android" ? { marginTop: -30 } : { marginTop: -50 },
        styles.container,
      ]}
    >
      <SearchBox text={searchQuery} onChangeText={setSearchQuery} />
      <List
        handleAllCategoriesPress={() => navigation.push("Kategoriler")}
        handleCategoryPress={(category) => {
          console.log(category, "category !");
          navigation.push("Kategori", { category });
        }}
        handleMenuPress={(menu) => {
          console.log(menu, "menu !");
          navigation.push("Menü", menu);
        }}
      />
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
