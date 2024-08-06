
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { colors, fontSizes } from '../constants'
const StarReview = ({ rate }) => {
    var starComponents = [];
    var fullStar = Math.floor(rate)
    var noStar = Math.floor(5 - rate)
    var halfStar = 5 - fullStar - noStar

    // Full Star
    for (var i = 0; i < fullStar; i++) {
        starComponents.push(
            <Image
                key={`full-${i}`}
                source={icons.starFull}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    // Half Star
    for (var i = 0; i < halfStar; i++) {
        starComponents.push(
            <Image
                key={`half-${i}`}
                source={icons.starHalf}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    // No Star
    for (var i = 0; i < noStar; i++) {
        starComponents.push(
            <Image
                key={`empty-${i}`}
                source={icons.starEmpty}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {starComponents}
            <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{rate}</Text>
        </View>
    )
}

const IconLabel = ({ icon, label }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Text style={{ marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3 }}>{label}</Text>
        </View>
    )
}

const DestinationDetail = (props) => {
    //navigation
    const { navigation, route } = props
    //functions of navigate to/back
    const { navigate, goBack } = navigation
    //item
    const { id, name, img, rate, short_descriptstion, descripstion, status, price, like, dislike } = props.route.params.destinations
    // Render

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{ flex: 2 }}>
                <Image
                    source={img}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '80%',
                    }}
                />
                <View
                    style={[{
                        position: 'absolute',
                        bottom: "5%",
                        left: "5%",
                        right: "5%",
                        borderRadius: 15,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.white
                    }, styles.shadow]}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.shadow}>
                            <Image
                                source={img}
                                resizeMode="cover"
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 15,
                                }}
                            />
                        </View>

                        <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                            <Text style={{ ...FONTS.h3 }}>{name}</Text>
                            <Text style={status == "Available" ? styles.textStyleTrue : styles.textStyleFalse}>{status}</Text>

                            <StarReview
                                rate={rate}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: SIZES.radius }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                            {short_descriptstion}
                        </Text>
                    </View>
                </View>

                {/* Header Buttons */}
                <View
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 20,
                        right: 20,
                        //height: 50,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Home') }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Menu on pressed") }}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Body */}
            <ScrollView style={{ flex: 1.5 }}>
                {/* About */}
                <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>About</Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
                        {descripstion}
                    </Text>
                </View>
                <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() =>
                    // navigation.reset({
                    //     index: 0,
                    //     routes: [{ name: 'StartScreen' }],
                    // })
                    alert(`Total like of ${name} is ${like}`)
                }
            >
                <Text style={styles.text1}>Like</Text>
                <View style={{ flex: 1 }} />
                <Text style={styles.text2}>{like}</Text>
                <Icon
                    name='thumbs-up'
                    style={styles.icon}
                    size={15} color={'black'}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() =>
                    // navigation.reset({
                    //     index: 0,
                    //     routes: [{ name: 'StartScreen' }],
                    // })
                    alert(`Total like of ${name} is ${dislike}`)
                }
            >
                <Text style={styles.text1}>Dislike</Text>
                <View style={{ flex: 1 }} />
                <Text style={styles.text2}>{dislike}</Text>
                <Icon
                    name='thumbs-down'
                    style={styles.icon}
                    size={15} color={'black'}
                />
            </TouchableOpacity>
            </ScrollView>
            

            {/* Footer */}
            <View style={{ flex: 0.5, paddingHorizontal: SIZES.padding }}>
                <LinearGradient
                    style={[{ height: 70, width: '100%', borderRadius: 15 }]}
                    colors={['#edf0fc', '#d6dfff']}
                    rate={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
                            <Text style={{ ...FONTS.h1 }}>{price}</Text>
                        </View>

                        <TouchableOpacity
                            style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }}
                            onPress={() => { console.log("Rent now on pressed") }}
                        >
                            <LinearGradient
                                style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }]}
                                colors={['#46aeff', '#5884ff']}
                                rate={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Rent now</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textStyleTrue: {
        color: 'green',
        fontSize: 16,
        // Các thuộc tính khác khi điều kiện là true
    },
    textStyleFalse: {
        color: 'red',
        fontSize: 16,
        // Các thuộc tính khác khi điều kiện là false
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
        marginStart:10
    },
    text2: {
        color: 'black',
        fontSize: fontSizes.h5,
        color: 'black',
        paddingEnd: 10,
        opacity: 0.5,
    },
    icon: {
        paddingEnd: 10,
        opacity: 0.5,
    }
});

export default DestinationDetail;
