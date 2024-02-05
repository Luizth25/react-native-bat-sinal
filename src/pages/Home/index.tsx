import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { BatSinalLogo } from "../../components/BatSinalLogo";
import { StatusBar } from "expo-status-bar";

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BatSinalLogo />
    </View>
  );
}
