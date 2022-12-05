import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites';

// configureStore 함수를 호출하여 store 상수를 만든다.
// configureStore에 빈 객체를 값으로 갖는 reducer(리듀서)키를 객체로 전달한다.
// reducer는 redux가 사용하는 데이터와 데이터를 변경하는 동작의 상태(State)를 나타내는 슬라이스로 구성되며, 리듀서는 모든 데이터와 동작을 저장합니다.
export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
