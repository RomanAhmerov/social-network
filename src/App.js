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
import store from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";
import {initializeApp} from "./redux/appReducer";

// Lazy loaded
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends React.Component {
    // catchAllUnhandledErrors = (reason, promise) => {
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

                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />

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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});


const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);


export const SamuraiJSApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
};

export default SamuraiJSApp;