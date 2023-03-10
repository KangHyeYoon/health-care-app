import { useEffect, useState } from "react";
import PatientHeader from "../../../components/Header/PatientHeader";
import PatientResInfo from "../../../components/Patient/Reservation/PatientResInfo";
import ReserveSubmit from "../../../components/Patient/Reservation/ReserveSubmit";
import PastSchedule from "./PastSchedule";

import classes from './PatientReservation.module.css';
const PatientReservation = () => {
  const [id, setId] = useState("");
  const [reserveData, setReserveData] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [oneAgoData, setOneAgoData] = useState([]);
  const [twoAgoData, setTwoAgoData] = useState([]);
  const [threeAgoData, setThreeAgoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (sessionStorage.getItem("patient_id") === null) {
        console.log("회원 정보가 없습니다. 로그인하세요.");
      } else {
        setId(sessionStorage.getItem("patient_id"));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (id === "") {
        console.log("회원 정보가 없습니다. 로그인하세요.");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8080/patient/${id}/reservation`
        );
        const data = await response.json();

        console.log(data.data);

        setReserveData(data.data.reservation_list);
        setDoctorList(data.data.doctor);
        setOneAgoData(data.data.res_last_list.one);
        setTwoAgoData(data.data.res_last_list.two);
        setThreeAgoData(data.data.res_last_list.three);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <PatientHeader />
      <div className={classes.mainbox}>
        <div className={classes.positionchange}>
          <div className={classes.column}>
          <PatientResInfo data={reserveData} />
          <PastSchedule
            oneAgoData={oneAgoData}
            twoAgoData={twoAgoData}
            threeAgoData={threeAgoData}
          />
          </div>
        <ReserveSubmit id={id} doctorData={doctorList} />
        </div>
      </div>
    </>
  );
};

export default PatientReservation;
