import PatientDiaList from "../../../components/Patient/Treat/PatientDiaList";
import PatientPreList from "../../../components/Patient/Treat/PatientPreList";
import PatientHeader from "../../../components/Header/PatientHeader";

import classes from './PatientTreat.module.css';
const PatientTreat = () => {
    return(
        <>
            <PatientHeader />
            <div className={classes.mainbox}>
                <div className={classes.positionchange}>
                    <PatientDiaList />
                    <PatientPreList />
                </div>
            </div>
        </>
    )
}

export default PatientTreat;