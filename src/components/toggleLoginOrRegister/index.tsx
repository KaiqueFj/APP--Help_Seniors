import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, ImageBackground,Button  } from 'react-native';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// ... other code from the previous section

export function ToggleLoginOrRegisterOptions() {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/icons/userPurple3.png')}
                resizeMode='cover'
                style={styles.userImage}
            />

            <View style={styles.toggleLoginRegisterContainer}>
                <Text style={styles.link}
                    onPress={() => Linking.openURL('http://google.com')}>
                    Registre-se
                </Text>

                <View style={styles.LoginContainer}>
                    <ImageBackground
                        source={require('../../../assets/icons/loginPurple.png')}
                        resizeMode='cover'
                        style={{
                            width: 25,
                            height: 25,
                            marginRight: 5
                        }}
                    />

                    <Text style={[styles.link, { color: '#3b1f8d' }]}
                        onPress={() => Linking.openURL('http://google.com')}>
                        Login
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 280,
        maxHeight: 200,
        position: 'relative',

        backgroundColor: '#6a42e1a1',
        borderRadius: 15,

        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 10
        },
        shadowRadius: 20,
        shadowOpacity: 0.7, 
        
    },

    toggleLoginRegisterContainer: {
        width: '90%',
        height: 70,
        padding: 10,

        backgroundColor: '#3b1f8d',
        borderRadius: 15,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        position: 'absolute',
        bottom: 20,
    },

    link: {
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
        fontSize: 20
    },

    LoginContainer: {
        height: 50,
        width: 95,

        borderRadius: 10,
        backgroundColor: '#14d8e4',

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        paddingLeft: 5,
        marginLeft: 10,

        shadowColor: '#14d8e4',
        shadowOffset: {
          width: 5,
          height: 2
        },
        shadowRadius: 18,
        shadowOpacity: 0.7
    },

    userImage: {
        width: 150,
        height: 150,

        position: 'absolute',
        top: -65,

        borderRadius: 90,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 10
        },
        shadowRadius: 18,
        shadowOpacity: 0.7
    },
});
