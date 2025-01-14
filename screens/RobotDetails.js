import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IMAGES = [
  'https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVzbGElMjBtb2RlbCUyMHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1639358336404-b847ac2a3272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  'https://images.unsplash.com/photo-1652509525608-6b44097ea5a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHRlc2xhJTIwbW9kZWwlMjBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
];

export default function RobotDetails() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <FeatherIcon name="arrow-left" size={24} />
              </TouchableOpacity>
            </View>

            <Text style={styles.headerTitle}>Tesla Model S</Text>

            <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <FeatherIcon name="more-vertical" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.photos}>
              <View style={styles.photosTop}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.photosTopItem}>
                  <FeatherIcon color="#000" name="star" size={18} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.photosTopItem}>
                  <FeatherIcon color="#000" name="share" size={16} />
                </TouchableOpacity>
              </View>

              <Swiper
                renderPagination={(index, total) => (
                  <View style={styles.photosPagination}>
                    <Text style={styles.photosPaginationText}>
                      {index + 1} of {total}
                    </Text>
                  </View>
                )}>
                {IMAGES.map((src, index) => (
                  <Image
                    alt=""
                    key={index}
                    source={{ uri: src }}
                    style={styles.photosImg}
                  />
                ))}
              </Swiper>
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.picker}>
              <FeatherIcon color="#000" name="calendar" size={18} />

              <View style={styles.pickerDates}>
                <Text style={[styles.pickerDatesText, { marginBottom: 2 }]}>
                  Thu, Feb 23 at 10:00 AM
                </Text>

                <Text style={styles.pickerDatesText}>
                  Sun, Feb 26 at 10:00 AM
                </Text>
              </View>

              <View style={styles.pickerAction}>
                <Text style={styles.pickerActionText}>Change</Text>

                <FeatherIcon color="#4C6CFD" name="chevron-right" size={18} />
              </View>
            </TouchableOpacity>
            <View style={styles.info}>
              <Text style={styles.infoTitle}>Tesla Model S 2022</Text>

              <View style={styles.infoRating}>
                <Text style={styles.infoRatingLabel}>5.0</Text>

                <FeatherIcon color="#4c6cfd" name="star" size={15} />

                <Text style={styles.infoRatingText}>(7 ratings)</Text>
              </View>

              <Text style={styles.infoDescription}>
                Model S Dual Motor All-Wheel Drive unlocks more range than any
                other vehicle in our current lineup, with insane power and
                maximum control.
              </Text>
            </View>
            <View style={styles.stats}>
              {[
                [
                  { label: 'Model', value: 'P100D' },
                  { label: 'Mileage', value: '22k mi' },
                ],
                [
                  { label: 'Range', value: '396 mi' },
                  { label: 'Top Speed', value: '200 mph' },
                ],
                [
                  { label: 'Battery', value: '100kW/h' },
                  { label: 'Peak Power', value: '1,020 hp' },
                ],
                [
                  { label: '0-60 mph', value: '2.5 seconds' },
                  { label: 'Cargo volume', value: '25 ft³' },
                ],
              ].map((row, rowIndex) => (
                <View
                  key={rowIndex}
                  style={[
                    styles.statsRow,
                    rowIndex === 0 && { borderTopWidth: 0 },
                  ]}>
                  {row.map(({ label, value }, index) => (
                    <View
                      key={index}
                      style={[
                        styles.statsItem,
                        index === 0 && { borderLeftWidth: 0 },
                      ]}>
                      <Text style={styles.statsItemText}>{label}</Text>

                      <Text style={styles.statsItemValue}>{value}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <View style={styles.overlay}>
        <View style={styles.overlayContent}>
          <View style={styles.overlayContentTop}>
            <Text style={styles.overlayContentPriceBefore}>$72</Text>

            <Text style={styles.overlayContentPrice}>$56/day</Text>
          </View>

          <Text style={styles.overlayContentTotal}>$134 est. total</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Continue</Text>

            <MaterialCommunityIcons
              color="#fff"
              name="arrow-right-circle"
              size={18}
              style={{ marginLeft: 12 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  photos: {
    marginTop: 12,
    position: 'relative',
    height: 240,
    overflow: 'hidden',
    borderRadius: 12,
  },
  photosTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  photosTopItem: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  photosPagination: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#000',
    borderRadius: 12,
  },
  photosPaginationText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fbfbfb',
  },
  photosImg: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: '100%',
    height: 240,
  },
  picker: {
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },
  pickerDates: {
    marginLeft: 12,
  },
  pickerDatesText: {
    fontSize: 13,
    fontWeight: '500',
  },
  pickerAction: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerActionText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    color: '#4c6cfd',
  },
  info: {
    marginTop: 12,
    backgroundColor: '#f5f5f5',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  infoTitle: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '600',
    letterSpacing: 0.38,
    color: '#000000',
    marginBottom: 6,
  },
  infoRating: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoRatingLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 2,
  },
  infoRatingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8e8e93',
    marginLeft: 2,
  },
  infoDescription: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.078,
    color: '#8e8e93',
  },
  stats: {
    marginTop: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderColor: '#fff',
  },
  statsItem: {
    flexGrow: 2,
    flexShrink: 1,
    flexBasis: 0,
    paddingVertical: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderColor: '#fff',
  },
  statsItemText: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: '#8e8e93',
    marginBottom: 4,
  },
  statsItemValue: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#000',
  },
  overlayContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  overlayContentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 2,
  },
  overlayContentPriceBefore: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    color: '#8e8e93',
    marginRight: 4,
    textDecorationLine: 'line-through',
    textDecorationColor: '#8e8e93',
    textDecorationStyle: 'solid',
  },
  overlayContentPrice: {
    fontSize: 21,
    lineHeight: 26,
    fontWeight: '700',
    color: '#000',
  },
  overlayContentTotal: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#4c6cfd',
    letterSpacing: -0.07,
    textDecorationLine: 'underline',
    textDecorationColor: '#4c6cfd',
    textDecorationStyle: 'solid',
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});