'use-strict'
import React, { Component, useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
    ViroPolyline,
    ViroMaterials,
} from 'react-viro'
import Objects from '../../assets/Objects'

class DriveCarView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ViroARScene>
                <ViroAmbientLight color={"#aaaaaa"} />
                <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 0]} color="#ffffff" castsShadow={true} />
                <ViroARPlaneSelector>
                    <ViroNode position={[0, 0, 0]} onDrag={() => { }} >
                        <Viro3DObject
                            source={require('../../assets/objects/car/car.obj')}
                            resources={[require('../../assets/objects/car/car.mtl')]}
                            position={[0, 0, 0]}
                            scale={[.04, .04, .04]}
                            type="OBJ"
                        />
                    </ViroNode>
                </ViroARPlaneSelector>
            </ViroARScene>
        )
    }
}

// ViroAnimations.registerAnimations({
//     animateImage: {
//         properties: { scaleX: 1, scaleY: .6, scaleZ: 1, opacity: 1 },
//         easing: "Bounce", duration: 5000
//     },
// });

export default DriveCarView

const styles = StyleSheet.create({})
