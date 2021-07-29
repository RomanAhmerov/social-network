import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    // Thunk
    requestUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import styles from "./usersContainer.module.css";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    // // Если конструктор только расширяет наш класс (см. ниже), то его можно не писать !
    // constructor(props) {
    //     super(props);
    // }

    // При успешной загрузке компонентов
    componentDidMount() {
        // ???
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    // Изменение страницы пользователей
    onPageChanged = (pageNumber) => {
        // ????
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}


// Старая версия
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// };


// Новая версия
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};


// Функция compose (хорошая практика)
export default compose(
    connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        // Thunk
        requestUsers
    }),
    //withAuthRedirect // Работа с HOC
) (UsersContainer);


//// Аналогичный код mapDispatchToProps (connect делает проеобразование автоматически)
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);