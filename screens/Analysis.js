import React, { useRef, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Animated,
    Platform,
    Dimensions,
    SafeAreaView
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
import { VictoryBar, VictoryChart, VictoryLine, VictoryPie } from 'victory-native';
import { ScrollView } from 'react-native-virtualized-view'
import { Svg } from 'react-native-svg';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const items = [
    { label: 'View', icon: 'eye' },
    { label: 'Edit', icon: 'edit' },
    { label: 'Share', icon: 'share' },
];
const CIRCLE_SIZE = 18;
const CIRCLE_RING_SIZE = 2;
const Analysis = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [string, onChangeText] = React.useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (selectedDate) => {
        setDate(selectedDate); // Update the date state with the selected date
        hideDatePicker();
    };
    //navigation
    const { navigation, route } = props
    //functions of navigate to/back
    const { navigate, goBack } = navigation
    // dummy data
    const confirmStatus = "C"
    const pendingStatus = "P"
    let categoriesData = [
        {
            id: 1,
            name: "Từ 1-2 năm tuổi",
            icon: icons.education,
            color: COLORS.yellow,
            expenses: [
                {
                    id: 1,
                    title: "Nhóm cây non",
                    description: "1-2 tuổi",
                    location: "Van lang university",
                    total: 100.00,
                    status: pendingStatus
                },
                {
                    id: 2,
                    title: "Arduino",
                    description: "Hardward",
                    location: "ByProgrammers' tuition center",
                    total: 30.00,
                    status: pendingStatus
                },
                {
                    id: 3,
                    title: "Javascript Books",
                    description: "Javascript books",
                    location: "ByProgrammers' Book Store",
                    total: 20.00,
                    status: confirmStatus
                },
                {
                    id: 4,
                    title: "PHP Books",
                    description: "PHP books",
                    location: "ByProgrammers' Book Store",
                    total: 20.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "Từ 2-5 năm tuổi",
            icon: icons.food,
            color: COLORS.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "Vitamins",
                    description: "Vitamin",
                    location: "ByProgrammers' Pharmacy",
                    total: 25.00,
                    status: pendingStatus,
                },

                {
                    id: 6,
                    title: "Protein powder",
                    description: "Protein",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },

            ],
        },
        {
            id: 3,
            name: "Từ 5-7 năm tuổi",
            icon: icons.baby_car,
            color: COLORS.darkgreen,
            expenses: [
                {
                    id: 7,
                    title: "Toys",
                    description: "toys",
                    location: "ByProgrammers' Toy Store",
                    total: 25.00,
                    status: confirmStatus,
                },
                {
                    id: 8,
                    title: "Baby Car Seat",
                    description: "Baby Car Seat",
                    location: "ByProgrammers' Baby Care Store",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Pampers",
                    description: "Pampers",
                    location: "ByProgrammers' Supermarket",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Baby T-Shirt",
                    description: "T-Shirt",
                    location: "ByProgrammers' Fashion Store",
                    total: 20.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 4,
            name: "Từ 7-10 năm tuổi",
            icon: icons.healthcare,
            color: COLORS.peach,
            expenses: [
                {
                    id: 11,
                    title: "Skin Care product",
                    description: "skin care",
                    location: "ByProgrammers' Pharmacy",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Lotion",
                    description: "Lotion",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Face Mask",
                    description: "Face Mask",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Sunscreen cream",
                    description: "Sunscreen cream",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Lớn hơn 10 tuổi",
            icon: icons.sports_icon,
            color: COLORS.purple,
            expenses: [
                {
                    id: 15,
                    title: "Gym Membership",
                    description: "Monthly Fee",
                    location: "ByProgrammers' Gym",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 16,
                    title: "Gloves",
                    description: "Gym Equipment",
                    location: "ByProgrammers' Gym",
                    total: 15.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Lớn hơn 20 tuổi",
            icon: icons.cloth_icon,
            color: COLORS.red,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "ByProgrammers' Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "ByProgrammers' Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        }
    ]
    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;
    const [categories, setCategories] = React.useState(categoriesData)
    const [viewMode, setViewMode] = React.useState("chart")
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [showMoreToggle, setShowMoreToggle] = React.useState(false)
    function renderNavBar() {
        const refRBSheet = React.useRef();
        const [value, setValue] = React.useState();
        const handleOptionPress = (index) => {
            switch (index) {
                case 0:
                    // Handle the first option's event
                    navigation.navigate('Analysis')
                    break;
                case 1:
                    // Handle the second option's event
                    navigation.navigate('Settings')
                    break;
                case 2:
                    // Handle the third option's event
                    navigation.navigate('Share')
                    break;
                // Add more cases for additional options
                default:
                    break;
            }
        };

  
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}
            >
                <TouchableOpacity
                    style={{ justifyContent: 'center', width: 50, }}
                    onPress={() => navigation.navigate('BottomTab')}
                >
                    <Image
                        source={icons.back_arrow}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                    onPress={() => refRBSheet.current.open()}
                >
                    <Image
                        source={icons.more}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
                <RBSheet
                    customStyles={{ container: styles.sheet }}
                    height={300}
                    openDuration={250}
                    ref={refRBSheet}>
        <View style={styles.sheetHeader}>
          <View style={{ width: 60 }} />

          <Text style={styles.sheetHeaderTitle}>Options</Text>

          <TouchableOpacity
           onPress={() => refRBSheet.current.close()}
           >
            <View style={{ width: 60, alignItems: 'flex-end' }}>
              <Text style={styles.done}>Close</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.sheetBody}>
          {items.map(({ icon, label }, index) => {
            const isActive = value === index;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                    setValue(index);
                    handleOptionPress(index); // Call the function with the index
                }}>
                <View style={[styles.radio, isActive && styles.radioActive]}>
                  <FeatherIcon color="#000" name={icon} size={20} />

                  <Text style={styles.radioLabel}>{label}</Text>

                  
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </RBSheet>
            </View>
        )
    }

    function renderHeader() {
        const [selected, setSelected] = React.useState(0);
  const sheet = React.useRef();

        return (
            <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white }}>
                <View>
                    <TouchableOpacity 
                    onPress={() => sheet.current.open()}
                    ><Text style={{ color: COLORS.primary, ...FONTS.h2 }}>Statistics</Text></TouchableOpacity>
                    <Text style={{ ...FONTS.h3, color: COLORS.darkgray, }}>Rate Statistics (Group tree)</Text>
                </View>
                
                <RBSheet
        customStyles={{ container: styles.sheet }}
        height={440}
        openDuration={250}
        ref={sheet}>
        <View style={styles.sheetHeader1}>
          <Text style={styles.sheetTitle}>View option</Text>
          <Text style={styles.sheetText}>
          Stats mode view option
          </Text>
        </View>
        <View style={styles.sheetBody}>
          <View style={styles.sheetBodyOptions}>
            <TouchableOpacity
              style={[
                styles.sheetBodyOption,
                selected === 0 && { borderColor: '#000' },
              ]}
              onPress={() => setSelected(0)}>
              <FeatherIcon
                name="percent"
                color={selected === 0 ? '#000' : '#bcbdd9'}
                size={24}
              />
              <Text
                style={[
                  styles.sheetBodyOptionText,
                  selected === 0 && { color: '#000' },
                ]}>
                Rate{'\n'}Statistics
              </Text>
            </TouchableOpacity>
            <View style={styles.delimiter} />
            <TouchableOpacity
              style={[
                styles.sheetBodyOption,
                selected === 1 && { borderColor: '#000' },
              ]}
              onPress={() => setSelected(1)}>
              <FeatherIcon
                name="dollar-sign"
                color={selected === 1 ? '#000' : '#bcbdd9'}
                size={24}
              />
              <Text
                style={[
                  styles.sheetBodyOptionText,
                  selected === 1 && { color: '#000' },
                ]}>
                Revenue Statistics
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>View now</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        backgroundColor: COLORS.lightGray,
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={() => showDatePicker()}
                    >
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <View style={{ marginLeft: SIZES.padding }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{date.toLocaleDateString()}</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18% more than last month</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderCategoryHeaderSection() {
        return (
            <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Title */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>Charts</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{categories.length} Total</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                        onPress={() => setViewMode("chart")}
                    >
                        <Image
                            source={icons.chart}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "list" ? COLORS.secondary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            marginLeft: SIZES.base
                        }}
                        onPress={() => setViewMode("list")}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderBarChart() {
        let chartData = processCategoryDataToDisplay();
        let colorScales = chartData.map((item) => item.color);
        let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), -1); 
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <VictoryBar
                    style={{
                        labels: {
                            fontSize: 15,
                            fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31"
                        },
                        data:{
                            fill: ({ datum }) => colorScales[datum.x] // Sử dụng màu sắc từ chartData
                        }
                        
                    }}
                    data={chartData}
                    labels={({ datum }) => datum.x}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onPressIn: () => { 
                                return [{
                                    target: "data",
                                    mutation: (props) => {
                                        let categoryName = chartData[props.index].name;
                                        setSelectCategoryByName(categoryName);
                                    }
                                }];
                            }
                        }
                    }]}
                />
            </View>
        );
    }
        


    function processCategoryDataToDisplay() {
        // Filter expenses with "Confirmed" status
        let chartData = categories.map((item) => {
            let confirmExpenses = item.expenses.filter(a => a.status == "C")
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)
            return {
                name: item.name,
                y: total,
                expenseCount: confirmExpenses.length,
                color: item.color,
                id: item.id
            }
        })

        // filter out categories with no data/expenses
        let filterChartData = chartData.filter(a => a.y > 0)

        // Calculate the total expenses
        let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

        // Calculate percentage and repopulate chart data
        let finalChartData = filterChartData.map((item) => {
            let percentage = (item.y / totalExpense * 100).toFixed(0)
            return {
                label: `${percentage}%`,
                y: Number(item.y),
                expenseCount: item.expenseCount,
                color: item.color,
                name: item.name,
                id: item.id
            }
        })

        return finalChartData
    }

    function setSelectCategoryByName(name) {
        let category = categories.filter(a => a.name == name)
        setSelectedCategory(category[0])
    }

    function renderChart() {

        let chartData = processCategoryDataToDisplay()
        let colorScales = chartData.map((item) => item.color)
        let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), -1)
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Svg width={SIZES.width} height={SIZES.width} style={{ width: "100%", height: "auto" }}>

                        <VictoryPie
                            standalone={false} // Android workaround
                            data={chartData}
                            labels={(datum) => `${datum.y}`}
                            radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                            innerRadius={60}
                            labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                            style={{
                                labels: { fill: "white", ...FONTS.body3 },
                                parent: {
                                    ...styles.shadow
                                },
                            }}
                            width={SIZES.width}
                            height={SIZES.width}
                            colorScale={colorScales}
                            events={[{
                                target: "data",
                                eventHandlers: {
                                    onPress: () => {
                                        return [{
                                            target: "labels",
                                            mutation: (props) => {
                                                let categoryName = chartData[props.index].name
                                                setSelectCategoryByName(categoryName)
                                            }
                                        }]
                                    }
                                }
                            }]}

                        />
                    </Svg>
                    <View style={{ position: 'absolute',  }}>
                        <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                        <Text style={{ ...FONTS.body3, textAlign: 'center'}}>Tree group</Text>
                    </View>
                </View>
            )
        }
    function renderExpenseSummary() {
        let data = processCategoryDataToDisplay()

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    height: 40,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : COLORS.white
                }}
                onPress={() => {
                    let categoryName = item.name
                    setSelectCategoryByName(categoryName)
                }}
            >
                {/* Name/Category */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : item.color,
                            borderRadius: 5
                        }}
                    />

                    <Text style={{ marginLeft: SIZES.base, color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.name}</Text>
                </View>

                {/* Expenses */}
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.label}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ padding: SIZES.padding }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                />
            </View>

        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/* Nav bar section */}
            {renderNavBar()}
            {/* Header section */}
            {renderHeader()}
            {/* Category Header Section */}
            {renderCategoryHeaderSection()}

            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {
                    viewMode == "list" &&
                    <View>
                        {renderBarChart()}
                        {renderExpenseSummary()}
                    </View>
                }
                {
                    viewMode == "chart" &&
                    <View>
                        {renderChart()}
                        {renderExpenseSummary()}
                    </View>
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    sheetHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
        paddingHorizontal: 24,
        paddingVertical: 14,
    },
    sheetHeaderTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    sheetBody: {
        paddingHorizontal: 24,
        paddingVertical: 14,
    },
    done: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ff6a55',
    },
    radio: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 0,
        height: 44,
    },
    radioCircle: {
        width: CIRCLE_SIZE + CIRCLE_RING_SIZE * 4,
        height: CIRCLE_SIZE + CIRCLE_RING_SIZE * 4,
        borderRadius: 9999,
        backgroundColor: 'transparent',
        borderWidth: CIRCLE_RING_SIZE,
        borderColor: '#d4d4d4',
    },
    radioCircleInset: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: 9999,
        position: 'absolute',
        top: CIRCLE_RING_SIZE,
        left: CIRCLE_RING_SIZE,
    },
    container: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    sheet: {
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        height:'auto'
    },
    placeholder: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        height: 400,
        marginTop: 0,
        padding: 24,
    },
    placeholderInset: {
        borderWidth: 4,
        borderColor: '#e5e7eb',
        borderStyle: 'dashed',
        borderRadius: 9,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    radioLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000',
        marginLeft: 12,
        marginRight: 'auto',
    },
    sheetHeader1: {
        paddingVertical: 24,
      },
      sheetTitle: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#bcbdd9',
      },
      sheetText: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        color: '#000000',
        marginTop: 12,
      },
      sheetBody: {
        padding: 24,
      },
      sheetBodyOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 48,
        marginHorizontal: -16,
      },
      sheetBodyOption: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 12,
        marginHorizontal: 16,
        paddingVertical: 28,
      },
      sheetBodyOptionText: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 12,
        color: '#bcbdd9',
      },
      delimiter: {
        height: '100%',
        width: 1,
        backgroundColor: '#ebebf5',
      },
      btn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        padding: 14,
        borderWidth: 1,
        borderColor: '#000000',
        marginBottom: 12,
        backgroundColor: '#000000',
      },
      btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
      },
      container: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },
      sheet: {
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      },
      placeholder: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        height: 400,
        marginTop: 0,
        padding: 24,
      },
      placeholderInset: {
        borderWidth: 4,
        borderColor: '#e5e7eb',
        borderStyle: 'dashed',
        borderRadius: 9,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },
})

export default Analysis;
