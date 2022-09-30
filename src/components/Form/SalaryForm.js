import { useState } from "react";
import Card from "../UI/Card";
import classes from "./SalaryForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function SalaryForm(props) {
  const [enteredSalary, setEnteredSalary] = useState("");
  const [enteredBonifications, setEnteredBonifications] = useState("");
  const [entereExtraHours, setEntereExtraHours] = useState("");
  const [error, setError] = useState("");

  function amountSender(e) {
    e.preventDefault();
    if (enteredSalary.trim().length === 0) {
      setError({ title: "Invalid Inpur", message: "Please enter your salary" });
      return;
    }
    if (
      +enteredSalary < 1 ||
      +entereExtraHours < 0 ||
      +enteredBonifications < 0
    ) {
      setError({
        title: "Invalid Amount",
        message: "All amounts must be greater than DOP 1",
      });
      return;
    }
    props.onFormSubmission(
      +enteredSalary,
      +enteredBonifications,
      +entereExtraHours
    );
    setEnteredSalary("");
    setEnteredBonifications("");
    setEntereExtraHours("");
  }

  function salaryChangeHandler(e) {
    setEnteredSalary(e.target.value);
  }

  function bonificationsChangeHandler(e) {
    setEnteredBonifications(e.target.value);
  }

  function extraChangeHandler(e) {
    setEntereExtraHours(e.target.value);
  }
  function ErrorHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={ErrorHandler}
        />
      )}
      <form className={classes["form-main"]} onSubmit={amountSender}>
        <h2>Salary Discount Calculator</h2>
        <div className={classes["form-main__controls"]}>
          <div className={classes["form-main__control"]}>
            <label>Monthly Salary</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              placeholder="In DOP (RD$)"
              value={enteredSalary}
              onChange={salaryChangeHandler}
            />
          </div>
          <div div className={classes["form-main__control"]}>
            <label>Bonifications</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              placeholder="In DOP (RD$)"
              value={enteredBonifications}
              onChange={bonificationsChangeHandler}
            />
          </div>
          <div div className={classes["form-main__control"]}>
            <label>Extra Hours</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              placeholder="In DOP (RD$)"
              value={entereExtraHours}
              onChange={extraChangeHandler}
            />
          </div>
        </div>
        <div className={classes["form-main__actions"]}>
          <Button type="submit">Calculate</Button>
        </div>
      </form>
    </div>
  );
}

export default SalaryForm;
