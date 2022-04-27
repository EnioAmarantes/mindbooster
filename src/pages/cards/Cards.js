import React from "react";
import {View, Text} from 'react-native';
import HeaderDrawerNav from "../../components/HeaderDrawerNavigator";

export default function Cards({navigation}) {
    return(
        <View>
            <HeaderDrawerNav title='Meus cartões' navigation={navigation} />
            <Text>Tela de Cards</Text>
        </View>
    )
}