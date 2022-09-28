import React from "react";
import * as AuthSession from "expo-auth-session";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

interface AuthProps {
  type: string;
  params: {
    access_token: string;
  };
}

const { clientId } = process.env;
const { redirectURI } = process.env
const responseType = "token";
const scope = encodeURI("profile email");

export function SignIn() {
  const navigation = useNavigation();

  async function handleSignin() {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}&scope=${scope}`;
    const { type, params } = (await AuthSession.startAsync({
      authUrl,
    })) as AuthProps;

    if (type === "success") {
      navigation.navigate("Home", { token: params.access_token });
    } else {
      alert("Alguma coisa deu errado..");
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleSignin()}>
        <MaterialCommunityIcons name="google" size={24} color="#fff" />
        <Text style={styles.text}>Entre com o Google</Text>
      </TouchableOpacity>
    </View>
  );
}
