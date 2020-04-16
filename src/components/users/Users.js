import React from "react";
import cls from "./Users.module.css";
import userIcon from "../../img/user_icon.png";
import { NavLink } from "react-router-dom";
import Pages from "./Pages";

const Users = (props) => {
  //debugger;
  let usersArr = props.users.map((u) => (
    <div className={cls.user_item} key={u.id}>
      <NavLink to={"/profile/" + u.id} className={cls.user_img}>
        <img src={u.photos.small || userIcon} alt="" width="70" height="70" />
      </NavLink>
      <div className={cls.user_item__center}>{u.name}</div>
      <div>ID:{" " + u.id}</div>
      <div className={cls.user_item__center}>
        Status:{" " + !u.status && ""}
      </div>
      {props.isAuth ? (
        <div>
          {u.followed ? (
            <button
              //disabled={props.loading}
              onClick={() => {
                props.unFollowThunk(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.loading}
              onClick={() => {
                props.followThunk(u.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  ));

  return (
    <div className={cls.users_page}>
      <Pages {...props} />
      <div className={cls.users}>{usersArr}</div>
    </div>
  );
};

export default Users;
