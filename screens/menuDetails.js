import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
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
import { MenuCardData } from "./../config/listData";
import { BackIcon } from "./../components/backIcon";
import FavoriteBadge from "../components/common/favoriteBadge";

//implemnent full page recipe menu details
export default function MenuDetails({ route, navigation }) {
  const [favorite, setFavorite] = useState(false);
  const { id, title } = route.params;

  const getUri = (id) => {
    const card = MenuCardData.filter((data) => data.id === id);
    return card[0].uri;
  };

  const getRating = (id) => {
    const card = MenuCardData.filter((data) => data.id === id);
    return card[0].rating;
  };

  const ratingCompleted = (rating = 5) => {
    console.log("Rating is: " + rating);
  };

  console.log(route);

  return (
    <View style={styles.container}>
      <Image source={{ uri: getUri(id) }} style={styles.image} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 0.6,
    //top: 0,
    marginBottom: -15,
    width: "100%",
    //height: "45%",
    resizeMode: "cover",
  },
  bottomGrid: {
    flex: 0.4,
    width: "100%",
    marginTop: -10,
    zIndex: 3,
    overflow: "hidden",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#fff",
  },
});
