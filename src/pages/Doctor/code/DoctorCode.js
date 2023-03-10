import React, { useState, useEffect} from 'react';
import DoctorHeader from "../../../components/Header/DoctorHeader";

import Card from '../../../components/UI/Card';
import Button from '../../../components/UI/Button';

import classes from "./DoctorCode.module.css";
const DoctorCode = (props) => {
  const [id, setId] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem('doctor_id') === null) {
      console.log('회원 정보가 없습니다. 로그인하세요.');
    } else {
      setId(sessionStorage.getItem('doctor_id'));
    }
  }, []);

  const handleCodeGeneration = () => {
    const newCode = Math.random().toString(16).slice(2, 8);
    setCode(newCode);
  };

  const handleDoctorCodeSubmit = async (event) => {
    event.preventDefault();
    handleCodeGeneration();

    try {
      const response = await fetch(`http://localhost:8080/doctor/${id}/code`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data : {
            code: code
          }
        }),
      });
      const data = await response.json();
      if (data.result === 'OK') {
        alert("매칭이 완료되었습니다");
      } else if (data.result === "Fail") {
        alert("서버 오류로 매칭이 실패했습니다. 다시 시도해주세요.");
      } else {
        alert("잘못된 시도입니다.");
      }
    } catch (error) {
      console.log(error);
      alert("서버 연결 중 오류가 발생했습니다.");
    }
  }

return (
  <div>
      <DoctorHeader />
    <Card autocomplete="off">
      <div className={classes.codebox}>
      <div className={classes.codecenter}>
        <div className={classes.codetop}>연결 코드 발급</div>
        <div className={classes.codemiddle}>코드를 발급하면 환자와 연결이 가능해집니다.</div>
        <form onSubmit={handleDoctorCodeSubmit} autoComplete="off">
          <input className={classes.control} id="username" type="text" value={code} readOnly/>
          <Button className={classes.controlbutton} type="submit">발급받기</Button>
        </form>
      </div>
      </div>
  </Card>
  </div>
  );
};

export default DoctorCode;
