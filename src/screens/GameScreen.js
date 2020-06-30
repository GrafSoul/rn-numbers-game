import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    if (randNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randNum;
    }
};

// const renderListItem = (listLength, itemData) => (
//     <View style={styles.listItem}>
//       <BodyText>#{listLength - itemData.index}</BodyText>
//       <BodyText>{itemData.item}</BodyText>
//     </View>
//   );

const renderListItem = (value, index, numOfRound) => (
    <View key={index} style={styles.listItem}>
        <Text style={styles.listText}>#{numOfRound}</Text>
        <Text style={styles.listText}>{value}</Text>
    </View>
);

const GameScreen = ({ userChoice, onGameOver }) => {
    const initialGuesses = generateRandomBetween(1, 100, userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuesses);
    const [pastGuesses, setPastGuesses] = useState([initialGuesses]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }

        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess,
        );

        setCurrentGuess(nextNumber);
        // setRounds((currRounds) => currRounds + 1);
        setPastGuesses((curPastGuesses) => [nextNumber, ...curPastGuesses]);
    };
    return (
        <View style={styles.screen}>
            <Text style={styles.opponent}>Opponent Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler('greater')}>
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) =>
                        renderListItem(
                            guess,
                            index,
                            pastGuesses.length - index,
                        ),
                    )}
                </ScrollView>
                {/* <FlatList
                    keyExtractor={item => item}
                    data={pastGuesses}
                    renderItem={renderListItem.bind(this, pastGuesses.length)}
                    contentContainerStyle={styles.list}
                    /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    opponent: {
        fontSize: 18,
        fontFamily: 'open-sans',
    },
    buttonContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        width: 300,
        maxWidth: '80%',
    },
    listContainer: {
        width: '80%',
        flex: 1,
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    listItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    listText: {
        fontFamily: 'open-sans',
    },
    // listContainer: {
    //     flex: 1,
    //     width: '60%',
    // },
    // list: {
    //     flexGrow: 1,
    //     // alignItems: 'center',
    //     justifyContent: 'flex-end',
    // },
    // listItem: {
    //     borderColor: '#ccc',
    //     borderWidth: 1,
    //     padding: 15,
    //     marginVertical: 10,
    //     backgroundColor: 'white',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: '100%',
    // },
});

export default GameScreen;
