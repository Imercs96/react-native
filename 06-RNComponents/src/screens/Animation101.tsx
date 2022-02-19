import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

export const Animation101 = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          {
            dx: pan.x, // x,y are Animated.Value
            dy: pan.y,
          }
        ], { useNativeDriver: false }),
        onPanResponderRelease: () => {
          Animated.spring(
            pan, // Auto-multiplexed
            { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
          ).start();
        },
      });

    return(
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[ pan.getLayout(), styles.purpleBox, styles.box ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        backgroundColor: "#61dafb",
        width: 80,
        height: 80,
        borderRadius: 4,
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});
