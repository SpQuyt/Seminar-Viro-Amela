'use-strict'
import React, { Component, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
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
    ViroButton,
} from 'react-viro'
import Images from '../../../assets/Images'
import DirectionButton from './components/DirectionButton'

class DriveCarView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isButtonShow: false,
            isUpRunning: false
        }
    }

    onUpPressed = () => {
        console.log('UP')
        this.setState({
            isUpRunning: true,
        })
    }

    onLeftPressed = () => {
        console.log('LEFT')
    }

    onDownPressed = () => {
        console.log('DOWN')
    }

    onRightPressed = () => {
        console.log('RIGHT')
    }

    renderInitialScene = () => {
        return (
            <ViroARScene>
                <ViroAmbientLight color={"#aaaaaa"} />
                <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 0]} color="#ffffff" castsShadow={true} />
                <ViroARPlaneSelector onPlaneSelected={() => this.setState({ isButtonShow: true })}>
                    <ViroNode position={[0, 0, 0]} onDrag={() => { }} >
                        <Viro3DObject
                            source={require('../../../assets/objects/car/car.obj')}
                            resources={[require('../../../assets/objects/car/car_mtl.mtl')]}
                            position={[0, 0, 0]}
                            scale={[.04, .04, .04]}
                            type="OBJ"
                            animation={{
                                name: 'goUp',
                                // run: this.state.isUpRunning
                                run: true
                            }}
                        />
                    </ViroNode>
                </ViroARPlaneSelector>
            </ViroARScene>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <ViroARSceneNavigator
                    initialScene={{ scene: this.renderInitialScene }} />
                {this.state.isButtonShow ?
                    <View style={styles.contAllButtons}>
                        <View style={styles.contHalfPart}>
                            <DirectionButton imgUrl={Images.icons.upArrow} onCustomPressed={this.onUpPressed} />
                        </View>
                        <View style={styles.contHalfPart}>
                            <DirectionButton imgUrl={Images.icons.leftArrow} onCustomPressed={this.onLeftPressed} />
                            <DirectionButton imgUrl={Images.icons.downArrow} onCustomPressed={this.onDownPressed} />
                            <DirectionButton imgUrl={Images.icons.rightArrow} onCustomPressed={this.onRightPressed} />
                        </View>
                    </View> : null}
            </View>
        )
    }
}

ViroAnimations.registerAnimations({
    goUp: {
        properties: { scaleX: 0, scaleY: 0, scaleZ: -7 },
        duration: 5000
    },
});

export default DriveCarView

const styles = StyleSheet.create({
    contAllButtons: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        backgroundColor: 'green',
        paddingVertical: 10,
    },
    contHalfPart: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    imgButton: {
        padding: 10,
        width: 50,
        height: 50,
        margin: 5,
    },
})
