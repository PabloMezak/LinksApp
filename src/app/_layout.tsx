import { colorsStyle } from "@/colors/colors";
import { Stack } from "expo-router";
export default function Layout() {
    return <Stack screenOptions={{headerShown:false,
        contentStyle:{
            backgroundColor: colorsStyle.gray[950]
        }
    }} />
        
}