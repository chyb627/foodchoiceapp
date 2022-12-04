import React from 'react';
import { Button, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      }); // 페이지 이동
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  function goDrawerScreen() {
    navigation.navigate('Drawer');
  }

  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2} // 기본값은 1, 2~3등을 이용하여 복수의 열을 만들 수 있다.
      />
      <Button title="DrawerTest" onPress={goDrawerScreen} />
    </>
  );
}

export default CategoriesScreen;
