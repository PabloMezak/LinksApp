import { colorsStyle } from "@/colors/colors";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
export function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput style={styles.container}  
        placeholderTextColor={colorsStyle.gray[400]}
        
        {...rest}/>
    )
}