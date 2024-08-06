import { React, useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ImageBackground,
    Modal,
    Pressable
} from 'react-native';
import Lottie from 'lottie-react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Settings from './Settings';
const Tree = (props) => {
    //navigation
    const { navigation, route } = props
    //functions of navigate to/back
    const { navigate, goBack } = navigation
    //popup notification
    const [modalVisible, setModalVisible] = useState(false);
    //
    const Tab = createMaterialTopTabNavigator();
    // Dummy Data
    const [newPlants, setNewPlants] = useState([
        {
            id: 0,
            name: "Garden 1",
            img: images.rubber_garden,
            favourite: true,
            banner: images.rubbertree,
            weather: 'Rainny',
            water: "250ML/day",
            temp: "25°C",
            soil: "Well",
            fertilizer: "150 Mg",
            
        },
        {
            id: 1,
            name: "Garden 2",
            img: images.rubber_garden2,
            favourite: true,
            banner: images.rubbertree,
            weather: 'Sunny',
            water: "350ML/day",
            temp: "35°C",
            soil: "Bad",
            fertilizer: "250 Mg",
            
        },
        {
            id: 2,
            name: "Garden 3",
            img: images.rubber_garden3,
            favourite: false,
            banner: images.rubbertree,
            weather: 'Thunder',
            water: "150ML/day",
            temp: "15°C",
            soil: "Well",
            fertilizer: "50 Mg",
           
        },
        {
            id: 3,
            name: "Garden 4",
            img: images.rubber_garden4,
            favourite: false,
            banner: images.rubbertree,
            weather: 'Foggy',
            water: "350ML/day",
            temp: "25°C",
            soil: "bad",
            fertilizer: "150 Mg",
    
        },
    ]);

    const [devices, setDevices] = useState([
        {
            id: 0,
            img: images.rubbertree,
            notification:'Task done'
        },
        {
            id: 1,
            img: images.Drone_2,
            notification:'Pending 70%'
        },
        {
            id: 2,
            img: images.Drone,
            notification:'Pending 90%'
        },
        {
            id: 3,
            img: images.Rubber_robot,
            notification:'Task done'
        },
        {
            id: 4,
            img: images.CNC_robot,
            notification:'Pending 10%'
        },
    ]);

    useEffect(() => {
    }, []);

    // const handleChangeFavourite = (itemId) => {
    //     const updatedPlants = newPlants.map((plant) =>
    //         plant.id === itemId ? { ...plant, favourite: !plant.favourite } : plant
    //     );
    //     setNewPlants(updatedPlants);
    // };
    // Render
    function RenderGarden(item, index) {
        return (
            <TouchableOpacity
                style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}
                onPress={() => {
                    navigation.navigate('PlantDetail', { newPlants: item })
                }}
                newPlants={item} key={item.id}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.23,
                        height: '82%',
                        borderRadius: 15
                    }}
                />

                <View
                    style={{
                        position: 'absolute',
                        bottom: '17%',
                        right: 0,
                        backgroundColor: COLORS.primary,
                        paddingHorizontal: SIZES.base,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                </View>

                {/* <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: '15%',
                        left: 7,
                    }}
                    onPress={() => handleChangeFavourite(item.id)} // Pass item.id as itemId
                >
                    <Image
                        source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </TouchableOpacity> */}
            </TouchableOpacity>
        )
    }

    function renderDevicesComponent() {
        if (devices.length == 0) {
            return (
                <View></View>
            )
        } else if (devices.length <= 3) {
            return (
                devices.map((item, index) => (
                    <View
                        key={`devices-${index}`}
                        style={index == 0 ? { flexDirection: 'row' } : { flexDirection: 'row', marginLeft: -20 }}
                    >
                        <Image
                            source={item.img}
                            resizeMode="cover"
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                borderWidth: 3,
                                borderColor: COLORS.primary
                            }}
                        />
                    </View>
                ))
            )
        } else {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {devices.map((item, index) => {
                        if (index <= 2) {
                            return (
                                <TouchableOpacity
                                    key={`devices-${index}`}
                                    style={index == 0 ? {} : { marginLeft: -20 }}
                                    onPress={() => {
                                        // Xử lý sự kiện onPress cho mỗi thành phần
                                        console.log(`Robot ${index}`);
                                    }}
                                >
                                    <Image
                                        source={item.img}
                                        resizeMode="cover"
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            borderWidth: 3,
                                            borderColor: COLORS.primary
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    })}

                    <Text style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}>+{devices.length - 3} More</Text>
                </View>
            )
        }
    }
    return (
        <View style={styles.container}>
            {/* My garden */}
            <View style={{ height: "30%", backgroundColor: COLORS.white }}>
                <ImageBackground
                    style={{
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                    }}
                    source={require('../assets/images/bg2.jpg')}>
                    <View style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ color: COLORS.black, ...FONTS.h2, fontWeight: 'bold', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10, }}>Home</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                            >
                                <Icon
                                    name="bell"
                                    resizeMode="contain"
                                    size={25}
                                    color='black'
                                    style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Notification</Text>
                                    <View>
                                        {devices.map((item, index) => {
                                            if (index <= 4) {
                                                return (
                                                    <TouchableOpacity
                                                        key={`devices-${index}`}
                                                        style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginTop:10 }}
                                                        onPress={() => {
                                                            // Xử lý sự kiện onPress cho mỗi thành phần
                                                            console.log(`Robot ${index}`);
                                                        }}
                                                    >
                                                        <Image
                                                            source={item.img}
                                                            resizeMode="cover"
                                                            style={{
                                                                width: 50,
                                                                height: 50,
                                                                borderRadius: 25,
                                                                borderWidth: 1,
                                                                borderColor: COLORS.primary,
                                                                marginRight: 10
                                                            }}
                                                        />
                                                        <Text style={{ fontSize: 16, color: item.notification === 'Task done' ? 'green' : 'black' }}>{item.notification}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }
                                        })}
                                    </View>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </Pressable>
                                </View>

                            </View>
                        </Modal>
                        <View style={{ marginTop: SIZES.base }}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={newPlants}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item, index }) => RenderGarden(item, index)}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>

            {/*Feature*/}
            <View style={{ height: "50%", backgroundColor: COLORS.lightGray }}>
                <View style={{
                    flex: 1,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    backgroundColor: COLORS.white
                }}>
                    <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: COLORS.secondary, ...FONTS.h2, }}>Feature</Text>
                        </View>

                        <View style={{ flexDirection: 'row', height: "88%", marginTop: SIZES.base }}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity
                                    style={{ flex: 1, backgroundColor: '#ffffff', borderRadius: 20 }}
                                    onPress={() => navigation.navigate('Analysis')}
                                >
                                    <Lottie source={require('../assets/animations/pie_chart.json')} autoPlay loop />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flex: 1, marginTop: SIZES.font, backgroundColor: '#D8BFD8', borderRadius: 20 }}
                                    onPress={() => navigation.navigate('Schedule')}
                                >
                                    <Lottie source={require('../assets/animations/task.json')} autoPlay loop />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1.3, borderColor: 'black' }}>
                                <TouchableOpacity
                                    style={{ flex: 1, marginLeft: SIZES.font, backgroundColor: '#97D0F1', borderRadius: 20 }}
                                    onPress={() => navigation.navigate('Manager')}
                                >
                                    <Lottie source={require('../assets/animations/manager.json')} autoPlay loop />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/*Devices */}
            <View style={{ height: "20%", backgroundColor: COLORS.lightGray }}>
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.lightGray
                }}>
                    <View style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                        <Text style={{ color: COLORS.secondary, ...FONTS.h2, }}>My Robots</Text>
                        <Text style={{ color: COLORS.secondary, ...FONTS.body3, }}>{devices.length} total</Text>
                        <View style={{ flexDirection: 'row', height: '60%' }}>
                            {/* Friends */}
                            <View style={{ flex: 1.3, flexDirection: 'row', alignItems: 'center' }}>
                                {renderDevicesComponent()}
                            </View>

                            {/* Add Friend */}
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>Add New</Text>
                                <TouchableOpacity
                                    style={{
                                        marginLeft: SIZES.base,
                                        width: 40,
                                        height: 40,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: COLORS.gray
                                    }}
                                    onPress={() => { console.log("Add friend on pressed") }}
                                >
                                    <Image
                                        source={icons.plus}
                                        resizeMode="contain"
                                        style={{
                                            width: 20,
                                            height: 20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centeredView: {
        flex: 1,
        marginTop: 22,
    },
    modalView: {
        margin: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        marginTop:20,
        position:"relative",
        alignItems:'center'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default Tree;
