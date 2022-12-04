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

## 불변성

```js
const info = {
  id: 1,
  name: 'young cha'
};

info.name = 'bin cha'; // X, 객체 직접 수정 X, 기존 객체는 그대로 두고 새로운 객체를 만들어 덮어 씌워야함.

const secondInfo = {
  ...info,
  name: 'bin cha'
};
```

리액트에서 불변성을 지켜야 하는 이유는 랜더링 성능 최적화 방식 때문.

## 배열의 불변성 지키는 방법

```js
const number = [0, 1, 2, 3];
number.push(4); // [0, 1, 2, 3, 4]
number[0] = 10; // [10, 1, 2, 3, 4]
number.splice(0, 1) // [1, 2, 3, 4] -> 0번째 인덱스부터, 1게 삭제
// 이 코드는 모두 직접 수정. 리액트에서 상태 관리할 때 이와 같이 코드 작성 X
// 배열의 내장 함수들을 활용해 새로운 배열을 생성하는 방식으로 배열 상태를 업데이트 해야한다.

const num = [0, 1, 2, 3];
const secondNum = [...num, 4];  // [0, 1, 2, 3, 4]
const thirdNum = num.concat(4); // [0, 1, 2, 3, 4]
const fourthNum = num.concat([4, 5, 6]); // [0, 1, 2, 3, 4, 5, 6]
// 불변성을 유지하면서 배열에 새로운 항목을 추가하는 방법은 위와같이 2가지다.
// 1번째는 spread연산자 사용. 두번째 방법은 배열의 내장 함수 concat을 사용하는 것.
```

### 배열에서 특정 항목 제거하기.

배열 내장 함수 filter 사용하기.

```js
const number = [-3, -2, -1, 0, 1, 2, 3];
const filtered = number.filter(number => nummber > 0);
console.log(filtered); // [1, 2, 3]
// filter함수는 배열에 특정 조건을 만족하는 원소들로 이루어진 새로운 배열을 만들어 준다.
// filter함수를 사용하여 0보다 큰 원소들을 모아 새로운 배열을 만듦.

const secondNumber = number.filter(number => number !== 0);
console.log(secondNumber); // [-3, -2, -1, 1, 2, 3]
// 특정 값만 없애고 싶다면 다음과 같이 코드를 입력하면 된다.
// 배열에서 숫자 0과 일치하지 않는 값들을 필터링해 0을 제거.
// 문제점은 0이 여러개라면 모든 0이 사라진다는 것.
// 따라서 실제 값을 비교해서 삭제하는 것보다 index를 삭제하는 것이 더 좋다.

const thirdNumber = number.filter((number, i) => i !== 3);
console.log(thirdNumber); // [-3, -2, -1, 1, 2, 3]
// filter 함수에 넣는 인자 함수에서 두 번째 파라미터로 항목의 index를 받아 올 수 있다
// number의 0의 index는 3이므로 다음과 같이 코드 작성.

// 여러 객체로 이루어진 배열을 다룰 때 어떻게 해야 할까?
// id 값이 3인 객체를 지우고 싶다면,
const items = [{ id:1 }, { id:2 }, { id:3 }, { id:4 }];
const secondItems = items.filter(item => item.id !== 3);
console.log(secondItems); // [{ id:1 }, { id:2 }, { id:4 }]

// 특정 항목을 제거할 때는,
const items = [{ id:1 }, { id:2 }, { id:3 }, { id:4 }];
const itemIndex = items.findIndex(item=> item.id === 3); // 2
const thirdItems = [...items].splice(index, 1); // [{ id:1 }, { id:2 }, { id:4 }]
// findIndex 내장 함수는 배열에서 특정 조건을 만족하는 원소의 index 값을 조회한다.
// splice 함수는 불변성을 지키는 함수가 아니다. 하지만 이 함수를 사용하기 전에 [...items]를 사용해 기존 items 배열 안에 있던 내용을 넣은 새로운 배열은 만들었기에 items 배열은 변함없이 기존 상태를 그대로 유지하게 된다.
```

### drawer navigation
yarn add @react-navigation/drawer
yarn add react-native-gesture-handler react-native-reanimated

yarn start --reset-cache 로 시작하기.


### bottom-tabs navigation
yarn add @react-navigation/bottom-tabs