import React, { useEffect, useState } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { api } from '../../services/api';
import { Home } from '../Home';
import { AboutUs } from './components/AboutUs';
import { ToggleLoginOrRegisterOptions } from './components/toggleLoginOrRegister';
import { styles } from './styles';

export function ToogleLoginOrRegister() {

    const [userData, setUserData] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        async function getData() {

            // Get Token from Storage
            const token = await AsyncStorage.getItem('token')

            // Try to get userInformations from API if their login has not expired
            const response = await api.get('showUser', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })

            if (response.status = 200) {

                // Save userInformations in variable
                const userInformations = await response.data
                setUserData(userInformations)

                setIsLogged(true)
            }
        }

        getData()
    }, [])

    if (!isLogged) {
        return <Home />;
    }

    return (

        <View style={styles.container}>
            <ToggleLoginOrRegisterOptions />
            <AboutUs />
        </View>

    )
}