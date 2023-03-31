import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import styles from './Loading.style';
import {View} from 'react-native';
function Loading() {
  return (
    <View style={styles.box}>
      <AnimatedLottieView
        style={styles.animation}
        source={require('../../assets/loading.json')}
        autoPlay></AnimatedLottieView>
    </View>
  );
}
export default Loading;
