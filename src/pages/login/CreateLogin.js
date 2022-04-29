import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {TextInput} from 'react-native-paper';
import { Button } from "@react-native-material/core";

const CreateLogin = (props) => {
    const [email, onChangeEmail] = React.useState('');
    const [pass, onChangePass] = React.useState('');
    const [hidePass, setHidePass] = React.useState(true);
    const [confirmPass, onChangeConfirmPass] = React.useState('');
    const [hideConfirmPass, setHideConfirmPass] = React.useState(true);

    return(
        <View style={styles.container}>

            <Text style={styles.text}>Preencha os dados do seu cadastro</Text>

            <View style={styles.inputContainer}>

                <TextInput style={styles.input} label="E-mail" keyboardType='email-address' onChangeText={onChangeEmail}  />

                <TextInput 
                    style={styles.input}
                    label="Senha" 
                    secureTextEntry={hidePass} 
                    value={pass}
                    onChangeText={onChangePass} 
                    right={<TextInput.Icon name={hidePass ? "eye" : "eye-off"} onPress={() => setHidePass(!hidePass)}  />}
                />

                
                <TextInput 
                    style={styles.input}
                    label="Repetir Senha" 
                    secureTextEntry={hideConfirmPass} 
                    value={confirmPass}
                    onChangeText={onChangeConfirmPass} 
                    right={<TextInput.Icon name={hideConfirmPass ? "eye" : "eye-off"} onPress={() => setHideConfirmPass(!hideConfirmPass)}  />}
                />

                {
                    ((pass === '' || confirmPass === '') || pass === confirmPass)
                    ? null 
                    : <Text style={styles.diferentPass}>Senha não Confere</Text>
                }

                <Button 
                    onPress={() => props.navigation.navigate('login')} 
                    style={styles.buttonCadastrar} 
                    title="CADASTRAR" 
                    color="#6A61A1"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#43405E",
        height: '100%',
    },
    text: {
        fontSize: 28,
        color: "#fff",
        textAlign: 'center',
        marginTop: 80,
        fontFamily: 'PSL Ornanong Pro',
    },
    inputContainer :{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 35,
    },
    input:{
        marginVertical: 6,
    },
    buttonCadastrar : {
        height: 45,
        justifyContent: 'center',
        fontSize: 14,
        marginTop: 25
    },
    diferentPass: {
        color: 'red',
        marginLeft: 15,
    }
});

export default CreateLogin;