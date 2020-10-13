'use-strict'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
import {
    ViroARPlane, ViroARPlaneSelector, ViroARScene, ViroARSceneNavigator, ViroBox, ViroConstants, ViroText,
    Viro3DObject,
    ViroAmbientLight,
    ViroSpotLight,
    ViroPortal,
    ViroAnimatedComponent,
    ViroAnimations,
    ViroNode,
} from 'react-viro'
import Objects from '../../assets/Objects'

const DetectedPlaneView = () => {
    const [text, setText] = useState('Initializing AR...');
    const sceneNavigatorRef = useRef(null)

    const _onInitialized = useCallback(
        (state) => {
            if (state == ViroConstants.TRACKING_NORMAL) {
                setText("Hello World!");
            } else if (state == ViroConstants.TRACKING_NONE) {
                // Handle loss of tracking
            }
        },
        [text],
    )

    const InitialARScene = () => (
        <ViroARScene onTrackingUpdated={(state) => _onInitialized(state)} >
            <ViroARPlaneSelector onPlaneSelected={(evt) => console.log(evt)} />
        </ViroARScene>
    )

    return (
        <ViroARSceneNavigator
            ref={sceneNavigatorRef}
            initialScene={{ scene: InitialARScene }} />
    )
}

ViroAnimations.registerAnimations({
    animateImage: {
        properties: { scaleX: 1, scaleY: .6, scaleZ: 1, opacity: 1 },
        easing: "Bounce", duration: 5000
    },
});

export default DetectedPlaneView

const styles = StyleSheet.create({
    txtHanging: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
})
