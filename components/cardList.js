import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
} from "react-native";
import { MenusData } from "../config/data";
import {
  BorderRadius,
  FontSizeBody,
  FontSizeBody2,
  TextPrimaryColor,
  Spacing,
  FontSizeSubTitle,
  ItemWidth,
  IconSize,
  LightestGray,
} from "../config/theme";
import FavoriteBadge from "./common/favoriteBadge";
import { Rating } from "react-native-ratings";
import { SharedElement } from "react-navigation-shared-element";

export default function CardList({ title, handleMenuPress }) {
  const [favorite, setFavorite] = useState({});

  const { height, width } = Dimensions.get("window");

  const ratingCompleted = (rating = 5) => {
    console.log("Rating is: " + rating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        En nefis {title?.toLocaleLowerCase() || "tarifler"}
      </Text>

      {/* DISH CARDS */}
      <FlatList
        vertical
        data={MenusData}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        snapToInterval={ItemWidth + Spacing * 2}
        contentContainerStyle={{
          padding: Spacing,
        }}
        decelerationRate={"normal"}
        renderItem={({ item, index }) => (
          <Pressable
            key={`${item.id}-${index + 10}`}
            onPress={() => {
              handleMenuPress({ id: item.id, title: item.title });
              console.log("clicked Menu Card:", item.title);
            }}
          >
            <View
              elevation={5}
              style={[
                Platform.OS === "ios" && {
                  borderWidth: 0.2,
                  borderColor: LightestGray,
                },
                { backgroundColor: item.color },
                styles.itemContainer,
              ]}
            >
              {/* <SharedElement id={`${item.id}`}> */}
              <Image
                source={{ uri: item.uri }}
                style={[
                  {
                    width: !Platform.isPad ? ItemWidth * 2 : width,
                    height: ItemWidth * 0.7,
                  },
                  styles.image,
                ]}
              />
              {/* </SharedElement> */}
              <FavoriteBadge
                size="medium"
                index={index}
                handleFavorite={setFavorite}
                favorite={favorite}
              />
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSubTitle}>{item.subTitle}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    position: "absolute",
                    right: 0,
                    marginTop: !Platform.isPad ? Spacing * 3.5 : Spacing * 3,
                  }}
                >
                  <Rating
                    type="star"
                    fractions={1}
                    ratingCount={5}
                    imageSize={!Platform.isPad ? 21 : 25}
                    minValue={1}
                    startingValue={3}
                    defaultRating={item.rating}
                    onFinishRating={ratingCompleted}
                  />
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
  },

  title: {
    height: 20,
    paddingHorizontal: Spacing * 3,
    fontSize: FontSizeSubTitle,
    // textAlignVertical: "bottom",
    fontWeight: "bold",
    color: TextPrimaryColor,
    height: 30,
  },

  itemContainer: {
    width: "95%",
    margin: Spacing,
    marginBottom: Spacing * 2,
    marginTop: 0,
    height: ItemWidth,
    borderRadius: BorderRadius,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderColor: "gray",
    overflow: "hidden",
    elevation: 5,
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
    resizeMode: "cover",
  },
});
