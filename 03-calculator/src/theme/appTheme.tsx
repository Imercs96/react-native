import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    totalContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
    total: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        marginBottom: 10
    },
    totalSmall: {
        fontSize: 30,
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'right'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10
    }
});