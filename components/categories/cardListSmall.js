import React from "react";
import {
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import { MenuCardData } from "../../config/listData";
import {
  BorderRadius,
  FontSizeBody,
  FontSizeBody2,
  TextPrimaryColor,
  Spacing,
  FontSizeSubTitle,
  ItemWidth,
  IconSize,
} from "../../config/theme";

export default function CardListSmall({ title, navigation }) {
  console.log("AllcategoriesNarrow:", navigation);
  return (
    <View style={styles.container}>
      {/* CATEGORY TITLE CARDS */}
      <FlatList
        vertical
        style={{ width: "100%" }}
        data={[...MenuCardData, ...MenuCardData]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        snapToInterval={ItemWidth * 0.4 + Spacing * 2}
        contentContainerStyle={{
          padding: Spacing,
        }}
        decelerationRate={"normal"}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              navigation.push("Kategori", {
                category: { id: item.id, title: item.title },
              });
              console.log("clicked Category Title Card:", item.title);
            }}
          >
            <View
              elevation={5}
              style={[styles.itemContainer, { backgroundColor: item.color }]}
            >
              <View style={{ flex: 0.6 }}>
                <View>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSubTitle}>{item.subTitle}</Text>
                </View>
              </View>
              <Image
                source={{ uri: item.uri }}
                size={ItemWidth}
                style={styles.image}
              />
            </View>
          </Pressable>
        )}
        showHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    height: "auto",
  },

  title: {
    height: 20,
    paddingHorizontal: Spacing * 3,
    fontSize: FontSizeSubTitle,
    fontWeight: "bold",
    color: TextPrimaryColor,
    height: 30,
  },

  itemContainer: {
    flexDirection: "row",
    width: "95%",
    margin: Spacing,
    marginTop: 0,
    height: ItemWidth * 0.4,
    borderRadius: BorderRadius,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderColor: "gray",
    overflow: "hidden",
  },

  itemTitle: {
    color: "#fff",
    textShadowColor: "#444",
    textTransform: "uppercase",
    paddingVertical: 3,
    paddingHorizontal: Spacing,
  },
  itemSubTitle: {
    color: "#fff",
    textShadowColor: "#444",
    fontSize: FontSizeBody2,
    textTransform: "capitalize",
    paddingVertical: 3,
    paddingHorizontal: Spacing,
  },

  image: {
    flex: 0.4,
    width: "100%",
    height: ItemWidth * 0.4,
    resizeMode: "cover",
  },
});
