# foodchoiceapp
reac_native_app_learn_navigation

# navigation 설치
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack

## 기본 화면 설정하기

(<Stack.Navigator>을 통해) Navigator를 설정하고 (<Stack.Screen>을 통해) 화면을 등록할 때는 앱이 시작할 때 어떤 화면이 기본으로 표시될지를 설정할 수 있습니다.

아무런 설정 없이는 가장 위에 있는 화면, 즉 <Stack.Navigator>내의 첫 번째 자식 요소가 초기 화면이 됩니다.

다음 예시에서는 AllProducts 화면이 앱 시작 시 나타나는 초기 화면이 됩니다

```js
<Stack.Navigator>
  <Stack.Screen name="AllProducts" component={AllProducts} /> // initial screen
  <Stack.Screen name="ProductDetails" component={ProductDetails} />
</Stack.Navigator>
```

<Stack.Screen>순서를 변경함으로써 초기 화면을 변경할 수 있습니다. 
내비게이터 컴포넌트(예시의<Stack.Navigator>에 설정할 수 있는 initialRouteName 프로퍼티를 사용할 수도 있습니다.

```js
<Stack.Navigator initialRouteName="ProductDetails">
  <Stack.Screen name="AllProducts" component={AllProducts} /> 
  <Stack.Screen name="ProductDetails" component={ProductDetails} /> // initial screen
</Stack.Navigator>
```

## navigation(페이지 이동)
1. Stack.Screen에 등록된 Screen은 navigation을 porps로 받을 수 있다.
2. import { useNavigation } from '@react-navigation/native';
   const navigation = useNavigation();
   으로 가져올 수 있다. (Stack.Screen에 없는 분리된 컴포넌트에서 화면 전환이 필요 할 때 사용)
