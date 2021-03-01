import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    username: "boş olamaz",
    password: "boş olamaz",
  });

  const handleLogin = () => {
    if (username.length > 3 && password.length > 3) {
      navigation.navigate("Products", { name: "Buğra" });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.appHeader}>GİRİŞ</Text>
      </View>

      <View style={styles.midContainer}>
        <Input
          onChangeText={(text) => setUsername(text)}
          defaultValue={username}
          label="Kullanıcı Adı"
          placeholder="Kullanıcı Adı"
          textContentType="username"
          leftIcon={{ type: "font-awesome", name: "user", color: "dodgerblue" }}
          leftIconContainerStyle={{ marginHorizontal: 10 }}
          errorStyle={{ color: "red" }}
          errorMessage={error.username}
        />
        <Input
          onChangeText={(text) => setPassword(text)}
          defaultValue={password}
          label="Şifre"
          placeholder="Şifre"
          textContentType="password"
          secureTextEntry={true}
          leftIcon={{ type: "font-awesome", name: "lock", color: "dodgerblue" }}
          leftIconContainerStyle={{ marginHorizontal: 10 }}
          errorStyle={{ color: "red" }}
          errorMessage={error.password}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Button
          title="GİRİŞ YAP"
          titleStyle={{ paddingRight: 10 }}
          containerStyle={styles.buttonContainer}
          iconContainerStyle={{ justifyContent: "flex-end" }}
          iconRight
          icon={{
            name: "login",
            type: "antdesign",
            color: "white",
          }}
          onPress={handleLogin}
        ></Button>
        <Button
          title="ŞİFREMİ UNUTTUM"
          titleStyle={{ paddingRight: 10 }}
          buttonStyle={{ backgroundColor: "gray" }}
          containerStyle={styles.buttonContainer}
          iconRight
          icon={{
            name: "questioncircleo",
            type: "antdesign",
            color: "white",
          }}
          onPress={() => {
            navigation.navigate("Login", { name: "Buğra" });
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  topContainer: {
    width: "80%",
    flex: 2,
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },

  midContainer: {
    width: "100%",
    flex: 2,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomContainer: {
    width: "100%",
    flex: 3,
    flexGrow: 1.5,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  buttonContainer: {
    width: "80%",
    marginTop: 10,
  },

  appHeader: {
    paddingTop: 20,
    fontSize: 32,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    color: "dodgerblue",
  },

  appLogo: {
    backgroundColor: "#4ecdc4",
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
  },
});
