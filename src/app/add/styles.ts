import { colorsStyle } from "@/colors/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  title: {
    color: colorsStyle.gray[200],
    fontSize: 24,
    fontWeight: "600",
  },
  label: {
    color: colorsStyle.gray[400],
    fontSize: 14,
    paddingHorizontal: 24,
  },
  form: {
    padding: 24,
    gap: 16,
  }
})