import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Gradient from 'react-native-linear-gradient';
import Svg, { Circle, LinearGradient, Stop } from 'react-native-svg';

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width - 48;

const elements = [
  {
    uri: 'https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/7c925486957b32b1c521ded5e345a379.png',
    position: [0, 0],
    size: [120, 120],
  },
  {
    uri: 'https://cdn-icons-png.flaticon.com/512/2826/2826508.png',
    position: [-120, -120],
    size: [90, 90],
  },
  {
    uri: 'https://cdn-icons-png.flaticon.com/512/4849/4849571.png',
    position: [120, 120],
    size: [70, 70],
  },
  {
    uri: 'https://media.istockphoto.com/id/1153628239/vector/industrial-robot-arm-icon-with-automation-system-used-for-manufacturing-or-industry-4-0.jpg?s=612x612&w=0&k=20&c=ODWcpR33WwH2F_rfI3GxbpuOvbWEVkLRqV-gSffA_ZM=',
    position: [-120, 120],
    size: [80, 80],
  },
  {
    uri: '',
    position: [120, -120],
    size: [100, 100],
  },
];

function Background() {
  
  return (
    <View style={styles.background}>
      {elements.map(
        ({ position: [x, y], size: [width, height], uri, icon }, index) => {
          return (
            <View
              key={index}
              style={[
                styles.element,
                {
                  width,
                  height,
                  top: CIRCLE_SIZE / 2 - height / 2 + y,
                  left: CIRCLE_SIZE / 2 - width / 2 + x,
                },
              ]}>
              {uri ? (
                <Image style={styles.elementImage} source={{ uri }} />
              ) : (
                <FeatherIcon name={icon} color="#DC89CD" size={24} />
              )}
            </View>
          );
        },
      )}
      <Svg viewBox="0 0 400 400">
        <Circle
          cx="200"
          cy="200"
          r="198"
          stroke="url(#linear_1)"
          strokeWidth="4"
          strokeDasharray="20 20"
        />
        <Circle
          cx="200"
          cy="200"
          r="128"
          stroke="url(#linear_2)"
          strokeWidth="4"
          strokeDasharray="20 20"
        />
        <LinearGradient
          id="linear_1"
          x1="78"
          y1="42"
          x2="312"
          y2="364"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#D0B2CC" />
          <Stop offset="1" stopColor="#DC89CF" stopOpacity="1" />
        </LinearGradient>
        <LinearGradient
          id="linear_2"
          x1="139"
          y1="121"
          x2="256"
          y2="282"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="red" />
          <Stop offset="1" stopColor="#DC89CF" stopOpacity="1" />
        </LinearGradient>
      </Svg>
    </View>
  );
}

export default function StartScreen(props) {
  //navigation
  const {navigation, route} = props
  //functions of navigate to/back
  const {navigate, goBack} = navigation
  return (
    <Gradient colors={['#F3D9EF', '#fff']} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Welcome to Wisdoms Robotics 
            </Text>
            <Text style={styles.text}>
            Robot ecosystem from agricultural robots, industrial robots and more
            </Text>
          </View>
          <View style={styles.main}>
            <Background />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LoginScreen')
              }}>
              <View style={[styles.button, styles.buttonEmpty]}>
                <Text style={styles.buttonText}>Log In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RegisterScreen')
              }}>
              <View style={styles.button}>
                <Text style={[styles.buttonText, { color: 'white' }]}>
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  header: {
    paddingRight: 60,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    position: 'relative',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
  },
  title: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    color: '#2a2a39',
    marginBottom: 12,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    color: '#434247',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#4C164C',
    borderWidth: 2,
    borderColor: '#4A184B',
  },
  buttonEmpty: {
    backgroundColor: 'transparent',
    borderColor: '#4C164C',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4C164C',
  },
  element: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 3,
    borderColor: '#DC89CD',
    zIndex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementImage: {
    width: '100%',
    height: '100%',
    borderRadius: 9999,
  },
});