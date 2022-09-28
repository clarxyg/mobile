import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { SignIn } from "../Signin";

export function Welcome() {
  const navigation = useNavigation();

  function handleToSignin() {
    navigation.navigate("Signin");
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          resizeMode="contain"
          source={require("../../../assets/logo.png")}
          style={{ width: 200 }}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => handleToSignin()}>
          <Text style={styles.buttonText}>Conecte-se para acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
