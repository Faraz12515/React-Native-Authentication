import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/Epic_Games_logo.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';


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

    // onSignInFacebook 
    const onSignInFacebook = () => {
        console.warn("Sign In with Facebook")
    }

    // onSignInGoogle 
    const onSignInGoogle = () => {
        console.warn("Sign In with Google")
    }

    //onSignInApple
    const onSignInApple = () => {
        console.warn("Sign In with Apple")
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
                <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
                <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
                <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#E3E3E3" fgColor="#363636" />
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