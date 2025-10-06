import { MaterialIcons } from "@expo/vector-icons";

type categortyType = {
    id: string;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export const categories: categortyType[] = [
    { id: '1', name: "Curso", icon: "code" },
    { id: '2', name: "projeto", icon: "folder" },
    { id: '3', name: "site", icon: "language" },
    { id: '4', name: "Fotos", icon: "photo" },
    { id: '5', name: "Voos", icon: "airplane-ticket" },



];