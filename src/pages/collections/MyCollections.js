import React from "react";
import {SafeAreaView, FlatList, StyleSheet } from 'react-native';
import {ColorsImage, ArvoreImage, BolaImage, SetaImage, UrsoImage} from '../../../assets/imgs';

import Collection from "../../components/Collection";

const COLLECTIONS = [
    {imagem: BolaImage, title:'Objetos'},
    {imagem: ColorsImage, title:'Cores'},
    {imagem: UrsoImage, title:'Animais'},
    {imagem: ArvoreImage, title:'Adjetivos'},
    {imagem: SetaImage, title:'Pronomes'},
];

const renderItem = ({item }) => <Collection imagem={item.imagem} texto={item.title} />;

export default function MyCollections({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.items}
                data={COLLECTIONS}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#332E56",
        height: '100%',
        justifyContent: 'center'
        
    }
});