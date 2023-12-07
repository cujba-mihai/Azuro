import React, { useRef, useEffect } from "react";
import { Animated, View } from "react-native";
import { AzuroLogo } from "assets/icons";

export const SplashScreen = () => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [pulseAnim]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          width: 200,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ scale: pulseAnim }],
        }}
      >
        <AzuroLogo />
      </Animated.View>
    </View>
  );
};
