import React from "react";
import styles from "./users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import {UserType} from "../../types/types";
import Flex from "../StyledComponents/Flex";

// Type (TS)
type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber :number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void

    // Style
    backgroundUser?: string
}

// FC
const Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users,
                                        ...props}) => {
    return (
        <Flex>
            <div>
                {
                    users.map(u => <User key={u.id} user={u}
                                         followingInProgress={props.followingInProgress}
                                         follow={props.follow}
                                         unfollow={props.unfollow}
                                         backgroundUser={props.backgroundUser}
                                    />)
                }
            </div>

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        </Flex>
    )
};

export default Users;