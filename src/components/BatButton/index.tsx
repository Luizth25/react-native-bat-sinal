import React from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./styles";
import { TBatButtonProps } from "./types";

export function BatButton({ onPress, text }: TBatButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
