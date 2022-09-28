import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";

interface ParamsProps {
  token: string;
}

interface User {
  picture: string;
}

export function Header() {
  const [user, setUser] = useState({} as User);
  const route = useRoute()


  const { token } = route.params as ParamsProps;

  async function loadUser() {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`
    );
    const userInfo = await response.json();

    setUser(userInfo);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Programação</Text>
      <Image
        source={{ uri: user.picture }}
        style={{ width: 35, height: 35, borderRadius: 17.5 }}
      />
    </View>
  );
}
