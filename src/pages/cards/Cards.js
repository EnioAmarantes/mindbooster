import React from "react";
import {View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import HeaderDrawerNav from "../../components/HeaderDrawerNavigator";
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

import {TextInput} from 'react-native-paper';
import { Button } from "@react-native-material/core";
import COLORS from "../../utils/Colors";
import Card from "../../components/Card";

export default function Cards(props) {
    const {navigation} = props;
    const {cards, title} = props.route.params;

    const renderItem = ({ item }) => <Card card={item} navigation={navigation} /> ;

    function letsPlay(){
        navigation.navigate('play', {cards});
    }

    return(
        <View>
            <HeaderDrawerNav title={'Coleção - ' + title } navigation={navigation} />

            <SafeAreaView style={styles.container} >
                <TextInput 
                    style={styles.filter}
                    label='Filtro'
                />

                <Button
                    style={styles.buttonPlay} 
                    title="Jogar!" 
                    onPress={() => letsPlay()}
                />

                <FlatList
                    style={styles.items}
                    data={cards}
                    renderItem={renderItem}
                />

                <TouchableOpacity 
                    style={styles.addButton} 
                    onPress={() => navigation.navigate('newCard', props.route.params)}
                >
                    <Icon name={"plus"}  size={20} color="#fff" />
                </TouchableOpacity>
            </SafeAreaView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.PRIMARY,
        height: '100%',
        padding: 20,
        paddingTop: 20, 
    },
    filter: {

    },
    buttonPlay: {
        marginVertical: 20,
        marginHorizontal: 100,
        height: 45,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        backgroundColor: '#57966A',
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
})