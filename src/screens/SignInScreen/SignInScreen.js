import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/Epic_Games_logo.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';
import SocialSignInButtons from '../../components/SocialSignInButtons'


const SignInScreen = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { height } = useWindowDimensions();

    // SignIn //
    const onSignIn = () => {
        console.warn("Sign In")
    }

    // SignUp //
    const onSignUp = () => {
        console.warn("Sign Up")
    }

    // ForgotPassword //
    const onForgotPassword = () => {
        console.warn("Forgot Password")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

                {/* Passing Props to Child to disaply the content */}
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />

                {/* Custom Buttons */}
                <CustomButton text="Sign In" onPress={onSignIn} />
                <CustomButton text="Forgot Password ?" onPress={onForgotPassword} type="TERTIARY" />

                {/* Social SignIn Buttons */}
                <SocialSignInButtons />
                <CustomButton text="Don't have an account? Create one" onPress={onSignUp} type="TERTIARY" />

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
    }
})

export default SignInScreen