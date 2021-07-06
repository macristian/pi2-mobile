import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function Home() {

    const handleOnPress = () => {

    }

    return (
        <>
            <View style={styles.container}>
                {<Image source={require('../assets/logo-raposa-celular.png')} style={styles.logo} />}
                <Text style={styles.title}>Acompanhe os pedidos e {'\n'} entregue no prazo!</Text>
                <Text style={styles.subTitle}>Receba todos os pedidos da sua {'\n'} loja na palma da mão</Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>VER PEDIDOS</Text>
                </RectButton>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center'
    },
    logo: {
        height: 195,
        width: 214
    },
    title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
    },
    subTitle: {
        color: '#9E9E9E',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#009900',
        flexDirection: 'row',
        borderRadius: 5
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
    }
});
