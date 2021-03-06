import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const Collection = (props) => {
    const { collection, navigation } = props;
    return(
        <TouchableOpacity onPress={() => navigation.navigate('cards', collection)}>
            <View style={style.container}>

                    <Image style={style.image} source={collection.imagem} />
                    <Text style={style.text}>{collection.title}</Text>

                <View style={style.iconsContainer}>
                    <Icon name='pencil' size={34} style={style.edit} onPress={() => navigation.navigate('newCollection', collection)} />
                    <Icon name='trash' size={34} style={style.remove} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
const style=StyleSheet.create({
    container: {
        borderRadius: 8,
        width: '90%',
        height: 120,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    image:{
        flex: 1.9,

    },
    text: {
        flex: 4,
        color: '#27ACA7',
        fontFamily: 'Tahoma',
        fontSize: 36,
        fontWeight: 'bold',
        margin: 15
    },
    iconsContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: '80%',
        marginVertical: 20,
    },
    edit: {
        color: '#4472C4',
    },
    remove: {
        color: '#FF1010',
    }
})

export default Collection;