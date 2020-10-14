import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight, BackHandler } from 'react-native'
import DetectedPlaneView from './features/ar/DetectedPlaneView'
import DragThingsView from './features/ar/DragThingsView'
import Photo360View from './features/vr/Photo360View'
import {
    ViroARPlane, ViroARPlaneSelector, ViroARScene, ViroARSceneNavigator, ViroBox, ViroConstants, ViroText,
    Viro3DObject,
    ViroAmbientLight,
    ViroSpotLight,
    ViroPortal,
    ViroAnimatedComponent,
    ViroAnimations,
    ViroNode,
    ViroVRSceneNavigator,
} from 'react-viro'
import DriveCarView from './features/ar/DriveCarView'

const Type = {
    AR_TYPE: 1,
    VR_TYPE: 2,
}

const ARType = {
    DETECTED_PLANES: 1,
    DRAG_THINGS: 2,
    DRIVE_CAR: 3,
}

const VRType = {
    PHOTO360: 1,
}
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenu: true,
            currentScreenType: Type.AR_TYPE,
            currentDetailedType: ARType.DETECTED_PLANES,
        }
    }

    backAction = () => {
        if (!this.state.isMenu) {
            this.setState({
                isMenu: true
            })
            return true;
        }
        return false;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backAction);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backAction);
    }

    renderAR = (DetailedType) => {
        switch (DetailedType) {
            case ARType.DETECTED_PLANES:
                return DetectedPlaneView
            case ARType.DRAG_THINGS:
                return DragThingsView
            case ARType.DRIVE_CAR:
                return DriveCarView
            default:
                return DetectedPlaneView
        }
    }

    renderVR = (DetailedType) => {
        switch (DetailedType) {
            case VRType.PHOTO360:
                return <Photo360View />
            default:
                return <Photo360View />
        }
    }

    renderScreen = (ScreenType, DetailedType) => {
        if (ScreenType === Type.AR_TYPE)
            return <ViroARSceneNavigator
                initialScene={{ scene: this.renderAR(DetailedType) }} />
        return this.renderVR(DetailedType)
    }

    handlePress = (ScreenType, DetailedType) => {
        this.setState({
            currentScreenType: ScreenType,
            currentDetailedType: DetailedType,
            isMenu: false
        })
    }

    render() {
        return this.state.isMenu ? (
            <View style={styles.contScreen}>
                <Text style={styles.txtTitle}>AR MENU</Text>
                <TouchableHighlight style={styles.contBtn} onPress={() => this.handlePress(Type.AR_TYPE, ARType.DETECTED_PLANES)} >
                    <Text>Go To Detect Plane</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.contBtn} onPress={() => this.handlePress(Type.AR_TYPE, ARType.DRAG_THINGS)} >
                    <Text>Go To Drag things View</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.contBtn} onPress={() => this.handlePress(Type.AR_TYPE, ARType.DRIVE_CAR)} >
                    <Text>Go To Drive Car View</Text>
                </TouchableHighlight>

                <Text style={styles.txtTitle}>VR MENU</Text>
                <TouchableHighlight style={styles.contBtn} onPress={() => navigate(ROUTES_NAME.VR.PHOTO360)} >
                    <Text>Go To Photo360 View</Text>
                </TouchableHighlight>
            </View>
        ) : this.renderScreen(this.state.currentScreenType, this.state.currentDetailedType)
    }
}
export default App

const styles = StyleSheet.create({
    contScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contBtn: {
        marginVertical: 10,
    },
})

