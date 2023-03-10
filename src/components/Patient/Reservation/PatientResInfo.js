import Card from "../../UI/Card";

import classes from "./PatientResInfo.module.css";
const PatientResInfo = ({ data }) => {
  return (
    <div className={classes.reservebox}>
      <div className={classes.top}>예약 정보</div>
      <div className={classes.reservesmallbox}>
      {data && data.length > 0 ? (
        <Card>
          <div className={classes.middle}>진료가 예정되어 있습니다.</div>
            {data.map((v, i) => {
              <ul id={i}>
                <li>{v.res_date}</li>
                <li>{v.res_time}</li>
                <li>{v.doctor_name}</li>
                <button>예약 취소</button>
              </ul>;
            })}
        </Card>
      ) : (
        <Card>
          <div className={classes.middle}>예정된 진료가 없습니다.</div>
        </Card>
      )}
      </div>
    </div>
  );
};

export default PatientResInfo;