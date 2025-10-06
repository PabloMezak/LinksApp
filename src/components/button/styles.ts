import { colorsStyle } from "@/colors/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    backgroundColor: colorsStyle.green[300],
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colorsStyle.green[900],
    fontSize: 16,
    fontWeight: "600"
  }
})