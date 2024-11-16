import React from 'react';
import { TouchableOpacity, View, StyleSheet, Animated } from 'react-native';

const NextPageButton = ({ handleNextPage }) => {

  
  // Animating the scale on press (similar to hover effect)
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
            onPress={handleNextPage}
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
                  index === 0 && { marginLeft: -8 }, // Slight spacing for overlapping
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
    position: 'relative',
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 80, // Increased the size of the arrow container
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 5, // Increased the width of the arrow body
    borderTopWidth: 5, // Increased the height of the arrow body
    borderColor: 'white',
    transform: [{ rotate: '45deg' }],
  },
});

export default NextPageButton;
