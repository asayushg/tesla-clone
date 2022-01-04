import { StyleSheet, Dimensions, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    carContainer:{
      width: '100%',
      height: Dimensions.get('screen').height
    },
  
    titles:{
      marginTop: '30%',
      width:'100%',
      alignItems: 'center'
    },
  
    title: {
      fontSize: 40,
      fontWeight: '600'
    },
  
    subtitle:{
      fontSize: 16,
      color: '#5c5e62'
    },
  
    image:{
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      position:'absolute'
    },

    buttonContainer:{
        position: "absolute",
        bottom: 50,
        width:'100%'
    },

    header:{
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },

    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
      },
      menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
      }
  
  });
  
  export default styles;