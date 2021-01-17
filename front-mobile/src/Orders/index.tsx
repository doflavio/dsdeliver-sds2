import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from '../Header';
import OrdersCard from '../OrdersCard';
import { fetchOrders } from '../api';
import { Order } from '../type';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        fetchOrders()
            .then(response => setOrders(response.data))
            //.catch(() => Alert.alert('Houve um erro ao buscar os pedidos'));
            //.then(response => console.log(response))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {orders.map(order => (
                    <TouchableWithoutFeedback key={order.id}>
                        <OrdersCard order={order} />
                    </TouchableWithoutFeedback>
                ))}

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