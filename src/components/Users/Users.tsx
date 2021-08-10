import React from "react";
import styles from "./users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import {UserType} from "../../types/types";

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
}

// FC
const Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users,
                                        ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>

            <div>
                {
                    users.map(u => <User key={u.id} user={u}
                                         followingInProgress={props.followingInProgress}
                                         follow={props.follow}
                                         unfollow={props.unfollow}/>)
                }
            </div>

        </div>
    )
};

export default Users;