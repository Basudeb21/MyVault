import { StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../constants';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const TextAreaBox = ({ value, setValue, placeholder = "Placeholder", height, borderColor }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor={Colors.PLACEHOLDER}
            style={[styles.txtInputBox, {
                minHeight: verticalScale(height),
                maxHeight: verticalScale(height),
                borderColor: borderColor || Colors.THEME,
            },
            isFocused ? styles.active : styles.deactive,
            ]}
            multiline={true}
        />
    )
}

export default TextAreaBox

const styles = StyleSheet.create({
    txtInputBox: {
        borderWidth: scale(1),
        borderRadius: scale(5),
        padding: scale(10),
        textAlignVertical: 'top',
        color: Colors.BLACK
    },
    active: {
        borderColor: Colors.THEME,
    },
    deactive: {
        borderColor: Colors.INPUTBOX_DEACTIVE_BORDER_COLOR,
    },
})