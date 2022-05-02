import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Button} from "@react-native-material/core";
import FlashCard from "./FlashCard";
import PlayFront from './PlayFront';

const Play = ({props, route, navigation}) => {
    const [hide, setHide] = React.useState(true);
    const {cards} = route.params;
    const [position, setPosition] = React.useState(0);
    const tam = cards.length;

    return(
        <View  style={styles.container}>
            <Text style={styles.text}>Cartão {position+1} / {tam}</Text>

            <View>
                {   
                    hide 
                    ?
                        <PlayFront front={cards[position].front} />
                    :
                        <FlashCard front={cards[position].front} back={cards[position].back}/>
                }
            </View>
            {
                hide 
                ?
                    <Button onPress={()=>{setHide(false)}} title="Virar" style={styles.button} color={'#6A61A1'}/>
                :
                    
                    ( position < tam -1) 
                    ? 
                        <Button onPress={()=>{
                            setHide(true);
                            setPosition(position + 1)
                        }}
                        
                        title="Próximo" 
                        style={styles.button} 
                        color={'#6A61A1'}
                        />             
                    :  
                        <Button onPress={()=>{
                            setHide(true);
                            setPosition(0);
                            navigation.goBack()
                        }} 
                            title="finalizar" 
                            style={styles.button} 
                            color={"#61A170"}
                        />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#332E56',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    button:{
        width: 300,
        marginTop: 20,
        backGroundColor: '#6A61A1',
    },
    text:{
        color: 'white',
        fontSize: 18,
        marginBottom: 15
    }
});

export default Play;