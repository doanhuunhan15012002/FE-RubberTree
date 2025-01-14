import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { images } from '../constants';
import Lottie from 'lottie-react-native';
const SECTIONS = [
  {
    header: 'Preferences',
    icon: 'settings',
    items: [
      { label: 'Language', value: 'English', type: 'input' },
      { label: 'Dark Mode', value: false, type: 'boolean' },
      { label: 'Use Wi-Fi', value: true, type: 'boolean' },
      { label: 'Location', value: 'Tp.HCM, VietNam', type: 'input' },
      { label: 'Show collaborators', value: true, type: 'boolean' },
      { label: 'Accessibility mode', value: false, type: 'boolean' },
    ],
  },
  {
    header: 'Information',
    icon: 'info',
    items: [
      { label: 'Fullname', type: 'input', value: 'Đoàn Hữu Nhân' },
      { label: 'Email', type: 'input', value: 'thaygiaonhann@gmail.com' },
      { label: 'Date of birth', type: 'input', value: '15/01/2002' },
      { label: 'Role', type: 'input', value: 'Forest manager' },

    ],
  },
  {
    header: 'Account',
    icon: 'user',
    items: [
      { label: 'Username', type: 'input', value: 'thaynhan' },
      { label: 'Password', type: 'password', value: '123456' },
      { label: 'Save password', type: 'boolean', value: true },
      { label: 'Use fingerprint', type: 'boolean', value: false },
      { label: 'Sign out', type: 'link' },
    ],
  },
];

export default function Settings(props) {
  const [value, setValue] = React.useState(0);
  //navigation
  const { navigation, route } = props
  //functions of navigate to/back
  const { navigate, goBack } = navigation
  const { tabs, items } = React.useMemo(() => {
    return {
      tabs: SECTIONS.map(({ header, icon }) => ({
        name: header,
        icon,
      })),
      items: SECTIONS[value].items,
    };
  }, [value]);

  return (
    <SafeAreaView style={{ backgroundColor: '#f8f8f8', flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>

          <Text style={styles.subtitle}>
            Custom your app
          </Text>
          <Lottie
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: 10,
              marginLeft: 120
            }}
            source={require('../assets/animations/help.json')} autoPlay loop />
        </View>

        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <Image
              alt=""
              source={images.doanhuunhan}
              style={styles.profileAvatar}
            />

            <View style={styles.profileBody}>
              <Text style={styles.profileName}>Đoàn Hữu Nhân</Text>

              <Text style={styles.profileHandle}>@thaynhan</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile')
            }}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>
              <FeatherIcon color="#fff" name="edit-3" size={16} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.tabs}>
            {tabs.map(({ name, icon }, index) => {
              const isActive = index === value;

              return (
                <View
                  key={name}
                  style={[
                    styles.tabWrapper,
                    isActive && { borderBottomColor: '#6366f1' },
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      setValue(index);
                    }}>
                    <View style={styles.tab}>
                      <FeatherIcon
                        color={isActive ? '#6366f1' : '#6b7280'}
                        name={icon}
                        size={16}
                      />

                      <Text
                        style={[
                          styles.tabText,
                          isActive && { color: '#6366f1' },
                        ]}>
                        {name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          {items.map(({ label, type, value }, index) => {
            return (
              <View
                key={label}
                style={[
                  styles.rowWrapper,
                  index === 0 && { borderTopWidth: 0 },
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    if (label == "Sign out") {
                        navigation.navigate('ConfirmLogout')
                    }
                  }}>
                  <View style={styles.row}>
                    <Text style={styles.rowLabel}>{label}</Text>

                    <View style={styles.rowSpacer} />

                    {type === 'input' && (
                      <Text style={styles.rowValue}>{value}</Text>
                    )}

                    {type === 'boolean' && (
                      <Switch trackColor={{ true: '#007bff' }} value={value} />
                    )}

                    {(type === 'input' || type === 'link') && (
                      <FeatherIcon
                        color="#7f7f7f"
                        name="chevron-right"
                        size={20}
                      />
                    )}
                    {(type === 'password') && (
                      <FeatherIcon
                        color="#7f7f7f"
                        name="eye"
                        size={20}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  profile: {
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#3d3d3d',
  },
  profileHandle: {
    marginTop: 4,
    fontSize: 15,
    color: '#989898',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  tabs: {
    padding: 16,
    flexDirection: 'row',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderColor: '#e5e7eb',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    paddingLeft: 24,
    paddingRight: 24,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#2c2c2c',
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#7f7f7f',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  container: {
    paddingVertical: 24,
  },
  content: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
});