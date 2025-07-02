import { ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Images, NavigationStrings } from '../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import Checkbox from '../../components/framework/input/CheckBox';
import PasswordInputBox from '../../components/framework/input/PasswordInputBox';
import PhoneNumberInput from '../../components/framework/input/PhoneNumberInput';
import TextInputBox from '../../components/framework/input/TextInputBox';
import GradientTextButton from '../../components/framework/button/GradientTextButton';
import OutLineButton from '../../components/framework/button/OutLineButton';
import Link from '../../components/framework/boots/Link';
import Spacer from '../../components/framework/boots/Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setphoneNumber] = useState('')
    const [countryCode, setCountryCode] = useState('IN');
    const [callingCode, setCallingCode] = useState('91');

    const navigation = useNavigation();

    const handleSignupPress = () => {
        navigation.navigate(NavigationStrings.LOGIN_SCREEN)
    }

    const handlehomePress = () => {
        navigation.navigate(NavigationStrings.MAIN_STACK, {
            screen: NavigationStrings.HOME_SCREEN
        })

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <ScrollView >
                <KeyboardAvoidingView>
                    <ImageBackground source={{ uri: Images.SIGNUP_IMG }} style={styles.image}>
                        <FastImage
                            source={Images.WHITE_LOGO}
                            style={styles.logo}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </ImageBackground>

                    <View style={styles.txtContainer}>
                        <Text style={styles.loginTxt}>Create Account</Text>
                        <Text style={[styles.loginTxt, styles.subs]}>For Subscriber</Text>
                    </View>
                    <Spacer height={13} />

                    <View style={styles.inputContainer}>
                        <TextInputBox value={fullName} setValue={setFullName} placeholder='Full Name*' />
                        <Spacer height={20} />
                        <TextInputBox value={email} setValue={setEmail} placeholder='Email*' />
                        <Spacer height={20} />
                        <PhoneNumberInput
                            placeholder='Phone Number'
                            phoneNumber={phoneNumber}
                            setphoneNumber={setphoneNumber}
                            countryCode={countryCode}
                            setCountryCode={setCountryCode}
                            callingCode={callingCode}
                            setCallingCode={setCallingCode}
                        />
                        <Spacer height={20} />
                        <PasswordInputBox value={password} setValue={setPassword} placeholder='Password*' />
                        <Spacer height={20} />
                        <PasswordInputBox value={confirmPassword} setValue={setConfirmPassword} placeholder='Confirm Password*' />
                        <Spacer height={20} />
                    </View>
                    <View style={styles.checkBocContainer}>
                        <Checkbox />
                        <Text>I agree to the <Link label={"Terms of Use"} /> and <Link label={"Privacy Policy"} /></Text>
                    </View>
                    <Spacer height={40} />
                    <View style={styles.btnContainer}>
                        <GradientTextButton label='Signup' onPress={handlehomePress} />
                        <Spacer height={10} />
                        <OutLineButton label_one={"Already have an account?"} label_two={"Login"} onPress={handleSignupPress} />

                    </View>
                    <Spacer height={20} />
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    txtContainer: {
        marginTop: verticalScale(12)
    },
    checkBocContainer: {
        marginStart: moderateScale(20),
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: verticalScale(180)
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
    },
    subs: {
        color: Colors.THEME,
        fontSize: scale(14)
    },
    inputContainer: {
        paddingHorizontal: moderateScale(20)
    },
    btnContainer: {
        paddingHorizontal: moderateScale(20),
    },
    linkContainer: {
        alignSelf: "flex-end",
        marginEnd: moderateScale(30)
    }
})