// import {
//   ViroVRSceneNavigator,
//   ViroARSceneNavigator
// } from 'react-viro';

// /*
//  TODO: Insert your API key below
//  */
// var sharedProps = {
//   apiKey:"API_KEY_HERE",
// }

// // Sets the default scene you want for AR and VR
// var InitialARScene = require('../js/HelloWorldSceneAR');
// var InitialVRScene = require('../js/HelloWorldScene');

// var UNSET = "UNSET";
// var VR_NAVIGATOR_TYPE = "VR";
// var AR_NAVIGATOR_TYPE = "AR";

// // This determines which type of experience to launch in, or UNSET, if the user should
// // be presented with a choice of AR or VR. By default, we offer the user a choice.
// var defaultNavigatorType = UNSET;

// export default class ViroSample extends Component {
//   constructor() {
//     super();

//     this.state = {
//       navigatorType : defaultNavigatorType,
//       sharedProps : sharedProps
//     }
//     this._getExperienceSelector = this._getExperienceSelector.bind(this);
//     this._getARNavigator = this._getARNavigator.bind(this);
//     this._getVRNavigator = this._getVRNavigator.bind(this);
//     this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
//     this._exitViro = this._exitViro.bind(this);
//   }

//   // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
//   // if you are building a specific type of experience.
//   render() {
//     if (this.state.navigatorType == UNSET) {
//       return this._getExperienceSelector();
//     } else if (this.state.navigatorType == VR_NAVIGATOR_TYPE) {
//       return this._getVRNavigator();
//     } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
//       return this._getARNavigator();
//     }
//   }

//   // Presents the user with a choice of an AR or VR experience
//   _getExperienceSelector() {
//     return (
//       <View style={localStyles.outer} >
//         <View style={localStyles.inner} >

//           <Text style={localStyles.titleText}>
//             Choose your desired experience:
//           </Text>

//           <TouchableHighlight style={localStyles.buttons}
//             onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
//             underlayColor={'#68a0ff'} >

//             <Text style={localStyles.buttonText}>AR</Text>
//           </TouchableHighlight>

//           <TouchableHighlight style={localStyles.buttons}
//             onPress={this._getExperienceButtonOnPress(VR_NAVIGATOR_TYPE)}
//             underlayColor={'#68a0ff'} >

//             <Text style={localStyles.buttonText}>VR</Text>
//           </TouchableHighlight>
//         </View>
//       </View>
//     );
//   }

// Returns the ViroARSceneNavigator which will start the AR experience
// _getARNavigator() {
//   return (
//     <ViroARSceneNavigator {...this.state.sharedProps}
//       initialScene={{scene: InitialARScene}} />
//   );
//   return <InitialARScene />
// }

//   // Returns the ViroSceneNavigator which will start the VR experience
//   _getVRNavigator() {
//     return (
//       <ViroVRSceneNavigator {...this.state.sharedProps}
//         initialScene={{scene: InitialVRScene}} onExitViro={this._exitViro}/>
//     );
//   }

//   // This function returns an anonymous/lambda function to be used
//   // by the experience selector buttons
//   _getExperienceButtonOnPress(navigatorType) {
//     return () => {
//       this.setState({
//         navigatorType : navigatorType
//       })
//     }
//   }

//   // This function "exits" Viro by setting the navigatorType to UNSET.
//   _exitViro() {
//     this.setState({
//       navigatorType : UNSET
//     })
//   }
// }

// var localStyles = StyleSheet.create({
//   viroContainer :{
//     flex : 1,
//     backgroundColor: "black",
//   },
//   outer : {
//     flex : 1,
//     flexDirection: 'row',
//     alignItems:'center',
//     backgroundColor: "black",
//   },
//   inner: {
//     flex : 1,
//     flexDirection: 'column',
//     alignItems:'center',
//     backgroundColor: "black",
//   },
//   titleText: {
//     paddingTop: 30,
//     paddingBottom: 20,
//     color:'#fff',
//     textAlign:'center',
//     fontSize : 25
//   },
//   buttonText: {
//     color:'#fff',
//     textAlign:'center',
//     fontSize : 20
//   },
//   buttons : {
//     height: 80,
//     width: 150,
//     paddingTop:20,
//     paddingBottom:20,
//     marginTop: 10,
//     marginBottom: 10,
//     backgroundColor:'#68a0cf',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
//   exitButton : {
//     height: 50,
//     width: 100,
//     paddingTop:10,
//     paddingBottom:10,
//     marginTop: 10,
//     marginBottom: 10,
//     backgroundColor:'#68a0cf',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#fff',
//   }
// });

// module.exports = ViroSample

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

// const App = () => {
//     const [isMenu, setIsMenu] = useState(true)
//     const [initialScene, setInitialScene] = useState(null)
//     const [currentScreenType, setCurrentScreenType] = useState(1)
//     const [currentDetailedType, setCurrentDetailedType] = useState(1)

//     const renderAR = (DetailedType) => {
//         switch (DetailedType) {
//             case ARType.DETECTED_PLANES:
//                 return <DetectedPlaneView />
//             case ARType.DRAG_THINGS:
//                 return <DragThingsView />
//             default:
//                 return <DetectedPlaneView />
//         }
//     }

//     const renderVR = (DetailedType) => {
//         switch (DetailedType) {
//             case VRType.PHOTO360:
//                 return <Photo360View />
//             default:
//                 return <Photo360View />
//         }
//     }

//     const renderScreen = (Type, DetailedType) => {
//         console.log(Type.AR_TYPE)
//         if (ScreenType === Type.AR_TYPE)
//             return <DetectedPlaneView />
//         // return <ViroARSceneNavigator initialScene={renderAR(DetailedType)} />
//         // return renderAR(DetailedType)
//         // return <ViroVRSceneNavigator initialScene={(renderVR(DetailedType))} />
//         return <View />
//     }

//     const handlePress = (ScreenType, DetailedType) => {
//         setCurrentScreenType(ScreenType)
//         setCurrentDetailedType(DetailedType)
//         setIsMenu(false)
//     }

//     return isMenu ? (
//         <View style={styles.contScreen}>
//             <Text>AR MENU</Text>
//             <TouchableHighlight style={styles.contBtn} onPress={() => handlePress(ScreenType.AR_TYPE, ARType.DETECTED_PLANES)} >
//                 <Text>Go To Detect Plane</Text>
//             </TouchableHighlight>
//             <TouchableHighlight style={styles.contBtn} onPress={() => navigate(ROUTES_NAME.AR.DRAG_THINGS)} >
//                 <Text>Go To Drag things View</Text>
//             </TouchableHighlight>

//             <Text>VR MENU</Text>
//             <TouchableHighlight onPress={() => navigate(ROUTES_NAME.VR.PHOTO360)} >
//                 <Text>Go To Photo360 View</Text>
//             </TouchableHighlight>
//         </View>
//     ) : renderScreen(currentScreenType, currentDetailedType)
// }

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

