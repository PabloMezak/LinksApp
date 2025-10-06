
import { colorsStyle } from "@/colors/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 52,
        width: "100%",
        backgroundColor: colorsStyle.gray[900],
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colorsStyle.gray[800],
        padding: 10,
        color: colorsStyle.gray[100],
        fontSize: 16
    }
})