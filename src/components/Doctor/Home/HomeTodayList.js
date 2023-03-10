import { useState } from "react";
import Card from "../../UI/Card";
import PatientModal from "../Modal/PatientModal";

import classes from "./HomeTodayList.module.css";

const HomeTodayList = ({ info }) => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={classes.listbox}>
      <div>
        <i className="fa-regular fa-user">&nbsp;&nbsp;</i>
        <span>{info.name}</span>
      </div>
      <span>{info.born}</span>
      <span>{info.phone}</span>
      <button className={classes.controlbutton} onClick={toggleShow}>환자 정보</button>
      {isShow && <PatientModal isOpen={isShow} />}
    </div>
  );
};

export default HomeTodayList;
