import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { BatSinal } from "../../components/BatSinal";

type THomeProps = {
  active: boolean;
};

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BatSinal />
    </View>
  );
}
