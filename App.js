import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  New,
  OnBoarding,
  Home,
  DestinationDetail,
  Analysis,
  Services,
  BookDetail,
  Tree,
  PlantDetail,
  Settings,
  EditProfile,
  Operator_robot,
  ConfirmLogout,
  RobotDetails,
  Schedule,
  Manager,
  Share
} from './screens'
import BottomTab from './navigation/BottomTab'
const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="New" component={New}/>
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
          <Stack.Screen name="OnBoarding" component={OnBoarding}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="DestinationDetail" component={DestinationDetail}/>
          <Stack.Screen name="Analysis" component={Analysis}/>
          <Stack.Screen name="Services" component={Services}/>
          <Stack.Screen name="BookDetail" component={BookDetail}/>
          <Stack.Screen name="Tree" component={Tree}/>
          <Stack.Screen name="PlantDetail" component={PlantDetail}/>
          <Stack.Screen name="BottomTab" component={BottomTab}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="EditProfile" component={EditProfile}/>
          <Stack.Screen name="Operator_robot" component={Operator_robot}/>
          <Stack.Screen name="RobotDetails" component={RobotDetails}/>
          <Stack.Screen name="ConfirmLogout" component={ConfirmLogout}/>
          <Stack.Screen name="Schedule" component={Schedule}/>
          <Stack.Screen name="Manager" component={Manager}/>
          <Stack.Screen name="Share" component={Share}/>
          


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
