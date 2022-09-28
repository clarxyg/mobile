import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      marginTop: 35,
      paddingStart: 20,
      paddingBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingEnd: 20,
      alignItems: 'center',
      
    },
    image: {
      width: 56,
      height: 56 / 2,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 15
    },
    date: {
      fontWeight: 'bold',
      color: '#666'
    }
  });