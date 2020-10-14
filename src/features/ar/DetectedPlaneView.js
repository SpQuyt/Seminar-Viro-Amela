'use-strict'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
    ViroARPlaneSelector, ViroARScene, ViroARSceneNavigator, ViroText,
} from 'react-viro'

class DetectedPlaneView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    render() {
        return (
            <ViroARScene >
                <ViroARPlaneSelector onPlaneSelected={(evt) => {
                    console.log(evt)
                    console.log((evt.width * evt.height).toFixed(2))
                    this.setState({
                        text: `Diện tích: ${(evt.width * evt.height).toFixed(2)}`
                    })
                }}>
                    <ViroText text={this.state.text} style={styles.txtHanging}
                        scale={[.2, .2, .2]} position={[0, 0, 0]} />
                </ViroARPlaneSelector>
            </ViroARScene>
        )
    }
}

export default DetectedPlaneView

const styles = StyleSheet.create({
    txtHanging: {
        fontFamily: 'Arial',
        fontSize: 15,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
})
