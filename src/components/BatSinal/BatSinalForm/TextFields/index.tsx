import React from "react";
import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";
import { TTextFieldsProps } from "./types";

export function TextFields({
  label,
  placeholder,
  keyboardType,
  multiline,
  maxLength,
  numberOfLines,
  onChangeText,
  error,
}: TTextFieldsProps) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.textInput}
        multiline={multiline}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}
