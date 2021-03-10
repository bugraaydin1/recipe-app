import React from "react";
import { Pressable, View } from "react-native";
import { BorderRadius, TinyIconSize } from "../../config/theme";
import { MaterialIcons } from "@expo/vector-icons/";

export default function FavoriteBadge({
  size = "medium",
  index,
  favorite,
  borderColor = "#fff",
  backgroundColor = "#fff",
  handleFavorite,
}) {
  const times = { small: 0.8, medium: 1.2, large: 1.6 };

  return (
    <Pressable
      style={{ position: "absolute", top: -3, right: -3 }}
      onPress={() => {
        handleFavorite({ ...favorite, [index]: !favorite[index] });
      }}
    >
      <View
        style={{
          padding: 5,
          borderWidth: 3,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          borderBottomLeftRadius: BorderRadius * times[size],
        }}
      >
        <MaterialIcons
          name={favorite[index] ? "favorite" : "favorite-outline"}
          size={TinyIconSize * times[size]}
          color={"crimson"}
        />
      </View>
    </Pressable>
  );
}
