import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0000009a',
    },
    itemToBuy: {
        color: '#b5b5b5',
        fontSize: 24, 
        textDecorationLine: 'none',
    },
    itemBought: {
        color: '#616161',
        fontSize: 24, 
        textDecorationLine: 'line-through',
    },
    actionIcon: {
        height: 40,
        width: 40,
        backgroundColor: 'darkgreen',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20
    }
});