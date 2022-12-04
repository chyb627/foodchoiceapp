import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawerWelcomeScreen from './DrawerWelcomeScreen';
import DrawerUserScreen from './DrawerUserScreen';
import Icon from 'react-native-vector-icons/AntDesign';

const BottomTab = createBottomTabNavigator();

function BottomtabScreen() {
  return (
    <NavigationContainer independent={true}>
      {/* initialRouteName로 최초 화면 설정 */}
      <BottomTab.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b',
        }}>
        <BottomTab.Screen
          name="Welcome"
          component={DrawerWelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
          }}
        />
        <BottomTab.Screen
          name="User"
          component={DrawerUserScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default BottomtabScreen;
