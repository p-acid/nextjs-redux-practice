import { createStore, applyMiddleware } from "@reduxjs/toolkit"; // for store and middleware
import { HYDRATE, createWrapper } from "next-redux-wrapper"; // for mixing reducers in one store?
import { thunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/reducers";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    // process.env.NODE_ENV : production or development mode
    return composeWithDevTools(applyMiddleware(...middleware)); // composeWithDevTools = using Redux Devtools with middleware
  }
  // 프로덕션 모드일 때, Redux Devtools를 미들웨어와 같이 사용해라

  return applyMiddleware(...middleware); // applyMiddleware = 미들웨어를 사용할 수 있게 만드는 함수?
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    // HYDRATE = SSR을 위한 것으로 getInitialProps와 getServerSideProps 에서도 Redux Store에 접근이 가능하도록 하는 처리
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore); // 기존 getServerSideProps, getStaticProps같은 next의 라이프사이클에 redux를 결합시키는 역할
