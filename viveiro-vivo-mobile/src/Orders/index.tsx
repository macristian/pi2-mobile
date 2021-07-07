import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';


export default function Orders() {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('OrderDetails');
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={handleOnPress}>
                    <OrderCard />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnPress}>
                    <OrderCard />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnPress}>
                    <OrderCard />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnPress}>
                    <OrderCard />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnPress}>
                    <OrderCard />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnPress}>
                    <OrderCard />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnPress}>
                    <OrderCard />
                </TouchableOpacity>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});