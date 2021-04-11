import React from "react";
import { useRecoilValue } from "recoil";
import SocialLogin, { userDataState } from "../components/social/socialLogin";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FontSizeTitle, Spacing } from "../config/theme";

export default function Favorites() {
  const userData = useRecoilValue(userDataState);

  return (
    <SafeAreaView style={styles.mainGrid}>
      <Text style={styles.container1}>Favori Tariflerim</Text>
      <View style={styles.container2}>{!userData && <SocialLogin />}</View>
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
  container1: { flex: 0.3, fontSize: FontSizeTitle },
  container2: { flex: 0.7 },
});
