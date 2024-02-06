import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    gap: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#ececec",
  },
  errorText: {
    fontSize: 14,
    color: "#800000",
  },
});
