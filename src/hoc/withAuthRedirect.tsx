import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";


// Данные (props) небходимые HOC
let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});


// Type (TS)
type MapPropsType = {
    isAuth: boolean
}


// HOC
export function withAuthRedirect(WrappedComponent: React.ComponentType) {

    function RedirectComponent(props:  MapPropsType) {
        const {isAuth, ...restProps} = props;

        // Redirect при отсутствие авторизации
        if (!isAuth) {
            return (
                <Redirect to='/login'/>
            );
        }
        ;

        return <WrappedComponent {...restProps} />;
    }

    // Снабжение HOC необходимыми данными (props) с помощью connect (доп. оберткой)
    return connect(mapStateToPropsForRedirect) (RedirectComponent);
}