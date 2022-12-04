import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import DrawerScreen from './src/screens/DrawerScreen';
import BottomtabScreen from './src/screens/BottomtabScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#351401' },
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        // Drawer Navigation 에서는 contentStyle이 아니라 sceneContainerStyle로 설정해준다.
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#351401' },
            contentStyle: { backgroundColor: '#3f2f25' },
          }}>
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown: false, // 드로우 네비게이터 중첩으로 헤드가 2개 생기므로 하나를 가려준다.
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={(route, navigation) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
            }}
          />
          <Stack.Screen name="Drawer" component={DrawerScreen} />
          <Stack.Screen name="Bottomtab" component={BottomtabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
