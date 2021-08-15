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

class DragThingsView extends Component {
    constructor(props) {
        super(props)
    }

    renderInitialScene = () => {
        return (
            <ViroARScene>
                <ViroAmbientLight color={"#aaaaaa"} />
                <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 0]} color="#ffffff" castsShadow={true} />
                <ViroARPlaneSelector>
                    <ViroNode position={[0, 0, 0]} onDrag={() => { }}>
                        {/* <Viro3DObject
                        source={require('../../assets/objects/cube/cube.obj')}
                        resources={[require('../../assets/objects/cube/cube_mtl.mtl')]}
                        position={[0, 0, 0]}
                        scale={[.1, .1, .1]}
                        type="OBJ"
                        animation={{ name: 'animateImage', run: true }}
                        dragType="FixedDistance" onDrag={() => { }}
                    /> */}
                        <Viro3DObject
                            source={Objects.emojiSmile}
                            resources={[require('../../assets/objects/emoji_smile/emoji_smile_normal.png'),
                            require('../../assets/objects/emoji_smile/emoji_smile_diffuse.png'),
                            require('../../assets/objects/emoji_smile/emoji_smile_specular.png')]}
                            position={[0, 0, 0]}
                            scale={[.2, .2, .2]}
                            type="VRX"
                        />
                    </ViroNode>
                </ViroARPlaneSelector>
            </ViroARScene>
        )
    }

    render() {
        return (
            <ViroARSceneNavigator
                initialScene={{ scene: this.renderInitialScene }} />
        )
        
    }
}

// ViroAnimations.registerAnimations({
//     animateImage: {
//         properties: { scaleX: 1, scaleY: .6, scaleZ: 1, opacity: 1 },
//         easing: "Bounce", duration: 5000
//     },
// });

export default DragThingsView

const styles = StyleSheet.create({})
