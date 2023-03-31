import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import styles from './Error.style';
import {View, Image, Text, Button} from 'react-native';
function Error(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.img} source={require('../../assets/order.png')} />
        <Text style={styles.errorText}>Sayfa Bulunamadı!</Text>
        <Button
          title="Sayfayı Yenile"
          color={'orange'}
          onPress={props.onClick}
        />
      </View>
    </View>
  );
}
export default Error;
