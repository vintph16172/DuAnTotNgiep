import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import countSlide from '../features/count/CountSlide'
import productSlide from '../features/product/ProductSlide'
export const store = configureStore({
  reducer:{
    count: countSlide,
    product: productSlide
    // product
    // cart
    // user
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
