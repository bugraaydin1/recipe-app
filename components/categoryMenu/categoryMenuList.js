import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  Pressable,
} from "react-native";
import {
  BorderRadius,
  FontSizeBody,
  FontSizeTitle,
  TextLinkColor,
  TextPrimaryColor,
  Spacing,
} from "../../config/theme";
import { View, Text } from "react-native";
import CardList from "./../cardList";
import Slider from "./../slider";
import { SliderData } from "../../config/listData";
import CategoryMenuSlider from "./categoryMenuSlider";

export default function CategoryMenuList({
  title,
  navigation,
  handleMenuPress,
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
        <Text style={styles.title}>Öne Çıkanlar</Text>
      </View>

      {/* CATEGORY SLIDER */}
      <CategoryMenuSlider
        sliderData={SliderData}
        handleMenuPress={handleMenuPress}
      />
      {/* DISH MENUS VERTICAL LIST */}
      <CardList title={title} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: FontSizeBody,
    textAlign: "left",
    textAlignVertical: "bottom",
    fontWeight: "bold",
    color: TextPrimaryColor,
    paddingHorizontal: Spacing * 2,
  },
});
