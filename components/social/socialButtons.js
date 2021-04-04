import React from "react";
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BorderRadius, Spacing } from "../../config/theme";

export default function SocialButtons({
  id,
  iconName,
  iconColor,
  buttonText,
  backgroundColor,
  onPress,
}) {
  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: 200,
      margin: Spacing,
      padding: 6,
      paddingTop: Spacing,
      borderRadius: BorderRadius,
      backgroundColor: backgroundColor,
    },
  });

  return (
    <Pressable id={id} style={styles.button} onPress={onPress}>
      <Ionicons
        name={iconName}
        size={24}
        color={!iconColor ? "#fff" : iconColor}
      />
      <Text
        style={
          backgroundColor !== "#fff" ? { color: "#fff" } : { color: iconColor }
        }
      >
        {buttonText}
      </Text>
    </Pressable>
  );
}
