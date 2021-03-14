import React from "react";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { CategoriesSliderData } from "../config/data";
import {
  ItemWidth,
  width,
  Spacing,
  BorderRadius,
  IconSize,
} from "../config/theme";

export default function Slider({ handleCategoryPress }) {
  return (
    <FlatList
      horizontal
      data={CategoriesSliderData}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString() /* item.color */}
      snapToInterval={ItemWidth + Spacing * 2}
      contentContainerStyle={{
        paddingHorizontal: Spacing /* marginRight: width - ItemWidth - Spacing * 2 */,
      }}
      decelerationRate={"fast"}
      renderItem={({ item, index }) => (
        <Pressable
          key={`${item.id}-${index}`}
          onPress={() => {
            handleCategoryPress({ title: item.title, color: item.color });
            console.log("clicked:", item.title);
          }}
        >
          <View
            elevation={11}
            style={[styles.itemContainer, { backgroundColor: item.color }]}
          >
            <Text style={styles.itemText}>{item.title}</Text>
            <Image
              source={{ uri: item.uri }}
              size={IconSize}
              style={styles.image}
            />
          </View>
        </Pressable>
      )}
      showHorizontalScrollIndicator={false}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    width: ItemWidth,
    height: ItemWidth * 0.4,
    borderRadius: BorderRadius,
    padding: Spacing,
    marginHorizontal: Spacing / 2,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    /*   shadowColor: "grey", //ios
    shadowOffset: { width: 7, height: 7 }, //ios
    shadowOpacity: 1.0, //ios */
  },
  itemText: {
    flex: 1,
    paddingHorizontal: Spacing,
    color: "#fff",
    textShadowColor: "#444",
    textTransform: "uppercase",
  },
  image: {
    flex: 1,
    width: IconSize * 1.2,
    height: IconSize * 1.2,
    resizeMode: "cover",
    borderTopLeftRadius: 21,
    marginRight: -15,
    marginBottom: -45,
  },
});
