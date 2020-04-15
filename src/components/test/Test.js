import React from "react";
import cls from "./Test.module.css";
import Preloader from "../preloader/Preloader";
import { connect } from "react-redux";

const Test = (props) => {
  let countPages = Math.ceil(props.totalCount / props.count); //округление до целого
  let limitPages = 10;
  let j = 1;
  let pagesArr = [];
  for (let i = j; i <= countPages; i++) {
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
    <div className={cls.pages}>
      <span className={cls.arrow}>{" first page "}</span>
      <span className={cls.arrow}>{"<< "}</span>
      {page}
      <span
        className={cls.arrow}
        onClick={() => {
          console.log("rere");
        }}
      >
        {" >> "}
      </span>
      <span className={cls.arrow}>{" last page "}</span>
    </div>
  );
};

let mapStateToProps = (state) => ({
  pagesArr: state.test.pagesArr,
  totalCount: state.test.totalCount,
  count: state.test.count,
  currentPage: state.test.currentPage,
});

export default connect(mapStateToProps, null)(Test);
