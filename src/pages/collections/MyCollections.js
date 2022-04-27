import React from "react";
import {View, Text} from 'react-native';

import HeaderDrawerNav from "../../components/HeaderDrawerNavigator";

export default function MyCollections({navigation}) {
    return(
        <View>
            <HeaderDrawerNav title='Minhas Coleções' navigation={navigation} />
            <Text>Tela de Collections</Text>
        </View>
    )
}