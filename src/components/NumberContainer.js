import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent,
        borderRadius: 10,
        padding: 10,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Colors.accent,
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default NumberContainer;
