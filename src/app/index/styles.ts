import { colorsStyle } from "@/colors/colors";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        paddingTop: 62,
        flex: 1
    },

    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        height: 32,
        width: 32,
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colorsStyle.gray[600]
    },
    linksContent: {
        gap: 20,
        padding: 20,
        paddingBottom: 100

    },
    modal: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: colorsStyle.gray[900],
        borderRadius: 16,
        borderTopWidth: 1,
        borderTopColor: colorsStyle.gray[800],
        padding: 22,
        paddingBottom: 42,
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32
    },
    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        color: colorsStyle.gray[400]
    },
    modalLinkName: {

        fontSize: 18,
        fontWeight: "500",
        color: colorsStyle.gray[200],

    },
    modalUrl: {
        fontSize: 14,
        color: colorsStyle.gray[400],
    },
    modalFooter: {
        flexDirection: "row",
        marginTop: 32,
        width: "100%",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: colorsStyle.gray[600],
        paddingVertical: 14,
    }

});