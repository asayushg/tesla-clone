import React from 'react';
import { View, Text, Pressable , StyleSheet} from 'react-native';

const StyledButton = (props) => {

    const type = props.type;

    const bgColor = type === 'primary' ? 'black' : 'white';

    const textColor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: bgColor} ]}
                onPress={()=>{
                    props.onPress();
                }}
            >
                <Text style ={[styles.text], {color:textColor}}>{props.text}</Text>
            </Pressable>
        </View>
    )

}

export default StyledButton;

const styles = StyleSheet.create({

container:{
    width: '100%',
    padding:10
},
button:{
    height: 40,
    borderRadius:20,
    justifyContent: 'center',
    alignItems:'center'
},

text:{
    fontSize:12,
    fontWeight:'500',
    textTransform:'uppercase',
    color:'white'
}


});