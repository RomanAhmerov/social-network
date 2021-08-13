import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, HashRouter, Redirect, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";
import {initializeApp} from "./redux/appReducer";

// Lazy loaded
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


// Type (TS)
type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

// (HOC) Component
const SuspenseProfile = withSuspense(ProfileContainer);

// CC
class App extends React.Component<MapPropsType & DispatchPropsType> {
    // catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    //     alert("Упс... ошибочка!");
    // }

    componentDidMount() {
        // Dispatch(thunk)
        this.props.initializeApp();

        // Error handling
        // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    // componentWillUnmount() {
    //     // Удаление прослушивания при удалении компоненты (уборка мусора)
    //     window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    // }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/* Редирект на страницу профиля */}
                    <Redirect from="/" to="/profile" />

                    <Route path="/profile/:userId?" render={() => <SuspenseProfile />} />

                    {/*Для примера Роутнинг диалогов в старом варианте*/}
                    <Route path="/dialogs" render={() => {
                        return (
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        )
                    }}/>

                    <Route path="/users" render={() => <UsersContainer pageTitle="Users" />}/>

                    <Route path="/login" render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
};


const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
});


// App оборачиваем в контейнерную компоненту для передачи в неё необходимых данных
const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);


// Дополнительная FC нужна для проведения тестов
const SamuraiJSApp: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
};

export default SamuraiJSApp;