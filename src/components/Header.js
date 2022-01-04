import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Header = () => {


    return(
        <View style={styles.header}>

            <Image 
            style={styles.logo}
            source={require('../../assests/images/logo.png')} />

            <Image 
            style={styles.menu}
            source={require('../../assests/images/menu.png')} />

        </View>
    )


}

export default Header;