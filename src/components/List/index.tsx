import React, { useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Animated,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export function List() {
  const [showContent, setShowContent] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = useState(false);

  function handleArrowAnimated() {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };

    Animated.timing(animationController, config).start();
    setShowContent(!showContent);
  }

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["90deg", "0deg"],
  });

  const thumbColorOn = Platform.OS === "android" ? "#ffff" : "#ffff";
  const thumbColorOff = Platform.OS === "android" ? "#ffff" : "#ffff";
  const trackColorOn = Platform.OS === "android" ? "#66ff66" : "#66ff66";
  const trackColorOff = Platform.OS === "android" ? "tomato" : "tomato";

  const toggleSwitch = () => {
    setEnabled((oldValue) => !oldValue);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentDescription}>
        <Image
              source={require("../../../assets/iconcravoearosa.jpg")}
              style={styles.image}
            />
          <Text>18:35</Text>
          <TouchableOpacity onPress={() => handleArrowAnimated()}>
            <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={30}
                color="#000"
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
        {!showContent && (
          <View>
            <Image
              source={require("../../../assets/cravoearosa.jpg")}
              style={styles.banner}
            />
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              esse molestias, aperiam fugiat eveniet ab et animi veniam illum
              voluptatem minus laborum pariatur quod earum laudantium aspernatur
              dolorum porro laboriosam?
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 15,
              }}
            >
              <Text style={styles.remembertitle}>Ativar lembrete</Text>
              <Switch
                onValueChange={toggleSwitch}
                value={enabled}
                thumbColor={enabled ? thumbColorOn : thumbColorOff}
                trackColor={{ false: trackColorOff, true: trackColorOn }}
                ios_backgroundColor={trackColorOff}
              />
            </View>
          </View>
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.contentDescription}>
        <Image
              source={require("../../../assets/iconmaisvc.jpeg")}
              style={styles.image}
            />
          <Text>18:35</Text>
          <TouchableOpacity onPress={() => handleArrowAnimated()}>
            <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={30}
                color="#000"
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
        {!showContent && (
          <View>
            <Image source={require('../../../assets/maisvc.jpg')} style={styles.banner} />
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              esse molestias, aperiam fugiat eveniet ab et animi veniam illum
              voluptatem minus laborum pariatur quod earum laudantium aspernatur
              dolorum porro laboriosam?
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 15,
              }}
            >
              <Text style={styles.remembertitle}>Ativar lembrete</Text>
              <Switch
                onValueChange={toggleSwitch}
                value={enabled}
                thumbColor={enabled ? thumbColorOn : thumbColorOff}
                trackColor={{ false: trackColorOff, true: trackColorOn }}
                ios_backgroundColor={trackColorOff}
              />
            </View>
          </View>
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.contentDescription}>
            <Image
              source={require("../../../assets/Mar_do_Sertao.png")}
              style={styles.image}
            />
          <Text>18:35</Text>
          <TouchableOpacity onPress={() => handleArrowAnimated()}>
            <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={30}
                color="#000"
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
        {!showContent && (
          <View>
            <Image source={require('../../../assets/Mar_do_Sertao.png')} style={styles.banner} />
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              esse molestias, aperiam fugiat eveniet ab et animi veniam illum
              voluptatem minus laborum pariatur quod earum laudantium aspernatur
              dolorum porro laboriosam?
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 15,
              }}
            >
              <Text style={styles.remembertitle}>Ativar lembrete</Text>
              <Switch
                onValueChange={toggleSwitch}
                value={enabled}
                thumbColor={enabled ? thumbColorOn : thumbColorOff}
                trackColor={{ false: trackColorOff, true: trackColorOn }}
                ios_backgroundColor={trackColorOff}
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
