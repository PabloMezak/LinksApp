import { MaterialIcons } from "@expo/vector-icons"
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native"

//components imports
import { CategoriesList } from "@/components/categories"
import { Link } from "@/components/links"
import { Option } from "@/components/options"


//Importar rotas/Router
import { router } from "expo-router"



//styles imports
import { colorsStyle } from "@/colors/colors"
import { useState } from "react"
import { styles } from "./styles"
export default function Index() {
    const [category, setCategory] = useState(CategoriesList.name[0])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />
                <TouchableOpacity activeOpacity={0.7} onPress={()=> router.navigate("/add")} >
                    <MaterialIcons name="add" size={32} color={colorsStyle.green[300]} />
                </TouchableOpacity>


            </View>
            <CategoriesList  onChange={setCategory} selected={category}/>

            <FlatList data={[1, 2, 3, 4, 5]}
                keyExtractor={(item) => item.toString()}
                renderItem={() => (
                    <Link name="Google" url="https://www.google.com" onDetalhes={() => console.log("clicou")} />

                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false} />
            <Modal transparent visible={false} animationType="slide">
                <View style={styles.modal}>
                    <View style={styles.modalContent} >
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colorsStyle.gray[400]} />
                            </TouchableOpacity>

                        </View>
                        <Text style={styles.modalLinkName}>
                            RocketSeeat
                        </Text>
                        <Text style={styles.modalUrl}>
                            https://app.rocketseat.com.br/
                        </Text>
                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary" />
                            <Option name="Abrir" icon="language" />
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}