import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import DrawerScreen from './src/screens/DrawerScreen';
import BottomtabScreen from './src/screens/BottomtabScreen';

const Stack = createNativeStackNavigator();

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
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
              // headerTintColor: 'white',
              // headerStyle: { backgroundColor: '#351401' },
              // contentStyle: { backgroundColor: '#3f2f25' },
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
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tab me!" onPress={} />;
            //   },
            // }}
          />
          <Stack.Screen name="Drawer" component={DrawerScreen} />
          <Stack.Screen name="Bottomtab" component={BottomtabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
