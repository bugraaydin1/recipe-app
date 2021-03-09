import React from "react";
import { Text } from "react-native";
import { FontSizeBody, FontSizeTitle } from "../../config/theme";

//implemnent full page recipe menu details
export default function MenuDetails({ route }) {
  console.log(route);
  return (
    <Text style={{ top: 30, fontSize: FontSizeTitle }}>
      Menü 1: {route.params.title}
    </Text>
  );
}
