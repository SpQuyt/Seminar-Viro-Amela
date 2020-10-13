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

const DragThingsView = () => {
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

    // useEffect(() => {
    //     sceneNavigatorRef.current.pop()
    //     sceneNavigatorRef.current.push({ scene: InitialARScene })
    // }, [text])

    function _onLoadStart() {
        console.log("OBJ loading has started");
    }
    function _onLoadEnd() {
        console.log("OBJ loading has finished");
    }
    function _onError(event) {
        console.log("OBJ loading failed with error: " + event.nativeEvent.error);
    }

    const InitialARScene = () => (
        <ViroARScene onTrackingUpdated={(state) => _onInitialized(state)} >
            <ViroAmbientLight color={"#aaaaaa"} />
            <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 0]} color="#ffffff" castsShadow={true} />

            {/* <Viro3DObject
                source={require('../../assets/objects/emoji_smile/emoji_smile.vrx')}
                resources={[require('../../assets/objects/emoji_smile/emoji_smile_normal.png'),
                require('../../assets/objects/emoji_smile/emoji_smile_diffuse.png'),
                require('../../assets/objects/emoji_smile/emoji_smile_specular.png')]}
                position={[0, 0, -1]}
                scale={[.2, .2, .2]}
                type="VRX"
                dragType="FixedDistance" onDrag={() => { }}
            /> */}
            {/* <Viro3DObject
                        source={require('../../assets/objects/cube/cube.obj')}
                        resources={[require('../../assets/objects/cube/cube.mtl')]}
                        position={[0, 0, 0]}
                        scale={[.1, .1, .1]}
                        type="OBJ"
                        animation={{ name: 'animateImage', run: true }}
                        dragType="FixedDistance" onDrag={() => { }}
                    /> */}
            {/* <ViroARPlaneSelector minHeight={.5} minWidth={.5}> */}
            <ViroNode position={[0, 0, -1]}
                // dragType="FixedToWorld" onDrag={() => { }} 
                dragType="FixedToPlane"
                dragPlane={{
                    planePoint: [0, -1, 0],
                    planeNormal: [0, 1, 0],
                    maxDistance: 5
                }}>

                <Viro3DObject
                    source={require('../../assets/objects/emoji_smile/emoji_smile.vrx')}
                    resources={[require('../../assets/objects/emoji_smile/emoji_smile_normal.png'),
                    require('../../assets/objects/emoji_smile/emoji_smile_diffuse.png'),
                    require('../../assets/objects/emoji_smile/emoji_smile_specular.png')]}
                    position={[0, 0, -1]}
                    scale={[.2, .2, .2]}
                    type="VRX"
                />
            </ViroNode>
            {/* </ViroARPlaneSelector> */}
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

export default DragThingsView

const styles = StyleSheet.create({})
