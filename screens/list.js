import React from "react";
import { TouchableOpacity, SafeAreaView } from "react-native";
import Slider from "./../components/slider";
import { BorderRadius, Spacing } from "./../config/theme";
import { Icon } from "./../components/icon";
import { View } from "react-native";
import { IconsData, SliderData } from "../config/listData";

export default function List() {
  return (
    <SafeAreaView style={{ paddingTop: Spacing * 5, flex: 1 }}>
      <Slider />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
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
      </View>
    </SafeAreaView>
  );
}
