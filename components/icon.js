import React from "react";
import { Text } from "react-native";
import { StyleSheet, View, Image } from "react-native";
import { IconSize } from "../config/theme";

export const Icon = ({ url }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: url }} size={IconSize} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: IconSize,
    height: IconSize,
    borderRadius: IconSize / 2,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: IconSize * 0.6,
    height: IconSize * 0.6,
    resizeMode: "contain",
  },
});
