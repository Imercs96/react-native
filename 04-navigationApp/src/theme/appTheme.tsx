import { StyleSheet } from "react-native";

export const colours = {
    primary: '#5856D6',
    white: '#FFFFFF',
    gray: '#C1C1C1',
    transparent: 'transparent',
    gray_100: '#C4C4C4',
    gray_900: '#232323',
    green_100: '#A5B8A3',
    red_900: '#900'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginTop: 10
    },
    flexContent: {
        display: 'flex'
    },
    bigButton: {
        width: 100,
        height: 100,
        borderRadius: 25,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginTop: 20
    },
    bigButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 75,
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    menuContainer: {
        marginVertical: 20,
        marginHorizontal: 50
    },
    menuButton: {
        marginVertical: 10
    },
    menuText: {
        fontSize: 20
    }
})