// BLL
import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'; // redux-from (HOC)


const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer // redux-from (reducer)
});

// Type (TS)
type RootReducerType =  typeof rootReducers // (globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType> // ReturnType - функция TS, которая возвращает тип // AppStateType = { profilePage: profileReducer, dialogsPage: ..., ...)

// Type (TS) (AC)
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

// Type (TS) (Thunk)
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A> // Второй вариант (рекомендасьон от Redux)

// Расширение Redux
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store;

export default  store;