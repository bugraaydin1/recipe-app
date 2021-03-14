import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import ScreenTitle from "../components/head/screenTitle";
import {
  BorderRadius,
  FontSizeBody,
  FontSizeTitle,
  ItemWidth,
  LightestGray,
  Spacing,
  TextPrimaryColor,
} from "../config/theme";
import { Rating } from "react-native-ratings";
import { MenusData } from "../config/data";
import { BackIcon } from "./../components/backIcon";
import FavoriteBadge from "../components/common/favoriteBadge";
import { SharedElement } from "react-navigation-shared-element";

//implemnent full page recipe menu details
export default function MenuDetails({ route, navigation }) {
  const [favorite, setFavorite] = useState(false);
  const { id, title } = route.params;

  const { height, width } = Dimensions.get("window");

  const getUri = (id) => {
    const card = MenusData.filter((data) => data.id === id);
    return card[0].uri;
  };

  const getRating = (id) => {
    const card = MenusData.filter((data) => data.id === id);
    return card[0].rating;
  };

  const ratingCompleted = (rating = 5) => {
    console.log("Rating is: " + rating);
  };

  console.log(route);

  MenuDetails.sharedElements = (route, otherRoute, showing) => {
    const { id } = route.params;
    console.log("### item Menu Details object:", route);
    return [
      {
        id: `${id}`,
        animation: "move", //fade
        // resize: "clip", //auto | stretch | clip | none
        // align: "center-bottom", //center-bottom
      },
    ];
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      resizeMode: "cover",
      /* flex: 0.6, */
      //top: 0,
      //width: "100%",
      //height: 900,
      //height: "45%",
    },
    bottomGrid: {
      /* flex: 0.4, */
      position: "absolute",
      width,
      height: height * 0.4,
      left: 0,
      bottom: 0,
      zIndex: 3,
      overflow: "hidden",
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      backgroundColor: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      {/* <SharedElement
        id={`${id}`}
        style={[
          StyleSheet.absoluteFill, // absoluteFill
        ]}
      > */}
      <Image
        source={{ uri: getUri(id) }}
        style={[
          {
            bottom: width / 3,
            width,
            height, //(height * 3) / 5,
            resizeMode: "cover",
          },
          styles.image,
        ]}
      />
      {/* </SharedElement> */}
      <BackIcon onPress={() => navigation.goBack()} />

      <View elevation={21} style={styles.bottomGrid}>
        <View
          style={{
            alignSelf: "center",
            top: 7,
            height: 4,
            width: "30%",
            borderRadius: 5,
            backgroundColor: "lightgray",
          }}
        ></View>
        <Text style={{ top: 20, left: 30, fontSize: FontSizeTitle }}>
          Menü {id}: {title}
        </Text>
        <View
          style={{
            position: "absolute",
            top: 15,
            right: 15,
          }}
        >
          <FavoriteBadge
            index={id}
            size="large"
            handleFavorite={setFavorite}
            favorite={favorite}
          />
        </View>
        <Rating
          style={{ position: "absolute", top: 60, left: 30 }}
          type="star"
          fractions={1}
          ratingCount={5}
          imageSize={21}
          minValue={1}
          startingValue={3}
          defaultRating={getRating(id)}
          onFinishRating={ratingCompleted}
        />
      </View>
    </View>
  );
}
