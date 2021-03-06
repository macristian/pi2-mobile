import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';

export default function Header() {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Home');
    }

    return (
        <TouchableNativeFeedback onPress={handleOnPress}>
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.text}>Delivery</Text>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#003300',
        height: 90,
        paddingTop: 35,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    logo: {
        height: 47,
        width: 151
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#fff',
        marginLeft: 15,
        fontFamily: 'OpenSans_700Bold'
    }
});
