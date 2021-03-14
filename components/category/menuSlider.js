import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
  Image,
  Text,
} from "react-native";
import {
  ItemWidth,
  width,
  Spacing,
  BorderRadius,
  IconSize,
  TinyIconSize,
} from "../../config/theme";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons/";
import FavoriteBadge from "../common/favoriteBadge";

export default function MenuSlider({ handleMenuPress, CategoriesSliderData }) {
  const [favorite, setFavorite] = useState(false);

  console.log(favorite);
  return (
    <FlatList
      horizontal
      data={CategoriesSliderData}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      snapToInterval={ItemWidth * 1.5 + Spacing * 2}
      contentContainerStyle={{
        paddingHorizontal: Spacing,
      }}
      decelerationRate={"fast"}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            handleMenuPress({ title: item.title, id: item.id });
            console.log(" MenuSlider Menu clicked:", item.title);
          }}
        >
          <View
            elevation={11}
            style={[styles.itemContainer, { backgroundColor: item.color }]}
          >
            <Image
              source={{ uri: item.uri }}
              size={IconSize}
              style={styles.image}
            />
            <View
              style={{
                flex: 4,
                alignSelf: "flex-start",
                paddingHorizontal: Spacing,
              }}
            >
              <Text style={styles.itemText}>{item.title}</Text>

              <View style={styles.featureContainer}>
                <Ionicons name="people" size={24} color="#fff" />
                <Text style={styles.itemText}>{"3-4"} kişilik</Text>
              </View>
              <View style={styles.featureContainer}>
                <MaterialIcons name="local-dining" size={24} color="#fff" />
                <Text style={styles.itemText}>Pişirme: 30dk</Text>
              </View>
            </View>

            <FavoriteBadge
              index={index}
              handleFavorite={setFavorite}
              favorite={favorite}
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
    width: ItemWidth * 1.5,
    height: ItemWidth * 0.6,
    borderRadius: BorderRadius,
    padding: Spacing,
    marginHorizontal: Spacing,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    /*   shadowColor: "grey", //ios
    shadowOffset: { width: 7, height: 7 }, //ios
    shadowOpacity: 1.0, //ios */
  },
  itemText: {
    /*  flex: 4, */
    paddingHorizontal: Spacing,
    paddingVertical: Spacing / 2,
    color: "#fff",
    textTransform: "capitalize",
  },
  image: {
    flex: 3,
    width: ItemWidth,
    height: ItemWidth * 0.6,
    resizeMode: "cover",
    marginLeft: -11,
    /* marginBottom: -45, */
  },
  featureContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
