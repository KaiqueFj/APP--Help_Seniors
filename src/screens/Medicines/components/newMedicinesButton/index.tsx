import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../../../global/styles/theme';
import { styles } from './styles';

export function NewMedicinesButton() {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('NewMedicines')}
        >
            <Text style={styles.legend}>Novo Medicamento</Text>
        </TouchableOpacity>
    )
}