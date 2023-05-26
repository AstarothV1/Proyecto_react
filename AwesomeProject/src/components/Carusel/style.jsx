import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0000',
        flex: 1,
        height: 5,
        width: 5,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    image: {
        opacity: 0.1,
        resizeMode: 'contain',
        width: 5,
        height: 5,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    }
})

export default styles