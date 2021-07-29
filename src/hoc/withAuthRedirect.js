import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


// Данные (props) небходимые HOC
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});


// HOC
export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            // Redirect при отсутствие авторизации
            if (!this.props.isAuth) {
                return (
                    <Redirect to='/login' />
                );
            };

            return <Component {...this.props} />;
        }
    }

    // Снабжение HOC необходимыми данными (props) с помощью connect (доп. оберткой)
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);

    return ConnectedAuthRedirectComponent;
}