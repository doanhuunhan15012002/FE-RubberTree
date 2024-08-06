/**
yarn add react-navigation
yarn add react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add @react-navigation/drawer
yarn add react-native-gesture-handler 
yarn add react-native-reanimated
 */
import * as React from 'react'
import {
    Home,
    RobotDetails,
    Tree,
    Services,
    Settings,
    Operator_robot,

} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {fontSizes, colors} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import 'react-native-gesture-handler'
import { View } from 'react-native'
const Tab = createBottomTabNavigator()

const screenOptions = ({route})=> ({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'black',    
    tabBarActiveBackgroundColor: colors.inactive,
    tabBarInactiveBackgroundColor: 'white',
    tabBarBackground: () => (
        <View style={{backgroundColor: colors.primary, flex: 1}}></View>
      ),
    tabBarIcon: ({focused, color, size}) => {
        return <Icon 
            style={{
                paddingTop: 5
            }}
            name= {route.name == "Home" ? "home":
                (route.name == "RobotDetails" ? "robot" : (
                    route.name == "Tree" ? "tree" : 
                    (route.name == "Settings" ? "cogs" : 
                    (route.name == "Services" ? "servicestack" : ""))
                ))}
            size={23} 
            color={focused ? 'white' : colors.inactive} 
        />
    },    
})
function BottomTab(props) {
    return <Tab.Navigator screenOptions={screenOptions}>        
        <Tab.Screen 
            name={"Home"} 
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6
                }
            }}
        />
        <Tab.Screen 
            name={"RobotDetails"} 
            component={Operator_robot}
            options={{
                tabBarLabel: 'Robot',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6
                }
            }}
        />
        <Tab.Screen 
            name={"Tree"} 
            component={Tree}
            options={{
                tabBarLabel: 'Tree',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6
                }
            }}
        />
        <Tab.Screen 
            name={"Services"} 
            component={Services}
            options={{
                tabBarLabel: 'Dashboard',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6
                }
            }}
        />
        <Tab.Screen 
            name={"Settings"} 
            component={Settings}
            options={{
                tabBarLabel: 'Settings',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6
                }
            }}
        />
    </Tab.Navigator>
}
export default BottomTab
