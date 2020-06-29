import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';

import Card from '../components/Card.js';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';

const StartGameScreen = ({ onStartGame }) => {
    let confirmedOutput;
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number has to be a number between 1 and 99',
                [
                    {
                        text: 'OKey',
                        style: 'destructive',
                        onPress: resetInputHandler,
                    },
                ],
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={styles.titleStep}>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button
                    title="Start Game"
                    color={Colors.active}
                    onPress={() => onStartGame(selectedNumber)}
                />
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}> Start a New Game! </Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.titleStep}> Select a Number </Text>
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
                                onPress={resetInputHandler}
                                color={Colors.accent}
                            />
                        </View>
                        <View style={styles.btn}>
                            <Button
                                title="Confirm"
                                onPress={confirmInputHandler}
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
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
        fontFamily: 'open-sans-bold',
    },
    titleStep: {
        fontSize: 18,
        fontFamily: 'open-sans',
    },
    inputContainer: {
        marginBottom: 10,
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
        marginBottom: 20,
    },
    summaryContainer: {
        width: 300,
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
    },
});

export default StartGameScreen;
