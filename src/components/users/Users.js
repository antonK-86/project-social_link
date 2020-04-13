import React from "react";
import cls from "./Users.module.css";
import userIcon from "../../img/user_icon.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  //debugger;
  let usersArr = props.users.map((u) => (
    <div key={u.id} className={cls.user_item}>
      <NavLink to={"/profile/" + u.id} className={cls.user_img}>
        <img src={u.photos.small || userIcon} alt="" width="70" height="70" />
      </NavLink>
      <div className={cls.user_item__center}>{u.name}</div>
      <div>ID:{" " + u.id}</div>
      <div className={cls.user_item__center}>
        Status:{" " + !u.status && ""}
      </div>
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
    </div>
  ));

  let countPages = Math.ceil(props.totalCount / props.count); //округление до целого
  let pagesArr = [];
  for (let i = 1; i <= countPages; i++) {
    pagesArr.push(i);
  }
  let page = pagesArr.map((p) => (
    <span
      className={
        (props.currentPage === p && cls.selected) + " " + cls.page_item
      }
      onClick={() => {
        props.onPageChange(p);
      }}
    >
      {p + " "}
    </span>
  ));
  return (
    <div className={cls.users_page}>
      <div className={cls.pages}>{page}</div>
      <div className={cls.users}>{usersArr}</div>
    </div>
  );
};

export default Users;
