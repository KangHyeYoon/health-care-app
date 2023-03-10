import classes from "./PatientDiaInfo.module.css";

const PatientDiaInfo = ({ data }) => {
    console.log(data);
  
    return (
      <div className={classes.treatlist}>
        <span>{data.dia_date}</span>
        <span>{data.dia_contents}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>{data.disease}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    );
  };
  
  export default PatientDiaInfo;