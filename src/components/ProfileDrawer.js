import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function PrfileDrawer() {
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: 'https://randomuser.me/api/portraits/men/51.jpg'}} style={styles.imageStyle} />
                </View>

                <View style={styles.drawerContainer}>
                    <Text style={styles.drawerText}>UserName</Text>
                    <Text style={styles.drawerTextSmall}>Open Profile</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 165,
    },
    imageContainer: {
        margintop: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 6,
    },
    imageStyle: {
        width: 100,
        height: 100,
    },
    drawerText: {
        color: 'white',
        fontSize: 18,
    },
    drawerTextSmall: {
        color: 'white',
        fontSize: 12,
    },
    drawerContainer: {
        alignItems: 'center'
    }
})