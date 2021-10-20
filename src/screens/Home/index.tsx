import React, { useEffect, useState } from "react";
import { AsyncStorage, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { useApp } from "../../hooks/useApp";
import { api } from "../../services/api";
import { NotLoggedHome } from "../NotLoggedHome";
import { Header } from "./components/Header";
import { Menu } from "./components/MenuItems";
import { styles } from './styles';

export function Home() {

    const { showMenu, toggleShowMenu} = useApp()

    const [username, setUsername] = useState('')
    const [profileImage, setProfileImage] = useState('')

    const [isLogged, setIsLogged] = useState(false)
    const [refreshing, setRefreshing] = useState(false);

    async function logout() {
        AsyncStorage.setItem('token', '')
    }

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

            {showMenu ? (
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: theme.colors.darkPurple,

                        position: 'absolute',
                        zIndex: 2000,
                    }}
                >
                    <View style={{
                        width: '100%',
                        height: '100%',

                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',

                        position: 'relative',
                    }}>

                        <View
                            style={{
                                position: 'absolute',
                                right: 40,
                                top: 75,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => toggleShowMenu(!showMenu)}
                            >
                                <Image
                                    source={require('../../../assets/icons/delete.jpg')}
                                    style={{
                                        width: 35,
                                        height: 35,
                                    }}
                                />
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity
                            onPress={logout}
                            style={{
                                width: 330,
                                height: 75,
                                backgroundColor: theme.colors.purple,

                                borderRadius: 15,

                                flex: 0,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >

                            <Image
                                source={require('../../../assets/icons/sair.png')}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 5,
                                }}
                            />

                            <Text
                                style={{
                                    fontFamily: theme.fonts.medium500,
                                    fontSize: 30,
                                    color: '#fff',
                                }}
                            >Sair</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            ) : (<></>)}
        </View>
    )
}