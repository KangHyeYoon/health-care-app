import classes from "./PatientDiaInfo.module.css";

const PatientDiaInfo = ({ data }) => {
    console.log(data);
  
    return (
      <div className={classes.treatlist}>
        {data.prescription_list && data.prescription_list.length > 0 && (
          <>
            <span>&nbsp;{data.prescription_list[0].pre_name}</span>
            <span>{data.prescription_list[0].pre_contents}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>{data.prescription_list[0].one_day}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>{data.prescription_list[0].total}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </>
        )}
      </div>
    );
  };
  
  export default PatientDiaInfo;