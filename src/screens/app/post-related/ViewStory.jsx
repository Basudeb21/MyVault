import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Animated,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import { Colors, Images } from '../../../constants';
import StoryHead from '../../../components/framework/navbar/StoryHead';
import { useNavigation } from '@react-navigation/native';
import StoryBottom from '../../../components/framework/navbar/StoryBottom';

const { width } = Dimensions.get('window');

const storyList = [
    { id: 1, time: 'Just Now', story: Images.STORY_ONE },
    { id: 2, time: '09:11 AM', story: Images.STORY_TWO },
    { id: 3, time: 'Today 08:00 AM', story: Images.STORY_THREE },
    { id: 4, time: 'Yesterday 11:45 PM', story: Images.STORY_FOUR },
    { id: 5, time: 'Yesterday 10:30 PM', story: Images.STORY_FIVE },
    { id: 6, time: '2 Days Ago', story: Images.STORY_SELF },
    { id: 7, time: '3 Days Ago', story: Images.STORY_ONE },
    { id: 8, time: '4 Days Ago', story: Images.STORY_TWO },
    { id: 9, time: '5 Days Ago', story: Images.STORY_THREE },
    { id: 10, time: '6 Days Ago', story: Images.STORY_FOUR },
];

const ViewStory = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageHeight, setImageHeight] = useState(300);
    const progress = useRef(new Animated.Value(0)).current;
    const animationRef = useRef(null);
    const hasFinished = useRef(false);
    const navigation = useNavigation();

    const currentStory = storyList[currentIndex];

    useEffect(() => {
        if (!currentStory?.story) return;
        Image.getSize(
            currentStory.story,
            (w, h) => {
                const ratio = h / w;
                setImageHeight(width * ratio);
            },
            () => {
                setImageHeight(300);
            }
        );
    }, [currentStory]);

    useEffect(() => {
        startProgress();
    }, [currentIndex]);

    const startProgress = () => {
        progress.setValue(0);
        hasFinished.current = false;
        animationRef.current = Animated.timing(progress, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: false,
        });
        animationRef.current.start(({ finished }) => {
            if (finished) {
                hasFinished.current = true;
                if (currentIndex < storyList.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                } else {
                    navigation.goBack();
                }
            }
        });
    };

    const pauseProgress = () => {
        animationRef.current?.stop();
    };

    const resumeProgress = () => {
        if (hasFinished.current && currentIndex === storyList.length - 1) {
            navigation.goBack();
            return;
        }

        const current = progress.__getValue();
        animationRef.current = Animated.timing(progress, {
            toValue: 1,
            duration: 4000 * (1 - current),
            useNativeDriver: false,
        });

        animationRef.current.start(({ finished }) => {
            if (finished) {
                hasFinished.current = true;
                if (currentIndex < storyList.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                } else {
                    navigation.goBack();
                }
            }
        });
    };

    const handleNext = () => {
        if (currentIndex < storyList.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            navigation.goBack();
        }
    };


    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftTouch} onPress={handlePrev} />
            <TouchableOpacity style={styles.rightTouch} onPress={handleNext} />

            <TouchableWithoutFeedback
                onPressIn={pauseProgress}
                onPressOut={resumeProgress}
            >
                <View style={styles.imageWrapper}>
                    <ImageBackground
                        source={{ uri: currentStory.story }}
                        style={[styles.storyImage, { height: imageHeight }]}
                        resizeMode="contain"
                    />
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.overlay} pointerEvents="box-none">
                <View style={styles.progressBarContainer}>
                    {storyList.map((_, index) => (
                        <View key={index} style={styles.progressBarBackground}>
                            {index === currentIndex ? (
                                <Animated.View
                                    style={[
                                        styles.progressBarFill,
                                        {
                                            backgroundColor: Colors.WHITE,
                                            width: progress.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ['0%', '100%'],
                                            }),
                                        },
                                    ]}
                                />
                            ) : (
                                <View
                                    style={[
                                        styles.progressBarFill,
                                        {
                                            backgroundColor:
                                                index < currentIndex ? Colors.WHITE : Colors.PLACEHOLDER,
                                            width: '100%',
                                        },
                                    ]}
                                />
                            )}
                        </View>
                    ))}
                </View>

                <StoryHead title="Fans_5" time={currentStory.time} />
            </View>
            <StoryBottom />
        </View>
    );
};

export default ViewStory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.STORY_BACKGROUND,
    },
    progressBarContainer: {
        flexDirection: 'row',
    },
    progressBarBackground: {
        flex: 1,
        height: 2,
        backgroundColor: Colors.PLACEHOLDER,
        marginHorizontal: 2,
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: 2,
    },
    imageWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyImage: {
        width: width,
    },
    leftTouch: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '30%',
        zIndex: 1,
    },
    rightTouch: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '30%',
        zIndex: 1,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        width: '100%',
        paddingTop: 10,
        paddingHorizontal: 10,
        zIndex: 10,
        pointerEvents: 'box-none',
    },
});
