import Card from "./Card";
import classes from "./Result.module.css";

function Result(props) {
  return (
    <Card className={classes["results-main"]}>
      <div>
        <div className={classes.head}>
          <h2>Results</h2>
        </div>
        <div className={classes["sub-head"]}>
          <div>
            <label className={classes.tobepaid}>Amount to be paid</label>
            <p>{props.amountsObj.finalEarnings}</p>
          </div>
          <div>
            <label className={classes.deductions}>Total deductions</label>
            <p>- {props.amountsObj.totalDeduction}</p>
          </div>
        </div>
        <div className={classes.description}>
          <div>
            <label>Total earned</label>
            <p>{props.amountsObj.totalAmount}</p>
          </div>
          <div>
            <label>ISR Deduction</label>
            <p>{props.amountsObj.isr}</p>
          </div>
          <div>
            <label>SFS Deduction</label>
            <p>{props.amountsObj.sfs}</p>
          </div>
          <div>
            <label>AFP Deduction</label>
            <p>{props.amountsObj.afp}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Result;
