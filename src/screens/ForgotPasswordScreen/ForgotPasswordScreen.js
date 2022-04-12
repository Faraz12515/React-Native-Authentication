import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';


const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState("")

    // Send //
    const onSend = () => {
        console.warn("Send")
    }

    // Sign In //
    const onSignIn = () => {
        console.warn("Sign In")
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                {/* Passing Props to Child to disaply the content */}
                <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={true} />

                {/* Custom Buttons */}
                <CustomButton text="Send" onPress={onSend} />
                <CustomButton text="Back to Sign in" onPress={onSignIn} type="TERTIARY" />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051C60",
        margin: 10
    },
    text: {
        color: "gray",
        marginVertical: 10
    },
    link: {
        color: "#FDB075"
    }
})

export default ForgotPasswordScreen