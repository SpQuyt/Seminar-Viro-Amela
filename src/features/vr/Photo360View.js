import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Viro360Image, ViroScene, ViroVRSceneNavigator } from 'react-viro'
import Images from '../../assets/Images'

export default class Photo360View extends Component {
    renderInitialScene = () => {
        return (
            <ViroScene>
                <Viro360Image source={Images.photos.photoGuadalupe} />
            </ViroScene>
        )
    }

    render() {
        return (
            <ViroVRSceneNavigator
                initialScene={{ scene: this.renderInitialScene }} />
        )
    }
}

const styles = StyleSheet.create({})
