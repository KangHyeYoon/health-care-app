import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./PatientDropDown.module.css";
const PatientDropDown = ({ toggleMenu }) => {
  const navigate = useNavigate();

  const toHomeHandler = () => {
    sessionStorage.removeItem("patient_id");
    toggleMenu();
    navigate("/");
  };

  const toLoginHandler = () => {
    toggleMenu();
    navigate("/patient/login");
  };

  const toSignupHandler = () => {
    toggleMenu();
    navigate("/patient/Signup");
  };

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdowncontent}>
        <div className={classes.content} onClick={toLoginHandler}>로그인</div>
        <div className={classes.content} onClick={toSignupHandler}>회원가입</div>
        <div className={classes.content} onClick={toHomeHandler}>로그아웃</div>
      </div>
    </div>
  );
};

export default PatientDropDown;