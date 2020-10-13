import React from 'react'
import { TouchableHighlight } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { navigate } from '../../navigation/NavigationService'
import { ROUTES_NAME } from '../../navigation/routes'

const ARMenuView = () => {
    return (
        <View style={styles.contScreen}>
            <TouchableHighlight style={styles.contBtn} onPress={() => navigate(ROUTES_NAME.AR.DETECTED_PLANES)} >
                <Text>Go To Detect Plane</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.contBtn} onPress={() => navigate(ROUTES_NAME.AR.DRAG_THINGS)} >
                <Text>Go To Drag things View</Text>
            </TouchableHighlight>
        </View>
    )
}

export default ARMenuView

const styles = StyleSheet.create({
    contScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contBtn: {
        marginVertical: 10,
    },
})
