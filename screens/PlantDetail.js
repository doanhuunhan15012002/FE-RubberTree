import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    Alert
} from 'react-native';
import BackButton from '../components/BackButton';
import { icons, images, COLORS, SIZES, FONTS } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome5";
import CheckBox from 'react-native-check-box';
const RequirementBar = ({ icon, barPercentage }) => {
    return (
        <View style={{ height: 60, alignItems: 'center' }}>
            <View
                style={{
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: COLORS.gray
                }}
            >
                <Image
                    source={icon}
                    resizeMode="cover"
                    style={{
                        tintColor: COLORS.secondary,
                        width: 30,
                        height: 30
                    }}
                />
            </View>

            {/* Bar */}
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: 3,
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.gray
                }}
            ></View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: barPercentage,
                    height: 3,
                    marginTop: SIZES.base,
                    backgroundColor: COLORS.primary
                }}
            ></View>
        </View>
    )
}
const RequirementDetail = ({ icon, label, detail }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={icon}
                    resizeMode="cover"
                    style={{
                        tintColor: COLORS.secondary,
                        width: 30,
                        height: 30
                    }}
                />

                <Text style={{ marginLeft: SIZES.base, color: COLORS.secondary, ...FONTS.h2 }}>{label}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2 }}>{detail}</Text>
            </View>
        </View>
    )
}
const PlantDetail = (props) => {
    //navigation
    const { navigation, route } = props
    //functions of navigate to/back
    const { navigate, goBack } = navigation
    const { newPlants } = props.route.params; // Nhận dữ liệu từ params
    const { id, name, img, banner, weather, water, temp, soil, fertilizer } = newPlants;
    //hide Task
    const [showTodayTask, setShowTodayTask] = useState(false);
    //checkbox today task
    const [sketchingCompleted, setSketchingCompleted] = useState(false);
    const [wireframingCompleted, setWireframingCompleted] = useState(false);
    const [visualDesignCompleted, setVisualDesignCompleted] = useState(false);
    // Render
    function renderHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: SIZES.padding,
                    right: SIZES.padding
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.5)' }}
                            onPress={() => goBack()}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </TouchableOpacity>
                    </View>
            
                </View>

                <View style={{ flexDirection: 'row', marginTop: "10%" }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: COLORS.white, fontSize: 30, }}>{name}</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
            </View>
        )
    }
    function renderRequirementsBar() {
        return (
            <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.padding, justifyContent: 'space-between' }}>
                <RequirementBar
                    icon={icons.sun}
                    barPercentage="50%"
                />
                <RequirementBar
                    icon={icons.drop}
                    barPercentage="25%"
                />
                <RequirementBar
                    icon={icons.temperature}
                    barPercentage="80%"
                />
                <RequirementBar
                    icon={icons.garden}
                    barPercentage="30%"
                />
                <RequirementBar
                    icon={icons.seed}
                    barPercentage="50%"
                />
            </View>
        )
    }
    function renderRequirements() {
        return (
            <View style={{ flex: 2.5, marginTop: SIZES.padding, paddingHorizontal: SIZES.padding, justifyContent: 'space-around' }}>
                <RequirementDetail
                    icon={icons.sun}
                    label="Weather"
                    detail={weather}
                />
                <RequirementDetail
                    icon={icons.drop}
                    label="Water"
                    detail={water}
                />
                <RequirementDetail
                    icon={icons.temperature}
                    label="Tempurature"
                    detail={temp}
                />
                <RequirementDetail
                    icon={icons.garden}
                    label="Land condition"
                    detail={soil}
                />
                <RequirementDetail
                    icon={icons.seed}
                    label="Fertilizer"
                    detail={fertilizer}
                />
            </View>
        )
    }
    function renderFooter() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingVertical: SIZES.padding }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.padding,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => setShowTodayTask(!showTodayTask)}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                        {showTodayTask ? "Hide Task" : "View Task"}
                    </Text>

                    <Image
                        source={icons.chevron}
                        resizeMode="contain"
                        style={{
                            marginLeft: SIZES.padding,
                            width: 20,
                            height: 20
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: SIZES.padding }}>
                    <Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h3 }}>2 months left to harvest</Text>
                    <Image
                        source={icons.downArrow}
                        resizeMode="contain"
                        style={{
                            tintColor: COLORS.secondary,
                            marginLeft: SIZES.base,
                            width: 20,
                            height: 20
                        }}
                    />
                </View>
            </View>
        )
    }

    function todaytask() {
        return (
            <View style={styles.context}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 20 }}>Today's Task</Text>
                <TouchableOpacity
                    onPress={() => setShowTodayTask(!showTodayTask)}
                >
                <Text style={{ fontSize: 16, marginVertical: 20, color:'blue'  }}>Done</Text>
                </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.item}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8BE8E5', borderRadius: 5, marginRight: 15 }}>
                                <Icon name='paint-brush' color={'white'} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Sketching</Text>
                                <Text style={{ color: 'grey', fontSize: 12 }}>2 Completed</Text>
                            </View>
                        </View>
                        <CheckBox
                            isChecked={sketchingCompleted}
                            onClick={() => setSketchingCompleted(!sketchingCompleted)}
                        />
                    </View>
                    <View style={styles.item}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8062D6', borderRadius: 5, marginRight: 15 }}>
                                <Icon name='window-maximize' color={'white'} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Wireframing</Text>
                                <Text style={{ color: 'grey', fontSize: 12 }}>0 Completed</Text>
                            </View>
                        </View>
                        <CheckBox
                            isChecked={wireframingCompleted}
                            onClick={() => setWireframingCompleted(!wireframingCompleted)}
                        />
                    </View>
                    <View style={styles.item}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FD8D14', borderRadius: 5, marginRight: 15 }}>
                                <Icon name='object-group' color={'white'} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Visual Design</Text>
                                <Text style={{ color: 'grey', fontSize: 12 }}>4 Completed</Text>
                            </View>
                        </View>
                        <CheckBox
                            isChecked={visualDesignCompleted}
                            onClick={() => setVisualDesignCompleted(!visualDesignCompleted)}
                        />
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 10 }}>
                        <View style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#461959', borderRadius: 5, }}>
                            <Icon name='plus' color={'white'} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            {/* Banner Photo */}
            <View style={{ height: "35%" }}>
                <Image
                    source={img}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>
    
            {/* View Task */}
            {showTodayTask && (
                <View style={{ ...StyleSheet.absoluteFill, zIndex: 1 }}>
                    {todaytask()}
                </View>
            )}
    
            {/* Requirements */}
            <View style={{ flex: 1, marginTop: -40 }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.lightGray,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        paddingVertical: SIZES.padding,
                        zIndex: 0 // Ensure the Requirements section is below the todaytask
                    }}
                >
                    <Text style={{ paddingHorizontal: SIZES.padding, color: COLORS.secondary, ...FONTS.h1 }}>Requirements</Text>
    
                    {renderRequirementsBar()}
    
                    {renderRequirements()}
    
                    {renderFooter()}
                </View>
            </View>
    
            {renderHeader()}
        </View>
    )
    


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    context: {
        flex: 8,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        height:'50%'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
})

export default PlantDetail;