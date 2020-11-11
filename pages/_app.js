import "../styles/globals.css"; // Component is replaced here by any page
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { connect, Provider } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 5,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
  },
});
const itemsSlice = createSlice({
  name: "items",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state) => {
      state.push("we here");
    },
  },
});

export const { incremented } = counterSlice.actions;
export const { addItem } = itemsSlice.actions;

const reducer = {
  counter: counterSlice.reducer,
  items: itemsSlice.reducer,
};

const store = configureStore({ reducer: reducer });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
