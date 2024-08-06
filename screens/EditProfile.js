import React, { useState, } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    StyleSheet
} from 'react-native'
import { colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../components';
import { Linking } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker'; // Import the ImageCropPicker module
function EditProfile(props) {
    let leftIconName = ' '
    let rightIconName = ' '
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const [avatarSource, setAvatarSource] = useState(
        require('../assets/images/doanhuunhan.jpg') // Initial profile picture
      );
      const handleChooseImage = () => {
        // Function to open image picker
        ImageCropPicker.openPicker({
          cropping: true,
          cropperCircleOverlay: true,
        })
          .then((image) => {
            const source = { uri: image.path };
            setAvatarSource(source);
          })
          .catch((error) => {
            // Handle error if needed
          });
      };
    return (
        <SafeAreaView
            style={{
                backgroundColor: 'white',
                flex: 1
            }}
        >
            <UIHeader
                leftIconName='chevron-left'
                title={'Edit Profile'}
                onPressLeftIcon={() => navigation.goBack()}
            >

            </UIHeader>
            <View style={styles.view_image}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={handleChooseImage}>
            {/* Display the profile picture */}
            <Image source={avatarSource} style={styles.image} />
          </TouchableOpacity>
                    <View>
                        <Text style={{ paddingTop: 10 }}>Change Images</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingTop: 20 }}>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={() =>
                        // navigation.reset({
                        //     index: 0,
                        //     routes: [{ name: 'StartScreen' }],
                        // })
                        alert('Hello Jacob West')
                    }
                >
                    <Text style={styles.text1}>Name</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={styles.text2}>Jacob West</Text>
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={() =>
                        // navigation.reset({
                        //     index: 0,
                        //     routes: [{ name: 'StartScreen' }],
                        // })
                        alert('Username')
                    }
                >
                    <Text style={styles.text1}>User's name</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={styles.text2}>Jacob_W</Text>
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={() => alert('saochep')}
                >
                    <View style={{ flex: 1 }} />
                    <Text style={styles.text2}>tiktok.com@Jacob_W</Text>
                    <Icon
                        name='copy'
                        style={{
                            paddingEnd: 10,
                            opacity: 0.5,
                        }}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                borderBottomWidth: 0.5,
            }}>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={() =>
                        // navigation.reset({
                        //     index: 0,
                        //     routes: [{ name: 'StartScreen' }],
                        // })
                        alert('Add Bio')
                    }
                >
                    <Text style={styles.text1}>Bio</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={styles.text2}>Add a bio to your profile</Text>
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={() => Linking.openURL('https://www.instagram.com')}
                >
                    <Text style={styles.text1}>Instagram</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={styles.text2}
                        onPress={() => Linking.openURL('https://www.instagram.com')}>
                        {' '}Add Instagram to your profile </Text>
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={() => Linking.openURL('https://www.youtube.com')}
                >
                    <Text style={styles.text1}>Youtube</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={styles.text2}
                        onPress={() => Linking.openURL('https://www.youtube.com')}>
                        {' '}
                        Add Youtube to your profile</Text>
                    <Icon
                        name='chevron-right'
                        style={styles.chevron_right}
                        size={15} color={'black'}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    view_image: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 30,
        paddingHorizontal: 40
    },
    image: {
        borderRadius: 150 / 2,
        width: 135,
        height: 135,
    },
    touchableOpacity: {
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
    },
    text1: {
        color: 'black',
        fontSize: 15,
        paddingHorizontal: 17,
    },
    text2: {
        color: 'black',
        fontSize: fontSizes.h5,
        color: 'black',
        paddingEnd: 10,
        opacity: 0.5,
    },
    chevron_right: {
        paddingEnd: 10,
        opacity: 0.5,
    }
})
export default EditProfile