import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userDataState } from "./../components/social/socialLogin";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FontSizeTitle, Spacing } from "../config/theme";
import SocialLogin from "../components/social/socialLogin";

export default function Profile() {
  const userData = useRecoilValue(userDataState);

  return (
    <SafeAreaView style={styles.mainGrid}>
      <View style={styles.container1}>
        <Text style={styles.title}>Profilim</Text>
        <Text style={styles.userName}>
          {userData.name || userData?.email?.split("@")?.[0]}
        </Text>
        {userData?.picture && (
          <Image
            style={styles.userPicture}
            source={{
              uri: `${userData.picture.data.url || photoURL}`,
            }}
          />
        )}
      </View>

      <View style={styles.container2}>
        <SocialLogin />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainGrid: {
    paddingTop: Spacing * 5,
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  container1: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    padding: Spacing,
  },
  container2: { flex: 0.8 },

  title: { flex: 0.9, fontSize: FontSizeTitle },
  userPicture: {
    flex: 0.2,
    top: -Spacing,
    width: 60,
    height: 60,
    borderRadius: 5,
    resizeMode: "contain",
  },
});
