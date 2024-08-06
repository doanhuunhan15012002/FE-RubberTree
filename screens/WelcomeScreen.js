import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const CIRCLE_SIZE = width / 2;

const items = [
  {
    uri: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    text: 'Nature',
    position: [0, 0],
  },
  {
    uri: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2200&q=80',
    text: 'Forest',
    position: [120, 120],
  },
  {
    uri: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    text: 'Water',
    position: [240, 0],
  },
  {
    uri: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80',
    text: 'Mountains',
    position: [360, 120],
  },
];

export default function Example() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Relaxation</Text>
        <Text style={styles.text}>
          Aliqua ullamco incididunt elit labore consequat ipsum sunt
          exercitation aliqua duis nulla et qui fugiat
        </Text>
      </View>
      <View style={styles.circles}>
        {items.map(({ uri, text, position: [top, left] }, index) => {
          return (
            <View
              key={index}
              style={[
                styles.circle,
                { top, left, zIndex: items.length - index },
              ]}>
              <Image source={{ uri }} style={styles.circleImage} />
              <Text style={styles.circleText}>{text}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}>
        <View style={styles.button}>
          <FeatherIcon name="arrow-down" color="#fff" size={24} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: '300',
    color: '#3a3b3d',
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#a1377f',
    textAlign: 'center',
    marginBottom: 8,
  },
  content: {
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  circles: {
    position: 'relative',
    flex: 1,
    marginHorizontal: 24,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    backgroundColor: 'white',
    borderRadius: 9999,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  circleImage: {
    width: '100%',
    height: '100%',
    borderRadius: 9999,
  },
  circleText: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    textTransform: 'uppercase',
    top: CIRCLE_SIZE / 2 - 20 / 2,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
    color: '#fff',
  },
  button: {
    position: 'absolute',
    left: width / 2 - 60 / 2,
    bottom: 0,
    width: 60,
    height: 60,
    borderRadius: 9999,
    backgroundColor: '#323141',
    alignItems: 'center',
    justifyContent: 'center',
  },
});