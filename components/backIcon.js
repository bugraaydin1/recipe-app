import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BorderRadius, IconSize, TinyIconSize } from "../config/theme";

export const BackIcon = ({ onPress, outlined = false }) => {
  return (
    <Ionicons
      name={outlined ? "chevron-back-circle-outline" : "chevron-back"}
      size={TinyIconSize * 1.5}
      style={
        Platform.OS !== "ios"
          ? {
              position: "absolute",
              top: 30,
              left: 15,
              borderRadius: 30,
              paddingHorizontal: 1,
              backgroundColor: "#fff",
            }
          : {
              position: "absolute",
              top: 30,
              left: 15,
              paddingHorizontal: 1,
              borderWidth: 2,
              borderRadius: BorderRadius / 2,
              borderColor: "#333",
            }
      }
      color={"#333"}
      onPress={onPress}
    />
  );
};
