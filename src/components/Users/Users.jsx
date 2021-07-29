import React from "react";
import styles from "./users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
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