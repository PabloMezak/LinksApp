import { colorsStyle } from "@/colors/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

//Importar rotas/Router
import { router } from "expo-router";

//importar componentes
import { Button } from "@/components/button";
import { CategoriesList } from "@/components/categories";
// Importa o componente de input personalizado
import { Input } from "@/components/input";
import { linkStorage } from "@/storage/link-storage";
import { useState } from "react";

export default function Add() {

  //USE-STATES DA APLICAÇÃO
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [category, setCategory] = useState("")



  //função para mostrar os valores do input na terminal
  async function handleAdd() {
    try {
      if (!category.trim()) {
        return Alert.alert("Categoria", "Selecione a categoria")
      }
      if (!name.trim()) {
        return Alert.alert("Nome", "Informe o nome")
      }

      if (!url.trim()) {
        return Alert.alert("Url", "Informe a URl ")
      }

      //Salvar item no localStorage
      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category
      })

      //listar Item pelo LocalStorage
      const data = await linkStorage.get()
      console.log(data)



      console.log({ category, name, url })
    } catch (error) {
      Alert.alert("Erro","não foi possivel adicionar o link")
      console.log(error)
    }


  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colorsStyle.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>

      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <CategoriesList onChange={setCategory} selected={category} />


      <View style={styles.form}>
        <Input placeholder="Nome"  autoCapitalize="none" onChangeText={setName} />
        <Input placeholder="URL"  autoCapitalize="none" onChangeText={setUrl} />
        <Button title="Adcionar" onPress={handleAdd} />

      </View>

    </View>
  )
}