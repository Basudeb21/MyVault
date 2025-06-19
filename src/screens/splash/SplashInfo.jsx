import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Images, NavigationStrings } from '../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { useNavigation } from '@react-navigation/native'
import SplashBodyTxt from '../../components/project-components/SplashBodyTxt'
import SplashHead from '../../components/project-components/SplashHead'
import SplashHeadTxt from '../../components/project-components/SplashHeadTxt'
import GradientIconButton from '../../components/framework/button/GradientIconButton'
import Spacer from '../../components/framework/boots/Spacer'
import ThreeDots from '../../components/framework/micro/ThreeDots'
import AntDesign from 'react-native-vector-icons/AntDesign';


const SplashInfo = () => {
    const [index, setIndex] = useState(0);

    const navigator = useNavigation();


    const img_arr = [
        Images.SPLASH_CELEB_ONE,
        Images.SPLASH_CELEB_TWO,
        Images.SPLASH_CELEB_THREE
    ];

    const head_txt_arr = [
        'Welcome to ',
        'My Vault',
        "Communicate with Celebrities",
        "Unlimited Post Share"

    ];

    const body_txt_arr = [
        "Lorem ipsum dolor sit amet consectetur. Fermentum adipiscing morbi egestas leo diam quis consequat. Accumsan venenatis aenean purus et faucibus cras.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam in sint beatae totam aliquam, sapiente eius nostrum consequuntur id cumque repudiandae, consequatur libero ipsam.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fuga natus facere voluptates, eligendi consequuntur facilis necessitatibus nemo."

    ];

    const btn_label = [
        "Swipe to Next",
        "Swipe to Next",
        "Get Started",
    ]


    const handleNext = () => {
        if (index < img_arr.length - 1) {
            setIndex(index + 1);
        }
        else {
            navigator.navigate(NavigationStrings.AUTH_STACK, {
                screen: NavigationStrings.LOGIN_SCREEN
            })
        }
    };

    return (
        <View style={styles.container}>
            <SplashHead />
            <Image source={{ uri: img_arr[index] }} style={styles.imageBG} />
            <View style={styles.txtContainer}>
                <Spacer height={50} />
                <View style={styles.headTxt}>
                    {index === 0 ? (
                        <>
                            <SplashHeadTxt label={head_txt_arr[0]} />
                            <SplashHeadTxt label={head_txt_arr[1]} color={Colors.THEME} />
                        </>
                    ) : (
                        <SplashHeadTxt
                            label={head_txt_arr[index + 1]}
                            color={Colors.THEME}
                        />
                    )}
                </View>

                <Spacer height={12} />
                <View style={styles.contentTxt}>
                    <SplashBodyTxt label={body_txt_arr[index]} />
                </View>
            </View>
            <Spacer height={60} />
            <ThreeDots num={index + 1} />
            <Spacer height={70} />
            <View style={styles.btn}>
                <GradientIconButton
                    Icon={AntDesign}
                    label={btn_label[index]}
                    onPress={handleNext}
                    iconName={"arrowright"}
                    iconSize={20}
                    width='50%'
                />
            </View>
        </View>
    )
}

export default SplashInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    imageBG: {
        height: verticalScale(237)
    },
    txtContainer: {
    },
    headTxt: {
        flexDirection: "row",
        alignSelf: "center"
    },
    contentTxt: {
        paddingHorizontal: moderateScale(25)
    },
    btn: {
        alignItems: "center",
    }

})