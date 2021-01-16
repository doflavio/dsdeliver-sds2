import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';
import OrdersCard from '../OrdersCard';

function Orders() {

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>

                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
            </ScrollView>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});



export default Orders;