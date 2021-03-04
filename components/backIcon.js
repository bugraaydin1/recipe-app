import React from "react";
import { Entypo } from "@expo/vector-icons";
import { IconSize } from "../config/theme";

export const BackIcon = ({ onPress }) => {
  return (
    <Entypo
      name="chevron-thin-left"
      size={IconSize}
      style={{ paddingTop: 25, alignContent: "center" }}
      color="#333"
      onPress={onPress}
    />
  );
};
