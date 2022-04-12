import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

// Custom Button for Dynamic Buttons //
const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable onPress={onPress}

            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {}

            ]}>
            <Text style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}

            ]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5
    },

    container_PRIMARY: {
        backgroundColor: "#3871F3",
    },

    container_SECONDARY: {
        borderColor: "#3871F3",
        borderWidth: 2
    },

    container_TERTIARY: {

    },

    text: {
        color: "white",
        fontWeight: "bold"
    },

    text_TERTIARY: {
        color: "gray",
        fontWeight: "bold"
    },

    text_SECONDARY: {
        color: "#3871F3",
        fontWeight: "bold"
    }
})

export default CustomButton