import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BorderRadius,
  FontSizeTitle,
  FontSizeBody,
  FontSizeBody2,
  TextPrimaryColor,
  Spacing,
} from "../config/theme";
import ScreenTitle from "./head/screenTitle";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBox({ text, onChangeText }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle />
      <LinearGradient
        start={[1, 0.2]}
        end={[1, 1]}
        colors={["tomato", "transparent"]}
        style={[
          !Platform.isPad
            ? { height: 180, marginBottom: -70 }
            : { height: 210, marginBottom: -30 },
          styles.linearGradient,
        ]}
      >
        <View elevation={11} style={styles.searchBoxContainer}>
          <View style={styles.subContainer}>
            <TextInput
              autoCompleteType="off"
              autoCapitalize="words"
              autoCorrect={false}
              maxLength={30}
              value={text}
              style={styles.searchTextInput}
              placeholder="Nefis bir tarif ara..."
              returnKeyLabel={"ARA"}
              returnKeyType="search"
              placeholderTextColor={TextPrimaryColor}
              onChangeText={(text) => onChangeText(text)}
              enablesReturnKeyAutomatically
              //showSoftInputOnFocus={false} //for hiding keyboard
            />
            <Ionicons
              style={styles.searchIcon}
              name="search"
              size={24}
              color="black"
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  linearGradient: {
    zIndex: -1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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

  searchTextInput: {
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
