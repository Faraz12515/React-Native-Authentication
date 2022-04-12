import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'


const SignUpScreen = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")


    // navigation //
    const navigation = useNavigation()


    // Register //
    const onRegister = () => {
        navigation.navigate("ConfirmEmail")
    }
    // Sign In //
    const onSignIn = () => {
        navigation.navigate("SignIn")
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an Account</Text>

                {/* Passing Props to Child to disaply the content */}
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />

                {/* Custom Buttons */}
                <CustomButton text="Register" onPress={onRegister} />
                <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link}>Terms Of Use</Text> and <Text style={styles.link}>Policy Policy </Text></Text>
                {/* Social SignIn Buttons */}
                <SocialSignInButtons />
                <CustomButton text="Have an account? Sign in" onPress={onSignIn} type="TERTIARY" />

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

export default SignUpScreen