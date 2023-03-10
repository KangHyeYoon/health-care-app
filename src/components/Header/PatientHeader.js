import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientDropDown from "./PatientDropDown";

import classes from "./PatientHeader.module.css";
const PatientHeader = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toHomeHandler = () => {
    navigate("/");
  };

  const toReserveHandler = () => {
    navigate("/patient/reservation");
  };

  const toTreatHandler = () => {
    navigate("/patient/treat");
  };

  const toChatHandler = () => {
    navigate("/patient/chat");
  };

  const toSenserHandler = () => {
    navigate("/patient/senser");
  };

  const toCodeHandler = () => {
    navigate("/patient/code");
  };

  const toVirtualHandler = () => {
    navigate("/patient/virtualtreat");
  }

  return (
    <div className={classes.header}>
      <div className={classes.mainlogo} onClick={toHomeHandler}>
        <img src={require("./logo.png")} alt="logo" width={190} />
      </div>
      <div className={classes.headerlist}>
        <nav>
          <ul>
            <li onClick={toTreatHandler}>진료 내역</li>
            <li onClick={toReserveHandler}>진료 예약</li>
            <li onClick={toVirtualHandler}>비대면 진료</li>
            <li onClick={toChatHandler}>챗봇</li>
            <li onClick={toSenserHandler}>센서</li>
            <li onClick={toCodeHandler}>코드 발급</li>
          </ul>
        </nav>
      </div>
      <div className={classes.mypage}>
        <i className="fa-solid fa-user" onClick={toggleMenu}>&nbsp;</i>
        {showMenu && (
          <nav>
            <PatientDropDown toggleMenu={toggleMenu}/>
          </nav>
        )}
      </div>
    </div>
  );
};

export default PatientHeader;