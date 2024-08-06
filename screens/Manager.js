import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  Animated,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTION_TOP_OFFSET = 200;
const SECTION_BORDER_RADIUS = 40;

const lessons = [
  {
    name: 'Video 101',
    duration: 22,
  },
  {
    name: 'Basic Video Editing',
    duration: 12,
  },
  {
    name: 'Basic Shooting',
    duration: 37,
  },
  {
    name: 'The basics of livestream',
    duration: 12,
  },
  {
    name: 'Classic Lighting Techniques',
    duration: 23,
  },
  {
    name: 'Color Correction',
    duration: 33,
  },
  {
    name: 'Audio Techniques for Going Pro',
    duration: 29,
  },
  {
    name: 'The basics of visual storytelling',
    duration: 44,
  },
];

export default function Manager() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const animatedBackgroundScale = scrollY.interpolate({
    inputRange: [
      -SECTION_TOP_OFFSET - 100,
      -SECTION_TOP_OFFSET,
      0,
      SECTION_TOP_OFFSET,
      SECTION_TOP_OFFSET + 50,
      SECTION_TOP_OFFSET + 100,
    ],
    outputRange: [1.5, 1.25, 1.1, 1, 0, 0],
  });

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Animated.View
        style={{
          transform: [
            {
              scaleX: animatedBackgroundScale,
            },
            {
              scaleY: animatedBackgroundScale,
            },
          ],
        }}>
        <Image
          style={styles.backdrop}
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
          }}
        />
      </Animated.View>
      <ScrollView
        style={styles.container}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={1}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Videography</Text>

            <View style={styles.headerBadge}>
              <FeatherIcon name="award" color="#fff" size={24} />
            </View>
          </View>

          <Text style={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            voluptatum dolorem, magnam molestias voluptates excepturi soluta
            nihil eum, alias adipisci mollitia sint?
          </Text>

          <View style={styles.stats}>
            <View style={styles.statsItem}>
              <FeatherIcon name="clock" color="#185aca" size={16} />
              <Text style={styles.statsItemText}>3 hours 32 minutes</Text>
            </View>
            <View style={styles.statsItem}>
              <FeatherIcon name="grid" color="#185aca" size={16} />
              <Text style={styles.statsItemText}>8 lessons</Text>
            </View>
          </View>
        </View>
        <View style={styles.lessonsOverlay}>
          <View style={styles.lessons}>
            <Text style={styles.lessonsTitle}>Lessons</Text>

            {lessons.map(({ name, duration }, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardIcon}>0{index + 1}</Text>

                <View>
                  <Text style={styles.cardTitle}>{name}</Text>

                  <Text style={styles.cardDuration}>{duration} minutes</Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={{
                    marginLeft: 'auto',
                  }}>
                  <View style={styles.cardAction}>
                    <FeatherIcon color="#fff" name="download" size={20} />
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    zIndex: 2,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 400,
  },
  content: {
    flex: 1,
    marginTop: SECTION_TOP_OFFSET,
    backgroundColor: '#d3e0fe',
    borderTopLeftRadius: SECTION_BORDER_RADIUS,
    borderTopRightRadius: SECTION_BORDER_RADIUS,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2c2c2c',
  },
  headerBadge: {
    backgroundColor: '#0066ff',
    width: 46,
    height: 46,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 16,
    fontSize: 15,
    fontWeight: '500',
    color: '#3c3c3c',
    lineHeight: 24,
  },
  stats: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  statsItemText: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: '600',
    color: '#185aca',
  },
  lessonsOverlay: {
    backgroundColor: '#d3e0fe',
  },
  lessons: {
    backgroundColor: 'white',
    borderTopLeftRadius: SECTION_BORDER_RADIUS,
    borderTopRightRadius: SECTION_BORDER_RADIUS,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  lessonsTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#2c2c2c',
    marginBottom: 12,
  },
  card: {
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  cardIcon: {
    fontSize: 17,
    fontWeight: '700',
    color: '#185aca',
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2c2c2c',
    marginBottom: 4,
  },
  cardDuration: {
    fontSize: 13,
    fontWeight: '500',
    color: '#94b1f0',
  },
  cardAction: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a4c2f5',
  },
});