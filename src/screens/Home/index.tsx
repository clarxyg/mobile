import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { List } from "../../components/List";

import { styles } from "./styles";


export function Home() {
  const navigation = useNavigation()

  // async function getList() {
  //   const response = await fetch('http://localhost:8080');
  //   console.log(response)
  // }

  // useEffect(() => {
  //   getList()
  // }, [])

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity style={{ marginHorizontal: 16, marginVertical: 10 }} onPress={() => navigation.navigate('Welcome')}>
        <MaterialCommunityIcons name="arrow-left" size={30} color="#999" />
      </TouchableOpacity>
      <ScrollView>
        <List/>
      </ScrollView>
    </View>
  );
}
