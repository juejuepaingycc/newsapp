import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import CustomHeader from '../CustomHeader';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopStoriesTab from './Topstories'
import BusinessTab from './Business';
import TechnologyTab from './Technology';
import HealthTab from './Health';
import ScienceTab from './Science';
import SportsTab from './Sports';
import EntertainmentTab from './Entertainment';

const MaterialTopTabs = createMaterialTopTabNavigator();

export class HomeScreen extends Component {
  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Home" isHome={true} navigation={navigation}></CustomHeader>
        <View style={{ flex: 1 }}>

          <MaterialTopTabs.Navigator tabBarOptions={{
            scrollEnabled: true,
            activeTintColor: 'white',
            //inactiveTintColor: 'gray',
            style: {
              backgroundColor: 'black',
            },
            labelStyle: {
              paddingLeft: 6,
              paddingRight: 6,
              fontSize: 16
            },
            indicatorStyle: {
              backgroundColor: 'white'
            },
            tabStyle: {
              width: 'auto',
            }
          }
          }>
            <MaterialTopTabs.Screen name="All" component={TopStoriesTab} />
            <MaterialTopTabs.Screen name="Business" component={BusinessTab} />
            <MaterialTopTabs.Screen name="Health" component={HealthTab} />
            <MaterialTopTabs.Screen name="Technology" component={TechnologyTab} />
            <MaterialTopTabs.Screen name="Entertainment" component={EntertainmentTab} />
            <MaterialTopTabs.Screen name="Sports" component={SportsTab} />
            <MaterialTopTabs.Screen name="Science" component={ScienceTab} />
          </MaterialTopTabs.Navigator>

        </View>
      </SafeAreaView>
    );
  }
}