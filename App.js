import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons/";
import Recipes, { Home } from "./screens/recipes";
import Details from "./screens/details";
import Favorites from "./screens/favorites";
import CategoryMenus from "./screens/categoryMenus";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{ height: 60 }}
        sceneContainerStyle={{ paddingBottom: 0 }}
        initialRouteName={"Recipes"}
        keyboardHidesTabBar={true}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Tarifler") {
              iconName = "food-bank"; //focused ? "ios-information-circle-outline"" : "ios-information-circle-outline";
            } else if (route.name === "Favoriler") {
              iconName = "favorite"; //format-list-bulleted //focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Detaylar") {
              iconName = "list"; //format-list-bulleted //focused ? "ios-list-box" : "ios-list";
            }
            return (
              <MaterialIcons name={iconName} size={size * 1.2} color={color} />
            );
          },
        })}
        tabBarOptions={{
          style: {
            height: 55,
            borderTopColor: "rgba(0,0,0,0.2)",
          },
          iconStyle: {},
          labelStyle: {
            fontSize: 12,
            // paddingBottom: 11,
          },
          tabStyle: {
            backgroundColor: "rgba(0,0,0,0.02)",
            paddingTop: 5,
            // paddingBottom: 11,
          },
          activeTintColor: "crimson",
          inactiveTintColor: "gray",
        }}
      >
        {/* Home */}
        <Tab.Screen name="Tarifler" component={Home} />

        {/* Favorites */}
        <Tab.Screen name="Favoriler" component={Favorites} />

        {/* Details */}
        <Tab.Screen
          name="Detaylar"
          component={Details}
          options={{
            tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
