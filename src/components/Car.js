import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from './StyledButton';

const Car = (props) => {

    const {name, price, image} = props.car;

    return (
        <View style={styles.carContainer} >
            <ImageBackground 
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>Starting at ${price}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyledButton
                type={'primary'}
                text={'Custom Order'}
                onPress={ ()=> {
                    console.warn("Custom Order Placed!")
                } }
                />

                <StyledButton
                type={'secondary'}
                text={'Track Order'}
                onPress={ ()=> {
                    console.warn("Order will be delivered soon!")
                } }
                />
            </View>

      </View>
    );
}

export default Car;