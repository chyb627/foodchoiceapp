import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerWelcomeScreen from './DrawerWelcomeScreen';
import DrawerUserScreen from './DrawerUserScreen';
import IconButton from '../components/\bIconButton';

const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <NavigationContainer independent={true}>
      {/* initialRouteName로 최초 화면 설정 */}
      <Drawer.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          drawerStyle: { backgroundColor: '#fff' },
        }}>
        <Drawer.Screen
          name="Welcome"
          component={DrawerWelcomeScreen}
          options={{
            // headerStyle: { backgroundColor: '#3c0a6b' },
            // headerTintColor: 'white',
            drawerLabel: 'Welcome Screen',
            // drawerActiveBackgroundColor: '#f0e1ff',
            // drawerActiveTintColor: '#3c0a6b',
            // drawerStyle: { backgroundColor: '#ccc' },
            drawerIcon: ({ color, size }) => <IconButton icon="home" color={color} size={size} />,
          }}
        />
        <Drawer.Screen
          name="User"
          component={DrawerUserScreen}
          options={{
            drawerIcon: ({ color, size }) => <IconButton icon="user" color={color} size={size} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerScreen;
