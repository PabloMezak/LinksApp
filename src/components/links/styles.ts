import { StyleSheet } from "react-native";

import { colorsStyle } from "@/colors/colors";


export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap:12,
    },
    detals:{
        flex:1,
    },
    name:{
        color: colorsStyle.gray[100],
        fontSize:16,
        fontWeight:"600",
    },
    url:{
        color: colorsStyle.gray[400],
        fontSize:14,
    }
})