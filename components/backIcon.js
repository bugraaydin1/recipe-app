import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IconSize, TinyIconSize } from "../config/theme";

export const BackIcon = ({ onPress, outlined = false }) => {
  return (
    <Ionicons
      name={outlined ? "chevron-back-circle-outline" : "chevron-back"}
      size={TinyIconSize * 1.5}
      style={{
        position: "absolute",
        top: 30,
        left: 15,
        borderRadius: 30,
        paddingHorizontal: 1,
        backgroundColor: "#fff",
        alignSelf: "flex-start",

        shadowColor: "grey",
        textShadowOffset: { height: 3, width: 3 },
        shadowOffset: { height: 3, width: 3 },
      }}
      color="#333"
      onPress={onPress}
    />
  );
};
