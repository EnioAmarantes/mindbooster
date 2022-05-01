import React from 'react';
import { View, Text, StyleSheet, TextInput  } from 'react-native';
import HeaderDrawerNav from "../../components/HeaderDrawerNavigator";
import { Button } from "@react-native-material/core";
import COLORS from '../../utils/Colors';

const NewCard = props => {
    const headerTitle = props.route.params.title;
    const {navigation} = props;
    const [frontText, setFrontText] = React.useState('');
    const [backText, setBackText] = React.useState('');

    return(
        <>
        <HeaderDrawerNav title={'Coleção - ' + headerTitle} navigation={navigation} />
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados da frente e do verso do flashcard</Text>

            <TextInput 
                style={styles.inputFront}
                onChangeText={setFrontText}
                value={frontText}
            />
            <TextInput 
                style={styles.inputBack}
                label='Verso'
                onChangeText={setBackText}
                value={backText}
            />

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
    inputFront: {
        height: 120,
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    inputBack: {
        height: 120,
        textAlign: 'center',
        backgroundColor: '#fff',
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

export default NewCard;