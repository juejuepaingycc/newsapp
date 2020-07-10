import React, { Component } from 'react';
import { Text, Alert, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { IMAGE } from './constants/image';

export class CustomDrawerContent extends Component {

  logoutAlert() {
    return (
      Alert.alert(
        "Logout",
        "Are you sure you want to logout?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => this.props.navigation.navigate("Swiper2") }
        ],
      )
    )
  }

  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <View style={styles.topView}>
          <Image source={IMAGE.ICON_GIRL}
            style={styles.profile} />
          <Text style={styles.name}>React Nativer</Text>
          <View style={styles.line}></View>
        </View>
        <ScrollView style={{ marginLeft: 5 }}>

          <TouchableOpacity style={styles.row} onPress={() => navigation.navigate("MenuTab")}>
            <Image source={IMAGE.ICON_HOME}
              style={styles.img} />
            <Text style={styles.caption}>Home</Text>
          </TouchableOpacity>

         <TouchableOpacity style={styles.row} onPress={() => navigation.navigate("Signin")}>
            <Image source={IMAGE.ICON_LOGIN} style={styles.img} />
            <Text style={styles.caption}>Signin</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.row} onPress={() => navigation.navigate("Signup")}>
            <Image source={IMAGE.ICON_REGISTER} style={styles.img} />
            <Text style={styles.caption}>Signup</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row} onPress={() => { this.logoutAlert() }}>
            <Image source={IMAGE.ICON_LOGOUT} style={styles.img} />
            <Text style={styles.caption}>Logout</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    marginTop: 20, flexDirection: 'row',
    paddingLeft: 26,
    paddingBottom: 10
  },
  img: {
    width: 25, height: 25
  },
  caption: {
    fontSize: 16,
    marginLeft: 15
  },
  topView: {
    height: 200, justifyContent: 'center', marginLeft: 20
  },
  profile: {
    width: 130, height: 120, borderRadius: 60, paddingTop: 20
  },
  name: {
    fontSize: 16, paddingTop: 9, paddingLeft: 16
  },
  line: {
    width: 140, borderWidth: 1, borderColor: '#c1c1c7',
            marginTop: 30
  }
})