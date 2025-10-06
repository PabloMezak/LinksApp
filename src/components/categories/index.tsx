import { FlatList } from "react-native";
import { categories } from "../../utils/categorys";
import { Category } from "../category";
import { styles } from './styles';

type props = {
    selected: string,
    onChange: (category:string) => void

}

export function CategoriesList( {selected, onChange}: props) {
    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category
                    name={item.name}
                    icon={item.icon}
                    isSelected={item.name === selected}
                    onPress={()=> onChange(item.name)}
                />
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    );
}

