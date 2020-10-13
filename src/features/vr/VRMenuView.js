import React from 'react'
import { TouchableHighlight } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { navigate } from '../../navigation/NavigationService'
import { ROUTES_NAME } from '../../navigation/routes'

const VRMenuView = () => {
    return (
        <View style={styles.contScreen}>
            <TouchableHighlight onPress={() => navigate(ROUTES_NAME.VR.PHOTO360)} >
                <Text>Go To Photo360 View</Text>
            </TouchableHighlight>
        </View>
    )
}

export default VRMenuView

const styles = StyleSheet.create({
    contScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
