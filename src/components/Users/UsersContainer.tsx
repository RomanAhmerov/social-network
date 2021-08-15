import React from "react";
import {connect} from "react-redux";
import {
    follow,
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
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";
import TitleSection from "../StyledComponents/TitleSection";
import Section from "../StyledComponents/Section";
import Container from "../StyledComponents/Container";
import Flex from "../StyledComponents/Flex";


// Type (TS)
type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>

    // Style
    background?: string
    backgroundUser?: string
}

type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type OwnPropsType = {}

// Общий тип props-ов
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType



// CC
// class UsersContainer extends React.Component<PropsType, StateType> { ... } // Для расширенного примера
class UsersContainer extends React.Component<PropsType> {
    // // Если конструктор только расширяет наш класс (см. ниже), то его можно не писать !
    // constructor(props) {
    //     super(props);
    // }

    // При успешной загрузке компонентов
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    // Изменение страницы пользователей
    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <Section height='100%' background={this.props.background}>
                <Flex justify='center'>
                    <Container padding='10px 30px' maxWidth='700px'>
                        <TitleSection title='Users' />

                        {/*{this.props.isFetching ? <Preloader/> : null}*/}

                        <Users totalUsersCount={this.props.totalUsersCount}
                               pageSize={this.props.pageSize}
                               currentPage={this.props.currentPage}
                               onPageChanged={this.onPageChanged}
                               users={this.props.users}
                               follow={this.props.follow}
                               unfollow={this.props.unfollow}
                               followingInProgress={this.props.followingInProgress}
                               backgroundUser={this.props.backgroundUser}
                        />
                    </Container>
                </Flex>
            </Section>
        )

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
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

        // Style
        background: state.app.theme.section.background,
        backgroundUser: state.app.theme.section.backgroundSecondary
    }
};


// Функция compose (хорошая практика)
export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
    {
        follow,
        unfollow,
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