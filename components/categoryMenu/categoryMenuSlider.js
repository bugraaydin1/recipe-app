import React from "react";
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
} from "../../config/theme";

export default function CategoryMenuSlider({ handleMenuPress, sliderData }) {
  return (
    <FlatList
      horizontal
      data={sliderData}
      keyExtractor={(item, index) => index}
      snapToInterval={ItemWidth + Spacing * 2}
      contentContainerStyle={{
        paddingHorizontal: Spacing,
      }}
      decelerationRate={"fast"}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            handleMenuPress({ title: item.title });
            console.log("clicked:", item.title);
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
            <View style={{ flex: 4, alignSelf: "flex-start" }}>
              <Text style={styles.itemText}>{item.title}</Text>
              <Text style={styles.itemText}>{item.color}</Text>
              <Text style={styles.itemText}>Pişirme süresi: 30dk</Text>
            </View>
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
    marginHorizontal: Spacing / 2,
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
});
