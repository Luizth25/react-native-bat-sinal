import React from "react";
import { Text, View, Image, Pressable } from "react-native";

import batSinalLogo from "../../../assets/bat-sinal-logo.png";

import { styles } from "./styles";

export function BatSinalLogo() {
  return (
    <>
      <View>
        <Image style={styles.image} source={batSinalLogo} />
        <Pressable style={styles.Button} onPress={() => console.log("onPress")}>
          <Text style={styles.text}>Ative o Bat Sinal 🚨</Text>
        </Pressable>
      </View>
    </>
  );
}
