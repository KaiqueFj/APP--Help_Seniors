import React from 'react';

import { ImageBackground, View } from 'react-native';
import { styles } from './styles';


export function AboutUs() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../../../assets/icons/logo.png')}
                resizeMode='cover'
                style={{
                    width: 200,
                    height: '100%',
                    marginRight: 5
                }}
            />

            <View style={styles.playContainer}>
                <View style={styles.playButton}>
                    <ImageBackground
                        source={require('../../../../../assets/icons/playIcon.png')}
                        resizeMode='cover'
                        style={{
                            width: 20,
                            height: 20,
                            marginRight: 5
                        }}
                    />
                </View>
            </View>
        </View>
    )
}