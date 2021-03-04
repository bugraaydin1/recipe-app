import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import { IconsData, SliderData } from "../config/listData";
import { BorderRadius, FontSizeBody, Spacing, width } from "../config/theme";
import { BackIcon } from "./../components/backIcon";
import { Icon } from "./../components/icon";

export default function Details() {
  const ref = useRef();
  const item = IconsData[0];
  const selectedItemIndex = IconsData.findIndex((i) => i.id === item.id);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackIcon onPress={() => navigation.goBack()} />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "nowrap",
          marginVertical: 20,
        }}
      >
        {IconsData.map((item) => (
          <TouchableOpacity style={{ padding: Spacing }} key={item.id}>
            <Icon url={item.url} />
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        ref={ref}
        horizontal
        pagingEnabled
        nestedScrollEnabled
        data={IconsData}
        keyExtractor={(item) => item.id}
        initialScrollIndex={selectedItemIndex}
        renderItem={(item) => (
          <ScrollView
            style={{
              width: width - Spacing * 2,
              margin: Spacing,
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: BorderRadius,
            }}
          >
            <View style={{ padding: Spacing }}>
              <Text style={{ fontSize: FontSizeBody }}>
                {Array(50).fill(`${item.title} text \n`)}
              </Text>
            </View>
          </ScrollView>
        )}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </SafeAreaView>
  );
}
