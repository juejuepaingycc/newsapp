import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, Picker, View, SafeAreaView } from 'react-native';
import CustomHeader from '../CustomHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input, Button, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export class SignupScreen extends Component {

  state = {
    gender: 'Male',
    address: ''
  }
  updateGender = (gender) => {
    this.setState({ gender: gender })
  }
  updateAddress = (address) => {
    this.setState({ address: address })
  }

  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader isHome={false} navigation={navigation}></CustomHeader>
        <ScrollView style={styles.body}>
          <Text style={styles.signup}>
            Sign Up!
          </Text>
          <View style={styles.lower}>
            <Input
              placeholder='Name'
              leftIcon={
                <Icon
                  name='account-outline'
                  size={24}
                  color='#494a4d'
                />
              }
            />
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

            <Text style={styles.label}>Gender</Text>
            <View style={styles.selectView}>
              <Picker
                selectedValue={this.state.gender}
                onValueChange={this.updateGender}
                style={styles.selectBox}
                mode='dropdown'
              >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Rather not say" value="nothing" />
              </Picker>
            </View>

            <Text style={styles.label}>Interest</Text>
            <CheckBox
              title='Business'
           //   checkedIcon={<Icon name="checkbox-marked-outline" style={styles.checkbox}></Icon>}
              uncheckedIcon={<Icon name="checkbox-blank-outline" style={styles.checkbox}></Icon>}
              size={20}
              containerStyle={styles.checkView}
              checked={false}
            />
            <CheckBox
              title='Technology'
              checkedIcon={<Icon name="checkbox-marked-outline" style={styles.checkbox}></Icon>}
              //uncheckedIcon={<Icon name="checkbox-blank-outline" style={styles.checkbox}></Icon>}
              checked={true}
              containerStyle={styles.checkView}
            />
            <CheckBox
              title='Sports'
             // checkedIcon={<Icon name="checkbox-marked-outline" style={styles.checkbox}></Icon>}
              uncheckedIcon={<Icon name="checkbox-blank-outline" style={styles.checkbox}></Icon>}
              checked={false}
              containerStyle={styles.checkView}
            />
            <CheckBox
              title='Science'
              checkedIcon={<Icon name="checkbox-marked-outline" style={styles.checkbox}></Icon>}
             // uncheckedIcon={<Icon name="checkbox-blank-outline" style={styles.checkbox}></Icon>}
              checked={true}
              containerStyle={styles.checkView}
            />
            <CheckBox
              title='Entertainment'
              //checkedIcon={<Icon name="checkbox-marked-outline" style={styles.checkbox}></Icon>}
              uncheckedIcon={<Icon name="checkbox-blank-outline" style={styles.checkbox}></Icon>}
              checked={false}
              containerStyle={styles.checkView}
            />

            <Text style={styles.label}>Address</Text>
            <TextInput
              multiline
              numberOfLines={4}
              editable
              value={this.state.address}
              clearTextOnFocus
              onChangeText={text => this.updateAddress(text)}
              maxLength={40}
              style={styles.address}
            />

            <Button
              title="Sign up" buttonStyle={styles.btn}
            />

          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}


const styles = StyleSheet.create({
  address: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginLeft: 5,
    marginTop: 5
  },
  checkbox: {
    fontSize: 28
  },
  checkView: {
    width: 230, 
    padding: 5
  },
  label: {
    paddingLeft: 7,
    color: 'gray',
    fontSize: 15,
    paddingTop: 10
  },
  selectBox: {
    borderWidth: 1,
  },
  selectView: {
    borderWidth: 1, 
    marginLeft: 5, 
    borderRadius: 5, 
    borderColor: 'gray', 
    marginTop: 5
  },
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
  signup: {
    fontSize: 30,
    color: 'white',
    textAlign: 'left',
    paddingLeft: 16,
    paddingTop: 40,
    paddingBottom: 20
  },
  btn: {
    backgroundColor: '#44464a', 
    marginTop: 40, 
    marginLeft: 16, 
    marginRight: 16
  }

})
