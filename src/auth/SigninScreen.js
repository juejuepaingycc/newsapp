import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { CustomHeader } from '../index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input, Button } from 'react-native-elements';

export class SigninScreen extends Component {

  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader isHome={false} navigation={navigation} />
        <View style={styles.body}>
          <Text style={styles.signin}>
            Sign In!
          </Text>
          <View style={styles.lower}>
            <Input
              placeholder='example@gmail.com'
              leftIcon={
                <Icon
                  name='email'
                  size={24}
                  color='#494a4d'
                />
              }
            />
            <Input
              placeholder='Password'
              secureTextEntry
              leftIcon={
                <Icon
                  name='account-key'
                  size={24}
                  color='#494a4d'
                />
              }
            />
            <View>
              <Text style={styles.forget}>Forget password?</Text>
            </View>
            <Button
              title="Sign in" buttonStyle={styles.btn}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  lower: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: 'white',
    padding: 16,
    paddingTop: 22,
    flexGrow: 1
  },
  body: {
    backgroundColor: 'black',
    flex: 1
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
  forget: {
    position: 'absolute',
    right: 0,
    marginTop: -19,
    color: '#376fde'
  },
  welcome: {
    fontSize: 29,
    color: '#44464a'
  },
  signin: {
    fontSize: 30,
    color: 'white',
    textAlign: 'left',
    paddingLeft: 16,
    paddingTop: 90,
    paddingBottom: 50
  },
  btn: { 
    backgroundColor: '#44464a', 
    marginTop: 40, 
    marginLeft: 16, 
    marginRight: 16 
  }

})
