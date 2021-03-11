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

export default function List({
  navigation,
  handleMenuPress,
  handleCategoryPress,
  handleAllCategoriesPress,
}) {
  console.log(navigation);
  return (
    <SafeAreaView style={{ top: Spacing * 5, flex: 1, width: "100%" }}>
      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          marginBottom: Spacing * 1.5,
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Kategori</Text>
        <Text
          style={styles.viewAllText}
          onPress={() => handleAllCategoriesPress()}
        >
          Tümü &gt;
        </Text>
      </View>

      {/* CATEGORY HORIZONTAL SLIDER */}
      <Slider handleCategoryPress={handleCategoryPress} />
      {/* DISH MENUS VERTICAL LIST */}
      <CardList handleMenuPress={handleMenuPress} />
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
