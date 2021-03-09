import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  Pressable,
} from "react-native";
import Slider from "./slider";
import {
  BorderRadius,
  FontSizeBody,
  FontSizeTitle,
  TextLinkColor,
  TextPrimaryColor,
  Spacing,
} from "../config/theme";
import { Icon } from "./icon";
import { View, Text } from "react-native";
import { IconsData, SliderData } from "../config/listData";
import CardList from "./cardList";

export default function List({ navigation, handleCategoryPress }) {
  console.log(navigation);
  return (
    <SafeAreaView style={{ top: Spacing * 5, flex: 1, width: "100%" }}>
      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          marginBottom: Spacing * 1.5,
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Kategoriler</Text>
        <Text
          style={styles.viewAllText}
          onPress={() => {
            console.log("All categories clicked");
          }}
        >
          Tümü &gt;
        </Text>
      </View>

      {/* CATEGORY SLIDER */}
      <Slider handleCategoryPress={handleCategoryPress} />
      {/* DISH MENUS VERTICAL LIST */}
      <CardList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    height: 20,
    fontSize: FontSizeBody,
    textAlign: "left",
    textAlignVertical: "bottom",
    fontWeight: "bold",
    color: TextPrimaryColor,
    paddingHorizontal: Spacing * 2,
  },

  viewAllText: {
    flex: 1,
    height: 20,
    fontSize: FontSizeBody,
    textAlign: "right",
    textAlignVertical: "bottom",
    fontWeight: "bold",
    color: TextLinkColor,
    paddingHorizontal: Spacing * 3,
  },
});
