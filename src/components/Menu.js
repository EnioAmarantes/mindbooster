import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import ProfileDrawer from './ProfileDrawer';
import MyCollections from '../pages/collections/MyCollections';
import Cards from '../pages/cards/Cards';

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
                name="Collection" 
                component={MyCollections} 
                options={ {headerShown: false, drawerIcon: config => <Icon name="home" size={30} color="white" />} } 
            />
            <Drawer.Screen 
                name="Cards" 
                component={Cards} 
                options={ {headerShown: false, drawerIcon: config => <Icon name="shopping-cart" size={30} color="white" />} }
            />
        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props) {
    return(
        <DrawerContentScrollView {...props}>
            <ProfileDrawer />
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => props.navigation.popToTop()} labelStyle={{color: 'white', fontSize: 18}} icon={() => <Icon name="sign-out" size={30} color="white" />}/>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerStyle: {
        width: 250,
        backgroundColor: '#d694b8',
    },
    labelStyle: {
        color: 'white',
        fontSize: 18,
    }
})