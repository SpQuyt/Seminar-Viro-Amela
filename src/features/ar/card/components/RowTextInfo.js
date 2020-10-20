import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {
    ViroARScene, ViroARSceneNavigator, ViroText, ViroARTrackingTargets,
    ViroARImageMarker, ViroBox, Viro3DObject, ViroAmbientLight, ViroSpotLight,
    ViroFlexView, ViroImage, ViroNode,
} from 'react-viro'

export default class RowTextInfo extends Component {
    render() {
        return (
            <ViroFlexView style={styles.contRow}>
                <ViroText
                    textLineBreakMode="None"
                    textClipMode="None"
                    text={this.props.rowText}
                    scale={[.02, .02, .02]}
                    style={[styles.textStyle, { 
                        fontSize: this.props.isTitle ? 30 : 25,
                        fontWeight: this.props.isTitle ? 'bold' : 'normal',
                    }]}
                    outerStroke={{
                        type: 'Outline',
                        width: 2,
                        color: 'black'
                    }}
                    transformBehaviors="billboard"
                />
            </ViroFlexView>
        )
    }
}

const styles = StyleSheet.create({
    contRow: {
        width: 0.01,
        paddingBottom: 0.01,
    },
    textStyle: {
        fontFamily: 'Roboto',
        color: '#ffffff',
        textAlignVertical: 'top',
    },
})
