import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
} from 'react-native';

import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={styles.text}>The Game is Over!</Text>
                <View style={styles.imageContainer}>
                    <Image
                        fadeDuration={1000}
                        style={styles.image}
                        source={require('../../assets/success.png')}
                        // source={{
                        //     uri:
                        //         'https://uiaa-web.azureedge.net/wp-content/uploads/2017/12/2018_banner.jpg',
                        // }}
                        resizeMode="cover"
                    />
                </View>
                <Text style={styles.numbers}>
                    Your phone need{' '}
                    <Text style={styles.highlight}>{roundsNumber}</Text> rounds
                    to guess the number{' '}
                    <Text style={styles.highlight}>{userNumber}</Text>
                </Text>
                <View style={styles.buttonContainer}>
                    <MainButton onPress={onRestart}>NEW GAME</MainButton>
                </View>
            </View>
        </ScrollView>
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
        fontFamily: 'open-sans-bold',
    },
    numbers: {
        width: '80%',
        fontSize: 18,
        fontFamily: 'open-sans',
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
    imageContainer: {
        marginVertical: 20,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: (Dimensions.get('window').width * 0.7) / 2,
        borderColor: 'black',
        borderWidth: 2,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
});

export default GameOverScreen;
