import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    // При завершения отрисовки компоненты (метод жизненного цикла)
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;

            // Плохая практика (применять только в исключительных случиях) (это аналог <Redirect to="/login" />)
            if (!userId) {
                this.props.history.push("/login");
            }
        };

        // Получение Profile dispatch(thunk)
        this.props.getUserProfile(userId);

        // Получение Status (статуса пользователя) dispatch(thunk)
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        );
    }
};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
});

// Функция compose (хорошая практика)
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect // Работа с HOC
) (ProfileContainer);

// Аналог (плохая практика)
// // Работа с HOC
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
//
// // Дополнительная контейнерная компонента для передачи URL параметра
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// // connect с коротокой записью mapStateToDispatch (второй параметр)
// export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);