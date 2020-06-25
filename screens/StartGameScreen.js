import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import Card from '../components/Card.js';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}> Start a New Game! </Text>
                <Card style={styles.inputContainer}>
                    <Text> Select a Number </Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.btn}>
                            <Button
                                title="Reset"
                                onPress={() => {}}
                                color={Colors.accent}
                            />
                        </View>
                        <View style={styles.btn}>
                            <Button
                                title="Confirm"
                                onPress={() => {}}
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        paddingBottom: 10,
        marginVertical: 10,
    },
    inputContainer: {
        padding: 20,
        width: 300,
        maxWidth: '80%',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    btn: {
        width: '45%',
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
});

export default StartGameScreen;
