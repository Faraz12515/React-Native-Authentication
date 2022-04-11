import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

// Custom Inputs for Dynamic Input Fields //
const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",

        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#e8e8e8",

        marginTop: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {
    }
})


export default CustomInput