'use-strict'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
    ViroARScene, ViroARSceneNavigator, ViroText, ViroARTrackingTargets,
    ViroARImageMarker, ViroBox, Viro3DObject, ViroAmbientLight, ViroSpotLight,
    ViroFlexView, ViroImage, ViroNode,
} from 'react-viro'
import Themes from '../../../assets/Themes'

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <ViroNode>
                <ViroARImageMarker target={this.props.targetName}>
                    <ViroFlexView
                        rotation={[-90, 0, 0]}
                        position={[0, 0, 0]}
                        style={styles.cardWrapper}
                        transformBehaviors="billboard"
                        backgroundColor="yellow"
                    >
                        <ViroImage
                            height={0.03}
                            width={0.03}
                            style={styles.image}
                            source={this.props.image}
                            transformBehaviors="billboard"
                        />
                        <ViroFlexView
                            height={0.03}
                            style={styles.contTxtWrapper}>
                            <ViroText
                                textAlign="left"
                                textLineBreakMode="None"
                                textClipMode="None"
                                text={this.props.name}
                                scale={[.03, .03, .03]}
                                style={styles.textStyle}
                                outerStroke={{
                                    type: 'Outline',
                                    width: 2,
                                    color: 'black'
                                }}
                                transformBehaviors="billboard"
                            />
                            <ViroText
                                textAlign="left"
                                textLineBreakMode="None"
                                position={[0, -0.003, 0]}
                                textClipMode="None"
                                text={this.props.team}
                                scale={[.02, .02, .02]}
                                style={styles.textStyle}
                                outerStroke={{
                                    type: 'Outline',
                                    width: 2,
                                    color: 'black'
                                }}
                                transformBehaviors="billboard"
                            />
                        </ViroFlexView>
                    </ViroFlexView>
                </ViroARImageMarker>
            </ViroNode>
        )
    }
}

export default Card

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row',
        padding: 0.001,
        display: 'flex',
    },
    textStyle: {
        fontFamily: 'Roboto',
        fontSize: 30,
        color: '#ffffff',
        flexDirection: 'row',
        textAlignVertical: 'top',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    image: {
        padding: 0.01,
    },
    contTxtWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
    }
})
