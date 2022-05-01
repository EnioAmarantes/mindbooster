import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from "@react-native-material/core";
import HeaderDrawerNav from "../../components/HeaderDrawerNavigator";

import COLORS from '../../utils/Colors';

const NewCollection = props => {
    const { collection, navigation } = props;

    return(
        <>
        <HeaderDrawerNav title='Minhas coleções' navigation={navigation} />
        <View style={styles.container}>

            <Text style={styles.title}>Preencha os dados referente à coleção a ser criada</Text>

            <View style={styles.formContainer} >
                <TextInput style={styles.textInput} label={'Nome coleção'} />

                <TextInput style={styles.textInput} label={'Descrição'} multiline={true} numberOfLines={4}/>
            </View>

            <View style={styles.buttonContainer}>
                <Button 
                    style={styles.buttonCreate}
                    color="#6A61A1"
                    title='CADASTRAR' 
                    />

                <Button 
                    onPress={() => navigation.navigate('menu')}
                    style={styles.buttonCancel}
                    title='CANCELAR'
                />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: COLORS.PRIMARY,
        paddingHorizontal: 30,
    },
    title: {
        color: '#fff',
        marginTop: 30,
        textAlign: 'center',
        fontSize: 24,
    },
    formContainer: {
        marginTop: 30,
    },
    textInput: {
        marginVertical: 6,
    },
    desctiptionInput: {
        marginVertical: 6,
        height: '20%',
    },
    buttonContainer: {
        height: '30%',
        marginTop: 30,
        justifyContent: 'space-between',
    },
    buttonCreate: {
        fontSize: 14,
        minHeight: 50,
        justifyContent: 'center',
    },
    buttonCancel: {
        fontSize: 14,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: COLORS.PRIMARY,
        minHeight: 50,
        justifyContent: 'center',
    },
})

export default NewCollection;