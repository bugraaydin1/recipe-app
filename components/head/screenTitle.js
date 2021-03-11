import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontSizeBody, FontSizeTitle, Spacing } from "../../config/theme";

export default function ScreenTitle({ title = "", color = "#fff" }) {
  return (
    <View
      style={
        !title
          ? {
              top: 60,
              marginBottom: 0,
              flexDirection: "row",
            }
          : {
              top: 30,
              marginBottom: -15,
              flexDirection: "row",
            }
      }
    >
      <Text style={[styles.title, { color }]}>{title || "Tarif Ara"}</Text>
      {!title && (
        <TouchableOpacity>
          <Text style={[styles.filterText, { color }]}>Filtrele</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    paddingHorizontal: Spacing * 3,
    fontSize: FontSizeTitle,
    textAlign: "left",
    textAlignVertical: "bottom",
    fontWeight: "bold",
    color: "#fff",
    height: 30,
  },
  filterText: {
    flex: 1,
    paddingHorizontal: Spacing * 3,
    fontSize: FontSizeBody,
    textAlign: "right",
    textAlignVertical: "bottom",
    fontWeight: "bold",
    color: "#fff",
    height: 30,
  },
});
