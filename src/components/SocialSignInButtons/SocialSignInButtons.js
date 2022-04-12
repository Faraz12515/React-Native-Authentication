import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButtons = () => {
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
        <>
            <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
            <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
            <CustomButton text="Sign In with Apple" onPress={onSignInApple} bgColor="#E3E3E3" fgColor="#363636" />
        </>
    )
}

export default SocialSignInButtons