import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import {styles} from './styles';

type HeaderProps = {
    name : string,
    profileImage : string 
}


export function Header(props : HeaderProps) {

    const [imageProfile, setImageProfile] = useState('')

    useEffect(() => {
        // Set Image in profile
        setImageProfile('data:image/jpeg;base64,' + btoa(props.profileImage))
    }, [])

    return(
        <View style={styles.container}>
            <Text>{props.name}</Text>
        </View>
    )
}