import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const Collection = (props) => {
    const { imagem, texto, } = props;
    return(
        <View style={style.card}>
            <Image style={style.image} source={imagem} />
            <Text style={style.text}>{texto}</Text>
            <View style={style.iconsContainer}>
                <Icon name='pencil' size={34} style={style.edit} />
                <Icon name='trash' size={34} style={style.remove} />
            </View>
        </View>
    );
}
const style=StyleSheet.create({
    card: {
        borderRadius: 8,
        width: '90%',
        height: 120,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: "center"   
    },
    image:{
        margin: 15,
    },
    text: {
        color: '#27ACA7',
        fontFamily: 'Tahoma',
        fontSize: 36,
        fontWeight: 'bold',
        margin: 15
    },
    iconsContainer: {
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