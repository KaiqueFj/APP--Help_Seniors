import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

export function AboutUs() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/icons/logo.png')}
                resizeMode='cover'
                style={{
                    width: 200,
                    height: '100%',
                    marginRight: 5
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 280,
        maxHeight: 150,
        position: 'relative',

        backgroundColor: '#6b42e1',
        borderRadius: 15,

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 10
        },
        shadowRadius: 20,
        shadowOpacity: 0.7,
    },
});
