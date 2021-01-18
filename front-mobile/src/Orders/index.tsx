import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import Header from '../Header';
import OrdersCard from '../OrdersCard';
import { fetchOrders } from '../api';
import { Order } from '../type';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation, useIsFocused } from '@react-navigation/native';




function Orders() {

    const navigation = useNavigation<any>();
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const isFocused = useIsFocused();

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))
            .finally(() => setIsLoading(false));
        //.then(response => console.log(response))
        //.catch(error => console.log(error))
    }

    useEffect(() => {
        if (isFocused) {
            fetchData();
        }

    }, [isFocused]);

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text>Buscando pedidos...</Text>
                ) : (
                        orders.map(order => (
                            <TouchableWithoutFeedback
                                key={order.id}
                                onPress={() => handleOnPress(order)}>
                                <OrdersCard order={order} />
                            </TouchableWithoutFeedback>
                        ))
                    )}

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