import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Images, NavigationStrings } from '../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import FastImage from 'react-native-fast-image';
import { GradientTextButton, Link, OutLineButton, PasswordInputBox, Spacer, TextInputBox } from '../../components/framework';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate(NavigationStrings.SIGNUP_SCREEN)
    }

    return (
        <View>
            <ImageBackground source={{ uri: Images.LOGIN_IMG }} style={styles.image}>
                <FastImage
                    source={Images.WHITE_LOGO}
                    style={styles.logo}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </ImageBackground>
            <Text style={styles.loginTxt}>Login</Text>
            <Spacer height={30} />
            <View style={styles.inputContainer}>
                <TextInputBox value={userName} setValue={setUserName} placeholder='Email / Username*' />
                <Spacer height={20} />
                <PasswordInputBox value={password} setValue={setPassword} placeholder='Password' />
            </View>
            <View style={styles.btnContainer}>
                <GradientTextButton label='Login' />
                <Spacer height={10} />
                <Link label={"Forgot Password?"} />
                <Spacer height={40} />
                <OutLineButton label_one={"Don’t have an account?"} label_two={"Sign Up"} onPress={handleLoginPress} />

            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: verticalScale(260)
    },
    logo: {
        width: moderateScale(230),
        height: verticalScale(230),
        marginLeft: moderateScale(-50),
        marginTop: verticalScale(-90)
    },
    loginTxt: {
        fontSize: scale(18),
        fontWeight: "400",
        marginStart: moderateScale(20),
        marginTop: verticalScale(20)
    },
    inputContainer: {
        paddingHorizontal: moderateScale(20)
    },
    btnContainer: {
        paddingHorizontal: moderateScale(20),
        marginTop: verticalScale(50)
    },
    linkContainer: {
        alignSelf: "flex-end",
        marginEnd: moderateScale(30)
    }
})