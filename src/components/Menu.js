import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import ProfileDrawer from './ProfileDrawer';
import MyCollections from '../pages/collections/MyCollections';
import Cards from '../pages/cards/Cards';
import COLORS from '../utils/Colors';

Icon.loadFont();

const Drawer = createDrawerNavigator();

export default function Menu(){
    return(
        <Drawer.Navigator 
            initialRouteName="Collection"
            screenOptions={{
                drawerStyle: styles.drawerStyle,
                drawerLabelStyle: styles.labelStyle,
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen 
                name="Minhas Coleções" 
                component={MyCollections} 
                options={ {headerShown: false, drawerIcon: config => <Icon name="sliders" size={30} color="#fff" />} } 
            />
        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props) {
    return(
        <DrawerContentScrollView {...props}>
            <ProfileDrawer />
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => props.navigation.popToTop()} labelStyle={{color: 'white', fontSize: 18}} icon={() => <Icon name="angle-left" size={30} color="white" />}/>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerStyle: {
        width: 250,
        backgroundColor: COLORS.PRIMARY,
    },
    labelStyle: {
        color: 'white',
        fontSize: 18,
    }
})