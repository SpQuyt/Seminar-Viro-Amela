'use-strict'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
    ViroARScene, ViroARSceneNavigator, ViroText, ViroARTrackingTargets,
    ViroARImageMarker, ViroBox, Viro3DObject, ViroAmbientLight, ViroSpotLight,
    ViroFlexView, ViroImage, ViroNode,
} from 'react-viro'
import Images from '../../../assets/Images'
import Card from './components/Card'

class CardIdentityView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    renderInitialScene = () => {
        return (
            <ViroARScene >
                <ViroAmbientLight color={"#aaaaaa"} />
                <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 0]} color="#ffffff" castsShadow={true} />
                <Card targetName="hoangLe" image={Images.photos.avaHoang} name="Mr. Le Huy Hoang" team="Hades" role="Sub-division Leader" phone="0354276886" />
                <Card targetName="manhVu" image={Images.photos.avaManh} name="Mr. Vu Tien Manh" team="Hades" role="Developer" phone="0961021094" />
            </ViroARScene>
        )
    }

    render() {
        return (
            <ViroARSceneNavigator
                initialScene={{ scene: this.renderInitialScene }} numberOfTrackedImages={3} />
        )
    }
}

ViroARTrackingTargets.createTargets({
    "hoangLe": {
        source: Images.photos.qrHoang,
        orientation: "Up",
        physicalWidth: 0.05,
        type: 'Image',
    },
    "manhVu": {
        source: Images.photos.qrManh,
        orientation: "Up",
        physicalWidth: 0.05,
        type: 'Image',
    },
    "cuongNguyen": {
        source: Images.photos.qrCuong,
        orientation: "Up",
        physicalWidth: 0.05,
        type: 'Image',
    },
    "thucTran": {
        source: Images.photos.qrThuc,
        orientation: "Up",
        physicalWidth: 0.05,
        type: 'Image',
    },
});

export default CardIdentityView

const styles = StyleSheet.create({
    textStyle: {
        flex: .5,
        fontFamily: 'Roboto',
        fontSize: 30,
        color: '#ffffff',
        flexDirection: 'row',
        textAlignVertical: 'top',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'column'
    },
    cardWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0.001,
        flex: .5,
    },
})
