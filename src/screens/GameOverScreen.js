import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Colors from '../constants/colors';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>The Game is Over!</Text>
            <Text style={styles.numbers}>Number of rounds: {roundsNumber}</Text>
            <Text style={styles.numbers}>Number was: {userNumber}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="NEW GAME"
                    onPress={onRestart}
                    color={Colors.active}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        color: Colors.primary,
    },
    numbers: {
        fontSize: 18,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default GameOverScreen;
