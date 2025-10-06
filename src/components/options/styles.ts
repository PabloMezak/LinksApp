import { colorsStyle } from "@/colors/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  primaryTitle: {
    color: colorsStyle.green[300],
    fontSize: 16,
    fontWeight: "600"
  },
  secondaryTitle: {
    color: colorsStyle.gray[400],
    fontSize: 16,
  },
})