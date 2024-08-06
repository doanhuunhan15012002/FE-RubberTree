import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Becca B',
    email: 'becca@example.com',
  },
  {
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Max B',
    email: 'max@example.com',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    name: 'Gina L',
    email: 'gina@example.com',
  },
  {
    img: 'https://images.unsplash.com/photo-1553240799-36bbf332a5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Jake P',
    email: 'jake@example.com',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Amy S',
    email: 'amy@example.com',
  },
];

items.push(...items);

export default function Share(props) {
    const { navigation, route } = props
     //functions of navigate to/back
    const { navigate, goBack } = navigation
    const createThreeButtonAlert = () =>
    Alert.alert('Success', 'Your data has been sending', [
        {
            text: 'Exit',
            onPress: () => navigation.navigate('Analysis'),
            style: 'Exit',
          },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Share</Text>

        {items.map(({ name, email, img }, index) => {
          return (
            <View
              key={index}
              style={[styles.card, index === 0 && { borderTopWidth: 0 }]}>
              <Image
                alt=""
                resizeMode="cover"
                source={{ uri: img }}
                style={styles.cardImg}
              />

              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{name}</Text>

                <View style={styles.cardEmail}>
                  <FeatherIcon color="#737987" name="mail" size={15} />

                  <Text style={styles.cardEmailText}>{email}</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={createThreeButtonAlert}
                style={styles.cardAction}>
                <FeatherIcon color="black" name="send" size={20} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: 'black',
    marginBottom: 12,
  },
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderColor: 'black',
  },
  cardImg: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
  },
  cardEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  cardEmailText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#737987',
    marginLeft: 4,
    lineHeight: 20,
    marginBottom: 2,
  },
  cardAction: {
    height: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});