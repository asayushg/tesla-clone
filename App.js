import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeModules, View } from 'react-native';
import CarList from './src/components/CarList';
import Header from './src/components/Header';
import styles from './src/components/styles';

export default function App() {

  const cars = [
    { name: "Model S",
      image: require('./assests/images/ModelS.jpeg'),
      price: '69,999'
    },
    { name: "Model 3",
      image: require('./assests/images/Model3.jpeg'),
      price: '79,999'
    },
    { name: "Model X",
    image: require('./assests/images/ModelX.jpeg'),
    price: '89,999'
    },
    { name: "Model Y",
    image: require('./assests/images/ModelY.jpeg'),
    price: '99,999'
    },
];

  return (
    <View style={styles.container}>

      <Header />
    <CarList 
    cars={cars} 
    />
      <StatusBar style="auto" />
    </View>
  );
}