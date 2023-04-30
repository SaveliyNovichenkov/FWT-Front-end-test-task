import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { paintAPI } from '../services/paints.service'
import { locationAPI } from '../services/location.service'
import { authorsAPI } from '../services/author.service'
import { themeSlice } from './reducers/themeSlice'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: any) {
      return Promise.resolve()
    }
  }
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export default storage

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['theme']
}

const rootReducer = combineReducers({
  [paintAPI.reducerPath]: paintAPI.reducer,
  [locationAPI.reducerPath]: locationAPI.reducer,
  [authorsAPI.reducerPath]: authorsAPI.reducer,
  theme: themeSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const rootAction = {}

export const store = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        paintAPI.middleware,
        locationAPI.middleware,
        authorsAPI.middleware
      )
  })
}

export type TypeRootState = ReturnType<typeof rootReducer>
export type TypeAppStore = ReturnType<typeof store>
export type TypeAppDispatch = TypeAppStore['dispatch']
