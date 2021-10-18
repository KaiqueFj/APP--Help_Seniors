import React, { useEffect, useState } from "react";
import { AsyncStorage, View } from "react-native";
import { api } from "../../services/api";
import { NotLoggedHome } from "../NotLoggedHome";
import { Header } from "./components/Header";
import { Menu } from "./components/MenuItems";
import { styles } from './styles';

export function Home() {

    const [username, setUsername] = useState('')
    const [profileImage, setProfileImage] = useState('')

    const [isLogged, setIsLogged] = useState(false)
    const [refreshing, setRefreshing] = useState(false);



    useEffect(() => {
        getData()
    }, [])

    async function getData() {

        try {

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
                const { imagePerfil, username } = await response.data

                setUsername(username)
                setProfileImage(imagePerfil)

                setIsLogged(true)
            }

        } catch {
            setIsLogged(false)
        }

    }

    if (!isLogged) {
        return <NotLoggedHome />;
    }

    return (
        <View style={styles.container}>
            <Header
                name={username}
                profileImage={profileImage}
            />

            <Menu />
        </View>
    )
}