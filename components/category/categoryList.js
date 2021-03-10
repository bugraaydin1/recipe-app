import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  Pressable,
  Text,
} from "react-native";
import {
  BorderRadius,
  FontSizeBody,
  FontSizeTitle,
  TextLinkColor,
  TextPrimaryColor,
  Spacing,
  FontSizeSubTitle,
} from "../../config/theme";
import { SliderData } from "../../config/listData";
import CardList from "../cardList";
import CategorySlider from "./categorySlider";

export default function CategoryList({ title, navigation, handleMenuPress }) {
  console.log(navigation);
  return (
    <SafeAreaView style={{ top: Spacing * 5, flex: 1, width: "100%" }}>
      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          marginBottom: Spacing,
          paddingVertical: Spacing,
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Öne Çıkanlar</Text>
      </View>

      {/* CATEGORY HORIZONTAL SLIDER */}
      <CategorySlider
        sliderData={SliderData}
        handleMenuPress={handleMenuPress}
      />
      {/* CATEGORY MENUS VERTICAL LIST */}
      <CardList title={title} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: FontSizeSubTitle,
    textAlign: "center",
    textAlignVertical: "bottom",
    fontWeight: "bold",
    color: TextPrimaryColor,
  },
});
