import React from 'react';
import { View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientIcon = ({ name, size, IconPack, colors }) => {
    return (
        <MaskedView
            maskElement={
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <IconPack name={name} size={size} color="black" />
                </View>
            }
        >
            <LinearGradient
                colors={colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ width: size, height: size }}
            />
        </MaskedView>
    );
};

export default GradientIcon;
