import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { Alert, StyleSheet, Text, View, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import NotificationHelper from '../services/NotificationHelper.js';
import * as Notifications from 'expo-notifications';
import { confirmDelivery } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

type Props = {
  route: {
    params: {
      order: Order;
    }
  }
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function OrderDetails({ route }: Props) {
  const { order } = route.params;
  const navigation = useNavigation();

  const handleOnCancel = () => {
    navigation.navigate('Orders');
  }

  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
      .then(() => {
        NotificationHelper.notification(
          `Pedido ${order.id} confirmado com sucesso!`,
          "Você já está pronto para o próximo. Vá com muito cuidado!",
          parseInt(timerTrigger)
        );
      })
      .catch(() => {
        Alert.alert(`Houve um erro ao confirmar o pedido ${order.id} :/`);
      })
  }

  const [timerTrigger, setTimerTrigger] = useState(0);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const handleStartNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
  }

  useEffect(() => {
    NotificationHelper.registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button} onPress={handleStartNavigation}>
          <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleConfirmDelivery}>
          <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleOnCancel}>
          <Text style={styles.buttonText}>CANCELAR</Text>
        </RectButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    backgroundColor: '#009900',
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }
});

export default OrderDetails;