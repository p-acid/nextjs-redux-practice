import { combineReducers } from "@reduxjs/toolkit";

import { testReducer } from "./testReducers";

const reducer = combineReducers({ test: testReducer }); // 값이 다른 리듀서 함수 객체를 하나의 리듀서 함수 객체로 바꾸어주는 역할

export default reducer;
