import React, { Component } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { IMAGE } from './constants/image';
import SplashScreen from 'react-native-splash-screen'
import { Button } from 'react-native-elements';


export class SwiperScreen extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    let { navigation } = this.props;
    return (
      <Swiper loop={false}
        activeDot={
          <View
            style={{
              backgroundColor: '#000',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3
            }}
          />
        }
      >
        <View testID="Hello" style={styles.slide1}>
          <Text style={styles.text1}>Hey!</Text>
          <Text style={styles.text2}>
            We're excited to have you here. Thank you for joining us.
          </Text>
        </View>

        <View testID="Beautiful" style={styles.slide1}>
          <Text style={styles.text1}>Trial</Text>
          <Text style={styles.text2}>
            You have 30 days free with us.You can switch to Premium level at any time.
          </Text>
        </View>

        <View testID="Simple" style={styles.slide1}>
          <Image style={{ width: 90, height: 90, marginLeft: 5, marginBottom: 20 }}
            resizeMode="contain"
            source={IMAGE.ICON_GO2}
          />
          <Text style={styles.text2}>
            Get Started to check out our latest news around the world
          </Text>
          <Button title="Get Started" buttonStyle={styles.btn}
            onPress={() => navigation.navigate("HomeApp")}
          />
        </View>

      </Swiper>
    );
  }
}


const styles = StyleSheet.create({
  btn: {
    width: 280, borderRadius: 20, backgroundColor: '#44464a', marginTop: 70, marginLeft: 16, marginRight: 16
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    marginRight: 40
  },
  text1: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: 16
  },
  text2: {
    fontSize: 27,
    color: '#2f3631',
  }
})