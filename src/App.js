import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";

// Lazy loaded
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        // Dispatch(thunk)
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />

                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>

                    <Route path="/dialogs" render={() => {
                        return (
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        )
                    }}/>


                    <Route path="/users" render={() => <UsersContainer/>}/>

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
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
};

export default SamuraiJSApp;