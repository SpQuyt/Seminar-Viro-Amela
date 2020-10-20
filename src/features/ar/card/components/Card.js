'use-strict'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
    ViroARScene, ViroARSceneNavigator, ViroText, ViroARTrackingTargets,
    ViroARImageMarker, ViroBox, Viro3DObject, ViroAmbientLight, ViroSpotLight,
    ViroFlexView, ViroImage, ViroNode,
} from 'react-viro'
import Themes from '../../../../assets/Themes'
import RowTextInfo from './RowTextInfo'

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
                    >
                        <ViroFlexView
                            style={styles.contImage}>
                            <ViroImage
                                style={styles.image}
                                source={this.props.image}
                                transformBehaviors="billboard"
                            />
                        </ViroFlexView>
                        <ViroFlexView
                            width={0.08}
                            style={styles.contTxtWrapper}>
                            <RowTextInfo rowText={`Name: ${this.props.name}`} isTitle />
                            <RowTextInfo rowText={`Team: ${this.props.team}`} />
                            <RowTextInfo rowText={`Role: ${this.props.role}`} />
                            <RowTextInfo rowText={`Phone: ${this.props.phone}`} />
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
        backgroundColor: Themes.primary,
        padding: 0.005,
        width: 0.11,
        height: 0.045,
    },
    contImage: {
        width: 0.02,
        height: 0.02,
    },
    image: {
        flex: 1,
        paddingLeft: 0.008,
    },
    contTxtWrapper: {
        width: 0,
        flexDirection: 'column',
    },
})
