import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {TextInput} from 'react-native-paper';
import { Button } from "@react-native-material/core";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Mind from '../../../assets/imgs/mind.png';
import FireBaseConfig from "../../utils/FirebaseConfig";

const Login = props => {

    const {navigation} = props;
    
    const [email, onChangeEmail] = React.useState('');
    const [pass, onChangePass] = React.useState('');
    const [hidePass, setHidePass] = React.useState(true);

    function login(){

        const firebase = initializeApp(FireBaseConfig);
        const auth = getAuth(firebase);

        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                navigation.navigate('menu')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert('Login Inválido!\n' + errorMessage);
            });
    }

    return(
        <View style={styles.container}>
            <Image style={styles.img} source={Mind} />

            <Text style={styles.textHeader}>Mind Booster</Text>

            <View style={styles.inputContainer}>
                    <TextInput style={styles.input} label="E-mail" keyboardType='email-address' onChangeText={onChangeEmail} />

                    <TextInput 
                        style={styles.input}
                        label="Senha" 
                        secureTextEntry={hidePass} 
                        value={pass}
                        onChangeText={onChangePass} 
                        right={<TextInput.Icon name={hidePass ? "eye" : "eye-off"} onPress={() => setHidePass(!hidePass)}  />}
                    />

                    <Text style={styles.text}>Esqueci a senha</Text>

                    <View style={styles.buttonContainer}>
                        <Button 
                            style={styles.buttonLogin} 
                            onPress={() => login()} 
                            title="ENTRAR" 
                            color="#6A61A1"
                        />

                        <Button 
                            style={styles.buttonCadastrar} 
                            titleStyle={{color: '#fff'}} 
                            title="CADASTRE-SE" 
                            onPress={() => { props.navigation.navigate('createLogin') }} 
                        />
                    </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#43405E",
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    img:{
        width: 132,
        height: 132,
        marginTop: 20,
        alignSelf: 'center'
    },
    textHeader: {
        fontSize: 45,
        color: "#fff",
        textAlign: 'center',
        fontFamily: 'Pacifico', 
    },
    inputContainer :{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input:{
        marginVertical: 10,
    },
    buttonContainer: {
        justifyContent:'space-between',
        height: '40%',
    },
    buttonLogin: {
        color: '#6A61A1',
        fontSize: 14,
        minHeight: 45,
        justifyContent: 'center',
    },
    buttonCadastrar : {
        fontSize: 14,
        backgroundColor: '#B58D97',
        minHeight: 45,
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        color: "#fff",
        textAlign: 'right',
        marginBottom: 20
    }
});

export default Login;