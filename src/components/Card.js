import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, style }) => {
    return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 10,
    },
});
export default Card;
