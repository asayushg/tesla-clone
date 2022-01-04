import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import Car from "./Car";
import styles from "./styles";


const CarList = (props) => {
    return (
        <View style={{width: '100%' }}>
            <FlatList 
           data={props.cars}
           renderItem={({item}) => <Car car={item} />}
           snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    )
}

export default CarList;