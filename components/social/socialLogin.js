import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BorderRadius, Spacing, TextPrimaryColor } from "../../config/theme";
import { facebookAppId, googleWebClientId } from "./../../firebase/loginConfig";
import SocialButtons from "../../components/social/socialButtons";
import * as Facebook from "expo-facebook";
import * as GoogleSignIn from "expo-google-sign-in";
import * as firebase from "firebase";
import { Input } from "react-native-elements";

export const userDataState = atom({
  key: "userDataState",
  default: {},
});

export default function SocialLogin() {
  const [userData, setUserData] = useRecoilState(userDataState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    googleInitAsync();
  }, []);

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      //   setUserData(user);
      console.info("We are authenticated now!");
    }
    console.info(("#firebase user:", user));
  });

  const userName = firebase.auth().currentUser;
  console.log("#username:", userName);

  //#region EMAIL LOGIN
  const loginWithEmail = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setUserData(user);
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setError("Bu email kullanıyor");
        }
        if (err.code === "auth/invalid-email") {
          setError("Email/Şifre geçersiz");
        }
        if (err.code === "auth/user-not-found") {
          setError("Bu email kayıtlı değil");
        }
        console.error(err, err.code);
      });
  };

  const signOutWithEmail = () => {
    console.log(firebase.auth().currentUser);
    firebase.auth().currentUser &&
      firebase
        .auth()
        .signOut()
        .then(() => console.log("signout"))
        .catch((err) => console.log(err));

    setUserData();
  };

  const signupWithEmail = () => {
    if (email && password && password === passwordRepeat) {
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            console.info("user account created");
          });
      } catch (err) {
        console.log(err);
      }
    } else if (password !== passwordRepeat) {
      setError("Şifreler eşleşmiyor");
    }
  };
  //#endregion

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

      // Sign in with credential from the Facebook user.
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch((err) => {
          console.error({ err });
        });

      setUserData(await response.json());
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

  //   console.log("#user:", userData);

  return (
    <View>
      {!userData && (
        <>
          <Input
            autoCompleteType="email"
            placeholder="E-mail"
            maxLength={30}
            value={email}
            leftIcon={<Ionicons size={21} name="person" color="crimson" />}
            placeholderTextColor={TextPrimaryColor}
            onChangeText={(text) => setEmail(text)}
            inputStyle={{ fontSize: 14 }}
            inputContainerStyle={{
              borderColor: "transparent",
              height: 40,
            }}
            containerStyle={styles.inputContainer}
          />
          <Input
            secureTextEntry
            placeholder="Şifre"
            autoCompleteType="password"
            maxLength={30}
            value={password}
            leftIcon={<Ionicons size={21} name="lock-closed" color="crimson" />}
            placeholderTextColor={TextPrimaryColor}
            onChangeText={(text) => setPassword(text)}
            inputStyle={{ fontSize: 14 }}
            inputContainerStyle={{
              borderColor: "transparent",
              height: 40,
            }}
            errorStyle={{ top: -5 }}
            errorMessage={!isSignup && email && password ? error : ""}
            containerStyle={styles.inputContainer}
          />
          {isSignup && (
            <Input
              secureTextEntry
              placeholder="Şifreyi tekrar yazın"
              autoCompleteType="password"
              maxLength={30}
              value={passwordRepeat}
              leftIcon={
                <Ionicons size={21} name="lock-closed" color="crimson" />
              }
              placeholderTextColor={TextPrimaryColor}
              onChangeText={(text) => setPasswordRepeat(text)}
              inputStyle={{ fontSize: 14 }}
              inputContainerStyle={{
                borderColor: "transparent",
                height: 40,
              }}
              errorStyle={{ top: -5 }}
              errorMessage={email && password ? error : ""}
              containerStyle={styles.inputContainer}
            />
          )}
        </>
      )}
      <Pressable
        color="crimson"
        style={styles.button}
        onPress={() =>
          !userData
            ? !isSignup
              ? loginWithEmail()
              : signupWithEmail()
            : signOutWithEmail()
        }
      >
        <Text style={{ color: "#fff" }}>
          {!userData
            ? !isSignup
              ? "Giriş Yap"
              : "Kayıt ol"
            : `${userData?.email?.split("@")?.[0]} Çıkış`}
        </Text>
      </Pressable>

      {!userData && (
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: Spacing,
            marginBottom: Spacing * 2,
          }}
        >
          <Pressable
            onPress={() => setIsSignup(!isSignup)}
            style={styles.pressable}
          >
            <Text style={styles.text}>
              {!isSignup ? "Kayıt ol" : "Giriş Yap"}
            </Text>
          </Pressable>
          <Pressable style={styles.pressable}>
            <Text style={styles.text}>Şifremi Unuttum</Text>
          </Pressable>
        </View>
      )}

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
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    width: "90%",
    margin: Spacing,
    borderRadius: BorderRadius,
    borderBottomColor: "gray",
    borderWidth: 1,
  },

  button: {
    height: 40,
    width: "90%",
    margin: Spacing,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "crimson",
    borderRadius: BorderRadius,
  },
  pressable: { paddingHorizontal: Spacing },
  text: { color: "crimson" },
});
