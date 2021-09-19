import React from "react";
import { View } from "react-native";
import { MenuItensSection1 } from "../MenuItensSection1";
import { MenuItensSection2 } from "../MenuItensSection2";
import { styles } from './styles';

export function Menu() {

    return (
        <View style={styles.container}>
            <MenuItensSection1 />
            <MenuItensSection2/>
        </View>
    )
}