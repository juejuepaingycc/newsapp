import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SwiperScreen, CustomDrawerContent } from './src';
import { HomeScreen, SearchScreen, Detail } from './src/tab';
import { SigninScreen, SignupScreen } from './src/auth';
import { IMAGE } from './src/constants/image';

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator();
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="Detail" component={Detail} options={navOptionHandler} />
    </StackHome.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ?
              IMAGE.ICON_HOME_BLACK
              : IMAGE.ICON_HOME
          } else if (route.name === 'Search') {
            iconName = focused ?
              IMAGE.ICON_SEARCH_BLACK
              : IMAGE.ICON_SEARCH
          }
          return <Image source={iconName} style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator drawerStyle={{ width: 240 }}
      initialRouteName="MenuTab"
      drawerContent={() => <CustomDrawerContent navigation={navigation} />} >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Signin" component={SigninScreen} />
      <Drawer.Screen name="Signup" component={SignupScreen} />
    </Drawer.Navigator>
  );
}

const StackApp = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Swiper2">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
        <StackApp.Screen name="Swiper2" component={SwiperScreen} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}