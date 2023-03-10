import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

import classes from "./ReserveSubmit.module.css";
const ReserveSubmit = ({ id, doctorData }) => {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [availableTime, setAvailableTime] = useState([]);
  const [time, setTime] = useState("");
  const [symptom, setSymptom] = useState("");

  const timeData = [
    { num: 1, time: "9:00" },
    { num: 2, time: "9:30" },
    { num: 3, time: "10:00" },
    { num: 4, time: "10:30" },
    { num: 5, time: "14:00" },
    { num: 6, time: "14:30" },
    { num: 7, time: "15:00" },
    { num: 8, time: "15:30" },
  ];

  const onClickHandler = async (e) => {

    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/patient/${id}/reservation/getDate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              sel_doctor_id: doctor,
              res_date: date,
            },
          }),
        }
      );

      const responseData = await response.json();
      if (responseData.result === "OK") {
        setAvailableTime(
          timeData.filter((v) => responseData.data.res_time.includes(v.num))
        );
      } else {
        alert("잘못된 접근입니다");
      }
    } catch (error) {
      console.log(error);
      alert("예약 시간을 불러올 수 없습니다");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(doctor, symptom, id, date, time[0]);
  
    try {
      const response = await fetch("http://localhost:8080/patient/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            patient_id: id,
            sel_doctor_id: doctor,
            contents: symptom,
            res_date: date.replace(/-/g, "/"),
            res_time: time[0],
          },
        }),
      });
  
      const responseData = await response.json();
  
      if (responseData.result === "OK") {
        alert("예약이 완료되었습니다");
      } else if (responseData.result === "Fail") {
        alert(responseData.content);
      } else {
        alert("잘못된 시도입니다");
      }
    } catch (error) {
      alert("서버와 연결이 끊겼습니다");
    }
  };
  
  const onChangeDoctor = (e) => {
    setDoctor(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeTime = (e) => {
    setTime([parseInt(e.target.value)]);
  };
  const onChangeSymptom = (e) => {
    setSymptom(e.target.value);
  };
  
  return (
    <div className={classes.mainbox}>
      <Card>
      <div className={classes.top}>진료 예약</div>
        <div className={classes.smallbox}>
        <form onSubmit={onSubmit}>
          <div>
            <label>담당의</label>
            <br />
            <select onChange={onChangeDoctor}>
              {doctorData.map((v, i) => (
                <option key={i} value={v.name}>
                  {v.name} : {v.major}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>예약 날짜</label>
            <br />
            <input type="date" onChange={onChangeDate} />
            <button type="button" onClick={onClickHandler}>
              가능한 예약 시간 확인하기
            </button>
          </div>
          <div>
            <label>예약 시간</label>
            <br />
            <select onChange={onChangeTime}>
              {Object.values(availableTime).map((v, i) => (
                <option key={i} value={v.num}>
                  {v.time}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>증상</label>
            <br />
            <input type="text" value={symptom} onChange={onChangeSymptom} />
          </div>
          <div>
            <Button type="submit" htmlType="submit" onClick={onSubmit}>
              예약하기
            </Button>
          </div>
        </form>
        </div>
      </Card>
    </div>
  );
};

export default ReserveSubmit;  