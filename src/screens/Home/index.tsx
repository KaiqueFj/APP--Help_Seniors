import React, { useEffect, useState } from "react";
import { AsyncStorage, Text, View } from "react-native";
import { useApp } from "../../hooks/useApp";
import { api } from "../../services/api";
import { NotLoggedHome } from "../NotLoggedHome";
import { Header } from "./components/Header";
import { Menu } from "./components/MenuItems";

import { styles } from './styles';

export function Home() {

    const { getFirstAidData } = useApp()

    const [username, setUsername] = useState('')
    const [profileImage, setProfileImage] = useState('')

    const [isLogged, setIsLogged] = useState(false)


    useEffect(() => {
        getData()
    }, [])

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
            const { imagePerfil, username } = await response.data

            setUsername(username)
            setProfileImage(imagePerfil)

            setIsLogged(true)

        } else {
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