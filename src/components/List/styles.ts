import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    content: {
        elevation: 3,
        shadowColor: '#777',
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    contentDescription: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderColor: '#D4D4D4',
    },
    image: {
        width: 50,
        height: 100 / 2,
        borderRadius: 4
    },
    description: {
        fontWeight: '500',
        width: '100%',
        padding: 15
    },
    banner: {
        width: 415,
        height: 350 / 2,
    },
    switch: {
        marginRight: 360
    },
    remembertitle: {
        color: '#999'
    }
})