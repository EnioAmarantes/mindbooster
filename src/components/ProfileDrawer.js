import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function ProfileDrawer() {
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: 'https://randomuser.me/api/portraits/men/51.jpg'}} style={styles.imageStyle} />
                </View>

                <View style={styles.drawerContainer}>
                    <Text style={styles.drawerText}>Fernando Soares</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 180,
        marginBottom: 20,
    },
    imageContainer: {
        marginTop: 30,
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
        marginVertical: 10,
    },
    drawerTextSmall: {
        color: 'white',
        fontSize: 12,
    },
    drawerContainer: {
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 3,
        borderBottomColor: 'grey',
    }
})