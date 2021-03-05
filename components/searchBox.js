import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BorderRadius,
  FontSizeTitle,
  FontSizeBody,
  FontSizeBody2,
  TextPrimaryColor,
  Spacing,
} from "../config/theme";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBox() {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: -30,
          top: 30,
          flexDirection: "row",
        }}
      >
        <Text style={styles.title}>ARA</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>Filtrele</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient
        start={[1, 0.1]}
        end={[1, 1]}
        colors={["tomato", "transparent"]}
        style={styles.linearGradient}
      >
        <View elevation={11} style={styles.searchBoxContainer}>
          <View style={styles.subContainer}>
            <Text style={styles.placeholderText}>Nefis bir tarif ara...</Text>
            <Ionicons
              style={styles.searchIcon}
              name="search"
              size={24}
              color="black"
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

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

  linearGradient: {
    zIndex: -1,
    alignItems: "center",
    justifyContent: "center",
    height: 180,
    width: "100%",
    marginBottom: -80,
  },

  searchBoxContainer: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: BorderRadius / 2,
  },

  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
  },

  placeholderText: {
    flex: 0.8,
    color: TextPrimaryColor,
    /*  textShadowRadius: 1,
    textShadowColor: "#ddd",
    textShadowOffset: { width: 1, height: 1 }, */
    paddingHorizontal: Spacing * 2,
  },

  searchIcon: {
    flex: 0.2,
  },
});
