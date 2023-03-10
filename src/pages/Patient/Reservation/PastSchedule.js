import Card from "../../../components/UI/Card";
import Accordion from "../../../Hook/Accordion";

import classes from "./PastSchedule.module.css";
const PastSchedule = ( {oneAgoData, twoAgoData, threeAgoData} ) => {

  return (
    <div className={classes.reservebox}>
      <div className={classes.top}>지난 일정</div>
      <div className={classes.reservesmallbox}>
      <Card>
        <Accordion title="1개월 전" content={oneAgoData} />
        <Accordion title="2개월 전" content={twoAgoData} />
        <Accordion title="3개월 전" content={threeAgoData}/>
      </Card>
      </div>
    </div>
  );
};

export default PastSchedule;
