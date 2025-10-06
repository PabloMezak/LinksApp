import { colorsStyle } from "@/colors/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

type Props = TouchableOpacityProps & {
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    variant?: "primary" | "secondary";
}

export function Option({ name, icon, variant = "primary", ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <MaterialIcons name={icon}
                size={20}
                color={variant === "primary" ? colorsStyle.green[300] : colorsStyle.gray[400]}
            />
            <Text style={variant === "primary" ? styles.primaryTitle : styles.secondaryTitle}>
                {name}
            </Text>
        </TouchableOpacity>
    );
}