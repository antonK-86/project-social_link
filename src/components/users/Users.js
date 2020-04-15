import React from "react";
import cls from "./Users.module.css";
import userIcon from "../../img/user_icon.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
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

  let countPages = Math.ceil(props.totalCount / props.count); //округление до целого
  let limitPages = props.limitPages;
  let j = props.j;

  let pagesArr = [];
  for (let i = j; i <= limitPages; i++) {
    pagesArr.push(i);
  }

  const fLastPage = () => {
    if (limitPages === countPages) return;
    limitPages = countPages;
    j = countPages - props.countPage;
    page.length = 0;
    props.editPages(limitPages, j);
    props.onPageChange(countPages);
  };

  const fNext = () => {
    if (limitPages >= countPages) return;
    if (limitPages > countPages - props.countPage) {
      limitPages = countPages - props.countPage;
      j = props.j;
    }
    page.length = 0;
    props.editPages(limitPages + props.countPage, j + props.countPage);
    props.onPageChange(j + props.countPage);
  };

  const fPrev = () => {
    if (j < 1) return;
    if (j - props.countPage <= 1) {
      j = props.countPage + 1;
      limitPages = 2 * props.countPage;
    }
    if (limitPages === countPages) {
      limitPages = j + props.countPage - 1;
    }
    page.length = 0;
    props.editPages(limitPages - props.countPage, j - props.countPage);
    props.onPageChange(limitPages - 2 * props.countPage + 1);
  };

  const fFistPage = () => {
    limitPages = props.countPage;
    j = 1;
    page.length = 0;
    props.editPages(limitPages, j);
    props.onPageChange(j);
  };

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
      <div className={cls.pages}>
        <span
          className={cls.arrow}
          onClick={() => {
            fFistPage();
          }}
        >
          {" first page "}
        </span>
        <span
          className={cls.arrow}
          onClick={() => {
            fPrev();
          }}
        >
          {"<< "}
        </span>
        {page}
        <span
          className={cls.arrow}
          onClick={() => {
            fNext();
          }}
        >
          {" >> "}
        </span>
        <span
          className={cls.arrow}
          onClick={() => {
            fLastPage();
          }}
        >
          {" last page "}
        </span>
      </div>
      <div className={cls.users}>{usersArr}</div>
    </div>
  );
};

export default Users;
