import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function Orders() {

    return (
        <>
            <Header />
            <View >
                <Text > Orders</Text>
            </View>

        </>
    );
}



export default Orders;