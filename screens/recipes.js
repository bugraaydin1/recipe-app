import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchBox from "./../components/searchBox";
import List from "../components/list";
import CategoryMenus from "./categoryMenus";
import MenuDetails from "./menuDetails";

//import Details from "./../screens/details";

const Stack = createStackNavigator();

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
      <Stack.Screen
        name="Kategoriler"
        component={CategoryMenus}
        options={({ route }) => ({
          title: route.params.category.title,
          headerStyle: {
            backgroundColor: route.params.category.color,
          },
          /*  headerTintColor: "#fff",
           headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
          }, */
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
    <View style={styles.container}>
      <SearchBox text={searchQuery} onChangeText={setSearchQuery} />
      <List
        handleCategoryPress={(category) => {
          console.log(category, "recipes !");
          navigation.push("Kategoriler", { category });
        }}
        handleMenuPress={(menu) => {
          console.log(menu, "menu !");
          navigation.push("Menü", menu);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    flex: 1,
    //flexDirection: "column",
    //flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
