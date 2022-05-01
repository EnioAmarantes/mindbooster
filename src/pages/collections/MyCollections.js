import React from "react";
import { View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ColorsImage, ArvoreImage, BolaImage, SetaImage, UrsoImage } from '../../../assets/imgs';
import HeaderDrawerNav from "../../components/HeaderDrawerNavigator";

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

import Collection from "../../components/Collection";

const MyCollections = ({navigation}) => {

    const COLLECTIONS = [
        {imagem: BolaImage, title:'Objetos'},
        {imagem: ColorsImage, title:'Cores'},
        {imagem: UrsoImage, title:'Animais'},
        {imagem: ArvoreImage, title:'Adjetivos'},
        {imagem: SetaImage, title:'Pronomes'},
    ];

    const renderItem = ({ item }) => <Collection collection={item} navigation={navigation} /> ;

    return(
        <>
        <HeaderDrawerNav title='Minhas coleções' navigation={navigation} />
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.items}
                data={COLLECTIONS}
                renderItem={renderItem}
                />
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => navigation.navigate('newCollection')}
                >
                <Icon name={"plus"}  size={20} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#332E56",
        height: '100%',
        
    },
    addButton: {
        zIndex: 2,
        elevation: 2,
        marginLeft: 335,
        marginTop: 540,
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor:'#7A71AF',
        borderRadius:50,
    }
});

export default MyCollections;