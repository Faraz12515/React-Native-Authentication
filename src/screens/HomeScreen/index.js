import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: "#051C60",
        fontSize: 26,
        fontWeight: 'bold',
        textAlignVertical: 'center',

    }
})

export default HomeScreen