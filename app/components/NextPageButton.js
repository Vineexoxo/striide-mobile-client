import React from 'react';
import { TouchableOpacity, View, StyleSheet, Animated } from 'react-native';

const NextPageButton = ({ onPress }) => {
  const scaleAnim = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrowContainer}>
        {[0.6, 0.8, 1].map((opacity, index) => (
          <TouchableOpacity
            key={index}
            onPress={onPress} // Assign onPress to trigger navigation
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.iconWrapper}
          >
            <Animated.View
              style={[
                styles.iconContainer,
                {
                  transform: [{ scale: scaleAnim }],
                },
              ]}
            >
              <View
                style={[
                  styles.arrowIcon,
                  { opacity: opacity },
                  index === 0 && { marginLeft: -8 },
                  index === 1 && { marginLeft: -16 },
                ]}
              >
                <View style={styles.arrow} />
              </View>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
    paddingRight: 16,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Ensure arrows are aligned
    justifyContent: 'space-between', // Space arrows equally
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8, // Add equal spacing around each arrow
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 40,
    height: 40,
    borderLeftWidth: 5,
    borderTopWidth: 5,
    borderColor: 'white',
    transform: [{ rotate: '135deg' }],
  },
});
export default NextPageButton;
