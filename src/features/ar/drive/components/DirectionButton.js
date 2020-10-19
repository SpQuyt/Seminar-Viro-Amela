import React, { PureComponent } from 'react'
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class DirectionButton extends PureComponent {
    constructor(props) {
        super(props)
    }

    handlePress = () => {
        this.props.onCustomPressed()
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Image source={this.props.imgUrl} style={styles.imgButton} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    imgButton: {
        padding: 10,
        width: 50,
        height: 50,
        margin: 5,
    },
})