import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../redux/profileReducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    // Метод обновления данных профиля
    refreshProfile() {
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


    // При завершения отрисовки компоненты (метод жизненного цикла)
    componentDidMount() {
        this.refreshProfile();
    }

    // Перерисовка компоненты при изменении (props или state) (метод жизненного цикла)
    componentDidUpdate(prevProps, prevState) {
        // Условный оператор для предотвращения зацикливания
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
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