import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <View style={styles.viewBack}>
        <Icon name='arrow-left' size={20}/>
        </View>
      </View>

      <View style={{flex:7}}>
        <View style={styles.title}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.textTitle}>Notifications </Text>
            <Text style={styles.textTitle}>(12)</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.textAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.item}>
            <View style={styles.icon}></View>
            <View style={{flex:1}}>
              <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:5}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'blue'}}>Profile Created</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>07 :30 AM</Text>
              </View >
              <Text numberOfLines={1} style={{fontSize:14,color:'grey',marginVertical:5,marginRight:80}}>Lorem ipsum is simply dummy text Lorem ipsum is simply dummy text </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.icon}></View>
            <View style={{flex:1}}>
              <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:5}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'blue'}}>Exam Results</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>09 :45 AM</Text>
              </View >
              <Text numberOfLines={1} style={{fontSize:14,color:'grey',marginVertical:5,marginRight:80}}>It is a long established</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.icon}></View>
            <View style={{flex:1}}>
              <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:5}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'blue'}}>Annual Function 2020</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>Yesterday</Text>
              </View >
              <Text numberOfLines={1} style={{fontSize:14,color:'grey',marginVertical:5,marginRight:80}}>Contrary to popular belief, Lorem ipsum is simply dummy text Lorem ipsum is simply dummy text </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.icon}></View>
            <View style={{flex:1}}>
              <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:5}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'blue'}}>Fees Updates</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>Nov 25, 2023</Text>
              </View >
              <Text numberOfLines={1} style={{fontSize:14,color:'grey',marginVertical:5,marginRight:80}}>Lorem ipsum is simply dummy text Lorem ipsum is simply dummy text </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.icon}></View>
            <View style={{flex:1}}>
              <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:5}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'blue'}}>School Reopen</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>Nov 21, 2023</Text>
              </View >
              <Text numberOfLines={1} style={{fontSize:14,color:'grey',marginVertical:5,marginRight:80}}>Lorem ipsum is simply dummy text Lorem ipsum is simply dummy text </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.icon}></View>
            <View style={{flex:1}}>
              <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:5}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'blue'}}>Profile Created</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>Nov 21, 2023</Text>
              </View >
              <Text numberOfLines={1} style={{fontSize:14,color:'grey',marginVertical:5,marginRight:80}}>Lorem ipsum is simply dummy text Lorem ipsum is simply dummy text </Text>
            </View>
          </View>
          
          
        </ScrollView>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBack: {
    width: 40,  
    height: 40,   
    borderRadius: 20,            
    backgroundColor: 'white',                                    
    position: 'absolute',                                          
    top: 20,                                                    
    left: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  header: {
    flex:3,
    backgroundColor:'#FFF6E0'
  },
  title: {
    justifyContent:'space-between',
    flexDirection:'row',
    height:60,
    alignItems:'center',
    backgroundColor:'white',
    paddingHorizontal:20
  },
  textTitle: {
    fontSize:20,
    fontWeight:'bold',
  },
  textAll: {
    fontSize:16,
    fontWeight:'bold',
    color:'grey',
  },
  icon: {
    height:60,
    width:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    backgroundColor:'#D8D9DA',
    marginRight:20
  },
 
  item: {
    backgroundColor:'#FFF6E0',
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:10,
    paddingEnd:10,
    marginHorizontal:20,
    marginBottom:20,
    borderRadius:10,
  }
});
