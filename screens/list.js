import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  Pressable,
} from "react-native";
import Slider from "./../components/slider";
import {
  BorderRadius,
  FontSizeBody,
  FontSizeTitle,
  TextLinkColor,
  TextPrimaryColor,
  Spacing,
} from "./../config/theme";
import { Icon } from "./../components/icon";
import { View, Text } from "react-native";
import { IconsData, SliderData } from "../config/listData";
import CardList from "../components/cardList";

export default function List() {
  return (
    <SafeAreaView style={{ paddingTop: Spacing * 5, flex: 1, width: "100%" }}>
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
          onPress={() => console.log("All categories clicked")}
        >
          Tümü &gt;
        </Text>
      </View>

      {/* CATEGORY SLIDER */}
      <Slider />
      {/* DISH MENUS VERTICAL LIST */}
      <CardList />

      {/* <View style={styles.container}>
        {IconsData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{ padding: Spacing, borderRadius: BorderRadius }}
            onPress={() => {
              console.log("clicked:", item.title);
            }}
          >
            <Icon url={item.url} />
          </TouchableOpacity>
        ))}
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

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
