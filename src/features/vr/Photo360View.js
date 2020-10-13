import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Viro360Image, ViroScene } from 'react-viro'
import Images from '../../assets/Images'

const Photo360View = () => {
    return (
        <ViroScene>
            <Viro360Image source={Images.photos.photoGuadalupe} />
        </ViroScene>
    )
}

export default Photo360View

const styles = StyleSheet.create({})
