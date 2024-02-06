import React from "react";
import { View, Image } from "react-native";

import batSinalLogo from "../../../../assets/bat-sinal-logo.png";

import { styles } from "./styles";

export function BatSinalLogo() {
  return (
    <View>
      <Image style={styles.image} source={batSinalLogo} />
    </View>
  );
}
