import React from "react";
import preloader from "./preloader3.svg";
import cls from "./Preloader.module.css";

const Preloader = () => {
  return <img src={preloader} alt="preloader" className={cls.preloader} />;
};

export default Preloader;
