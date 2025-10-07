import { MaterialIcons } from "@expo/vector-icons"
import { Alert, FlatList, Image, Linking, Modal, Text, TouchableOpacity, View } from "react-native"
//components imports
import { CategoriesList } from "@/components/categories"
import { Link } from "@/components/links"
import { Option } from "@/components/options"
import { linkStorage, LinkStorage } from "@/storage/link-storage"

//Importar rotas/Router
import { router, useFocusEffect } from "expo-router"
import { useCallback, useState } from "react"


//styles imports
import { colorsStyle } from "@/colors/colors"

import { styles } from "./styles"
export default function Index() {
    const [link, Setlinks] = useState<LinkStorage>({} as LinkStorage)
    const [showModal, setShowModal] = useState(false)
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [category, setCategory] = useState(CategoriesList.name[0])


    function handleDetals(selected: LinkStorage) {
        setShowModal(true)
        Setlinks(selected)
    }
    async function linkRemove() {
        try {
            await linkStorage.remove(link.id)
            getLinks()
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "não foi possivel remover o item")
        }
    }

    function handleRemove() {
        Alert.alert("Excluir", "deseja realmente excluir", [
            {
                style: "cancel", text: "Não"
            },
            {
                text: "sim", onPress: linkRemove
            }

        ])

    }
    async function handleOpen() {
        try {
            await Linking.openURL(link.url)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível abrir o link")
            console.log(error)
        }
    }


    async function getLinks() {
        try {

            const response = await linkStorage.get()
            const filtred = response.filter((link) => link.category === category)
            setLinks(filtred)
        } catch (error) {
            Alert.alert("ERRO", "Não foi possivel carregar os links")
        }
    }


    useFocusEffect(useCallback(() => {
        getLinks()
    }, [category]))

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />
                <TouchableOpacity activeOpacity={0.7} onPress={() => router.navigate("/add")} >
                    <MaterialIcons name="add" size={32} color={colorsStyle.green[300]} />
                </TouchableOpacity>


            </View>
            <CategoriesList onChange={setCategory} selected={category} />

            <FlatList data={links}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link name={item.name}
                        url={item.url}
                        onDetalhes={() => handleDetals(item)} />

                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false} />
            <Modal transparent visible={showModal} animationType="slide">
                <View style={styles.modal}>
                    <View style={styles.modalContent} >
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colorsStyle.gray[400]} onPress={() => setShowModal(false)} />
                            </TouchableOpacity>

                        </View>
                        <Text style={styles.modalLinkName}>
                            {link.name}
                        </Text>
                        <Text style={styles.modalUrl}>
                            {link.url}
                        </Text>
                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove} />
                            <Option name="Abrir" icon="language"  onPress={handleOpen}/>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}