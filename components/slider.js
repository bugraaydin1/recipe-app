import React from "react";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { SliderData } from "../config/listData";
import {
  ItemWidth,
  width,
  Spacing,
  BorderRadius,
  IconSize,
} from "../config/theme";

export default function Slider() {
  return (
    <FlatList
      horizontal
      data={SliderData}
      keyExtractor={(item, index) => index /* item.color */}
      snapToInterval={ItemWidth + Spacing * 2}
      contentContainerStyle={{
        paddingHorizontal: Spacing /* marginRight: width - ItemWidth - Spacing * 2 */,
      }}
      decelerationRate={"fast"}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
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
    width: ItemWidth * 1.5,
    height: ItemWidth * 0.8,
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
    color: "#fff",
    textShadowColor: "#444",
    textTransform: "uppercase",
  },
  image: {
    width: IconSize * 1.2,
    height: IconSize * 1.2,
    resizeMode: "cover",
    borderTopLeftRadius: 21,
    marginRight: -120,
    marginBottom: -55,
  },
});
