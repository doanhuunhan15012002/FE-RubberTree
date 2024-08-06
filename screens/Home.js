
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Dimensions,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { icons, COLORS, FONTS, SIZES, images } from '../constants';
import Lottie from 'lottie-react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const OptionItem = ({ bgColor, icon, label, onPress }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <View style={[styles.shadow, { width: 60, height: 60 }]}>
                <LinearGradient
                    style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'red' }]}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30,
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{label}</Text>
        </TouchableOpacity>
    )
}

const Home = (props) => {
    //navigation
    const { navigation, route } = props
    //functions of navigate to/back
    const { navigate, goBack } = navigation
    // Dummy Data
    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "Rubber robot",
            img: images.Rubber_robot,
            rate:4.5,
            short_descriptstion:'Thiết bị tự động thu hoạch mủ từ cây cao su hiệu quả.',
            descripstion:'Robot cây cao su là một sáng kiến độc đáo kết hợp giữa công nghệ và thiên nhiên. Được thiết kế như một cây cao su thật, robot này có khả năng tự động hấp thụ năng lượng mặt trời và lưu trữ năng lượng trong ắc quy tích hợp bên trong. Nhờ vào hệ thống cảm biến thông minh, nó có khả năng phát hiện môi trường xung quanh và phản ứng phù hợp. Robot cây cao su có nhiều ứng dụng hữu ích, như làm xanh không gian đô thị, sản xuất năng lượng tái tạo và là một biện pháp hữu hiệu để giảm khí thải carbon.',
            status:'Available',
            price: '1$/day',
            like: 4530,
            dislike: 100,
            
        },
        {
            id: 1,
            name: "Drone",
            img: images.Drone,
            rate:3,
            short_descriptstion:'Thiết bị bay không người lái thu thập dữ liệu, giám sát và tối ưu hóa nông trại.',
            descripstion:'Drone nông nghiệp là một thiết bị bay không người lái hiện đại đem đến cách tiếp cận hiệu quả cho nông nghiệp. Được trang bị các cảm biến chất lượng cao, drone có thể thu thập dữ liệu chi tiết về cây trồng, đất đai và thực trạng môi trường. Nó giúp nông dân theo dõi sức khỏe cây trồng, tối ưu hóa việc sử dụng phân bón và thuốc trừ sâu, từ đó nâng cao năng suất và giảm tác động môi trường. Drone nông nghiệp đánh dấu bước tiến quan trọng trong hiện đại hóa và bền vững cho ngành nông nghiệp.',
            status:'Not available',
            price: '2$/day',
            like: 1280,
            dislike: 205,
        },
        {
            id: 2,
            name: "Delivery robot",
            img: images.Delivery_robot,
            rate:5,
            short_descriptstion:'Robot tự động giao hàng, di chuyển an toàn và nhanh chóng để vận chuyển hàng hóa đến địa điểm cụ thể.',
            descripstion:'Delivery robot là một loại robot tự động có nhiệm vụ giao hàng từ điểm A đến điểm B một cách tự động và hiệu quả. Được trang bị các cảm biến và công nghệ điều khiển thông minh, robot có khả năng di chuyển an toàn trên đường phố và ngõ hẻm. Nó có thể vận chuyển đồ ăn, hàng hóa và thậm chí đơn vị y tế đến đích một cách nhanh chóng. Delivery robot giúp tối ưu hóa quy trình giao hàng, giảm thiểu giao thông và đóng góp vào việc giảm ô nhiễm môi trường.',
            status:'Available',
            price: '5$/day',
            like: 200000,
            dislike: 100,
        },
        {
            id: 3,
            name: "CNC robot",
            img: images.CNC_robot,
            rate:1.9,
            short_descriptstion:'Hệ thống tự động hoá gia công chính xác và nhanh chóng trong công nghiệp.',
            descripstion:'CNC robot, hay còn gọi là robot điều khiển số, là một hệ thống tự động hoá trong công nghiệp và gia công chế tạo. Được trang bị các trục và cơ chế chuyển động chính xác, CNC robot có thể thực hiện các quy trình chế tạo phức tạp theo các lệnh điều khiển số chính xác. Nó sử dụng các phần mềm CAD/CAM để tạo và kiểm tra các bản vẽ, giúp gia công chính xác, nhanh chóng và tiết kiệm lao động. CNC robot được ứng dụng rộng rãi trong ngành công nghiệp, đóng góp vào tăng năng suất và chất lượng sản phẩm.',
            status:'Not available',
            price: '7$/day',
            like: 10,
            dislike: 300,
        },
    ]);


    // Data banner
    const images_banner = [
        'https://img.freepik.com/premium-photo/3d-illustration-smart-robotic-futuristic-farmers-working-field-agriculture-technology-farm-automation_564714-292.jpg?w=2000',
        'https://s3-us-west-2.amazonaws.com/grainnet-com/uploads/grainnet/AdobeStock_228689919-drone-robot-automation.jpeg',
        'https://agri.vn/wp-content/uploads/2020/12/SWEEPER-robot.jpg',
        'https://iv.vnecdn.net/vnexpress/images/web/2021/09/28/nhung-robot-cach-mang-hoa-nong-nghiep-1632821091.jpg'
    ]
    const [imageActive, setImageActive] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          const nextImageIndex = (imageActive + 1) % images_banner.length;
          setImageActive(nextImageIndex);
        }, 3000);
    
        return () => clearInterval(intervalId);
      }, [imageActive]);
    const showAlert = () =>
  Alert.alert(
    'Hello User',
    'Welcome to Wisdom robotics',
  );
    // Render
    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imageActive) {
                setImageActive(slide);
            }
        }
    }
    function renderDestinations(item, index) {
        var destinationStyle = {};
        if (index == 0) {
            destinationStyle = { marginLeft: SIZES.padding, }
        }
        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                onPress={() => {
                    navigation.navigate('DestinationDetail', { destinations: item })
                }}
                destinations={item} key={item.id}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.28,
                        height: '82%',
                        borderRadius: 15
                    }}
                />
                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4, justifyContent: 'center', textAlign: 'center' }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ height: '7%', flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        marginHorizontal:10,
                        justifyContent:'space-between',
                        alignItems:'center',
                        alignSelf:'center'
                    }}
                    onPress={showAlert}
                >
                <Lottie 
                style={{height:50,width:50}}
                source={require('../assets/animations/boost.json')} autoPlay loop />
                </TouchableOpacity>
                <Text
                    style={{
                        marginHorizontal:10,
                        justifyContent:'center',
                        alignItems:'center',
                        alignSelf:'center',
                        fontWeight:'bold',
                        fontSize:20,
                        textAlign:'center'
                    }}
                >Agriculture Robotics</Text>

            </View>
            {/* Banner */}
            <View style={styles.wrap}>
        <ScrollView
          pagingEnabled
          horizontal
          style={styles.wrap}
          onScroll={(event) => {
            const slide = Math.ceil(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width
            );
            if (slide !== imageActive) {
              setImageActive(slide);
            }
          }}
        >
          {images_banner.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.wrap}
              source={{ uri: e }}
            ></Image>
          ))}
        </ScrollView>
        <View style={styles.wrapdot}>
          {images_banner.map((e, index) => (
            <Text
              key={e}
              style={imageActive === index ? styles.dotActive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
            {/* Options */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.airplane}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Flight"
                        onPress={() => { console.log("Flight") }}
                    />
                    <OptionItem
                        icon={icons.train}
                        bgColor={['#fddf90', '#fcda13']}
                        label="Train"
                        onPress={() => { console.log("Train") }}
                    />
                    <OptionItem
                        icon={icons.bus}
                        bgColor={['#e973ad', '#da5df2']}
                        label="Bus"
                        onPress={() => { console.log("Bus") }}
                    />
                    <OptionItem
                        icon={icons.taxi}
                        bgColor={['#fcaba8', '#fe6bba']}
                        label="Taxi"
                        onPress={() => { console.log("Taxi") }}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.bed}
                        bgColor={['#ffc465', '#ff9c5f']}
                        label="Hotel"
                        onPress={() => { console.log("Hotel") }}
                    />
                    <OptionItem
                        icon={icons.eat}
                        bgColor={['#7cf1fb', '#4ebefd']}
                        label="Eats"
                        onPress={() => { console.log("Eats") }}
                    />
                    <OptionItem
                        icon={icons.compass}
                        bgColor={['#7be993', '#46caaf']}
                        label="Adventure"
                        onPress={() => { console.log("Adventure") }}
                    />
                    <OptionItem
                        icon={icons.event}
                        bgColor={['#fca397', '#fc7b6c']}
                        label="Event"
                        onPress={() => { console.log("Event") }}
                    />
                </View>
            </View>

            {/* Destination */}
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: SIZES.base, marginBottom: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Wisdom Center</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={destinations}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderDestinations(item, index)}
                />
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
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25,
    },
    wrapdot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'white',

    },
    dot: {
        margin: 3,
        color: 'black',
    }
});

export default Home;
