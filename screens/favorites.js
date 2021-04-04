import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FontSizeTitle, Spacing } from "../config/theme";
import SocialButtons from "../components/social/socialButtons";
import { googleWebClientId } from "./../firebase/loginConfig";
import * as Facebook from "expo-facebook";
import * as GoogleSignIn from "expo-google-sign-in";
import * as firebase from "firebase";

export default function Favorites() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("We are authenticated now!");
      }
      console.log(("#firebase user:", user));
    });

    googleInitAsync();
  }, []);

  //#region FB LOGIN
  const loginWithFacebook = async () => {
    await Facebook.initializeAsync({ appId: facebookAppId });

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
      behavior: "mobile",
    });
    console.log("#type::", type);

    if (type === "success") {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(60).width(60)`
      );

      setUserData(await response.json());

      // Sign in with credential from the Facebook user.
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch((err) => {
          console.error({ err });
        });
    }
  };
  //#endregion

  //#region GOOGLE LOGIN
  const googleInitAsync = async () => {
    await GoogleSignIn.initAsync({
      clientId: googleWebClientId,
    });
    googleSyncUserWithStateAsync();
  };

  const googleSyncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setUserData({ user });
  };

  const googleSignOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setUserData();
  };

  const loginWithGoogle = async () => {
    googleInitAsync();

    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();

      console.log("#google status:", user, type);

      if (type === "success") {
        googleSyncUserWithStateAsync();
        setUserData(user);
      }
    } catch ({ message }) {
      alert("login Error:" + message);
    }

    /*  // Sign in with credential from the Facebook user.
    firebase
      .auth()
      .signInWithCredential(credential)
      .catch((err) => {
        console.error("Error Message:", err);
        // Handle Errors here.
      }); */
  };
  //#endregion

  console.log("#userData:", userData);

  return (
    <SafeAreaView style={styles.mainGrid}>
      <Text style={styles.container1}>Favori Tariflerim</Text>

      {userData?.picture && (
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 5,
            resizeMode: "contain",
          }}
          source={{
            uri: `${userData.picture.data.url}`,
          }}
        />
      )}

      <View style={styles.container2}>
        <SocialButtons
          id="fb-login"
          iconName="logo-facebook"
          backgroundColor="#4267b2"
          buttonText={
            !userData ? "Facebook'la Giriş Yap" : `${userData?.name} çıkış yap.`
          }
          onPress={() => {
            !userData
              ? loginWithFacebook()
              : Facebook.logOutAsync().then(() => setUserData());
          }}
        />
        <SocialButtons
          id="google-login"
          iconName="logo-google"
          backgroundColor="rgb(54,147,255)"
          buttonText={
            !userData ? "Google'la Giriş Yap" : `${userData?.name} çıkış yap.`
          }
          onPress={() => {
            !userData ? loginWithGoogle() : googleSignOutAsync();
          }}
        />
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
  container1: { flex: 0.6, fontSize: FontSizeTitle },
  container2: { flex: 0.4 },
});
