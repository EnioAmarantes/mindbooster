import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const Card = (props) => {
    const { card, navigation, title } = props;
    return(
        <TouchableOpacity onPress={() => navigation.navigate('newCard')}>
            <View style={style.container}>

                <View>
                    <Text style={style.label}>Frente</Text>
                    <Text style={style.text}>{card.front}</Text>
                </View>

                <View>
                    <Text style={style.label}>Verso</Text>
                    <Text style={style.text}>{card.back}</Text>
                </View>

                <View style={style.iconsContainer}>
                    <Icon name='pencil' size={28} style={style.edit} onPress={() => navigation.navigate('newCard', card, title)} />
                    <Icon name='trash' size={28} style={style.remove} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const style=StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        padding: 15,
    },
    label: {
        color: 'grey',
        fontFamily: 'Tahoma',
        fontSize: 12,
        fontWeight: 'bold',
    },
    text: {
        color: '#27ACA7',
        fontFamily: 'Tahoma',
        fontSize: 28,
        fontWeight: 'bold',
        marginRight: 23,
    },
    iconsContainer: {
        alignItems: 'space-around',
        justifyContent: 'center',
    },
    edit: {
        color: '#4472C4',
    },
    remove: {
        color: '#FF1010',
    }
})

export default Card;