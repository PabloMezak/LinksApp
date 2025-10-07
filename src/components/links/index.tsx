import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

import { colorsStyle } from '@/colors/colors';
import { styles } from './styles';

type Props = {
    name: string;
    url: string;
    onDetalhes: () => void;
}

export function Link({ name, url, onDetalhes }: Props) {
    return (

        <View style={styles.container}>
            <View style={styles.detals}>
                <TouchableOpacity onPress={onDetalhes}>
                    <Text style={styles.name} numberOfLines={1}>
                        {name}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.url} numberOfLines={1}>
                    {url}
                </Text>
            </View>
            <TouchableOpacity onPress={onDetalhes}>
                <MaterialIcons name='more-horiz' size={20} color={colorsStyle.gray[400]} />
            </TouchableOpacity>
        </View>
    )
}