import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from "@react-native-material/core";
import HeaderDrawerNav from "../../components/HeaderDrawerNavigator";

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

import COLORS from '../../utils/Colors';

const NewCollection = props => {
    const { navigation } = props;
    const collection = props.route.params;
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    if(collection && title === ''){
        setTitle(collection.title)
        setDescription(collection.description)
    }

    return(
        <>
        <HeaderDrawerNav title='Minhas coleções' navigation={navigation} />
        <View style={styles.container}>

            <Text style={styles.title}>Preencha os dados referente à coleção a ser criada</Text>

            <View style={styles.formContainer} >
                <TextInput 
                    style={styles.textInput} 
                    label={'Nome coleção'}
                    value={title}
                    onChangeText={setTitle} 
                />

                <TextInput 
                    style={styles.textInput} 
                    label={'Descrição'} 
                    multiline={true} 
                    numberOfLines={4}
                    value={description}
                    onChangeText={setDescription}
                />
                <View style={styles.imageContainer}>
                    <Text style={styles.label}>Imagem</Text>
                    {
                        (collection != undefined && collection.imagem)
                        ? <Image style={styles.image} source={collection.imagem} />
                        : <Icon style={styles.icon} name={"plus"}  size={48} color="grey" />
                    }
                </View>
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
        fontSize: 22,
    },
    formContainer: {
        marginTop: 20,
    },
    textInput: {
        marginVertical: 6,
    },
    desctiptionInput: {
        marginVertical: 6,
        height: '20%',
    },
    imageContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        height: 120,
        marginVertical: 6,
        padding: 10,
    },
    image: {
        alignSelf: 'center',
    },
    icon: {
        alignSelf: 'center',
        marginTop: 20, 
    },
    buttonContainer: {
        height: '25%',
        marginTop: 10,
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