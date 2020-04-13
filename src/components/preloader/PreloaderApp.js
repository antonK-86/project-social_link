import React from "react";
import preloader from "./preloader3.svg";
import cls from "./Preloader.module.css";

export const PreloaderApp = () => {
  return (
    <div className={cls.preloader_container}>
      <img src={preloader} alt="preloader" className={cls.preloader_app} />
    </div>
  );
};

export default PreloaderApp;
