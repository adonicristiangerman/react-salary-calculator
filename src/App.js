import { useState, useEffect } from "react";
import SalaryForm from "./components/Form/SalaryForm";
import Result from "./components/UI/Result";

function App() {
  // const [totalAmount, setTotalAmount] = useState("");
  const [amounts, setAmounts] = useState({});

  function salaryCalculator(sal, bon, ext) {
    let totalAmount = sal + bon + ext;
    let sfs = 0;
    let isr = 0;
    let afp = 0;
    let excedent = 0;
    let totalDeduction = 0;
    let finalEarnings = 0;

    if (sal > 34685 && sal < 52027.41) {
      sfs = (sal + bon) * 0.0304;
      afp = (sal + bon) * 0.0287;
      excedent = sal + bon + ext - 34685;
      isr = (excedent - (sfs + afp)) * 0.15;
      totalDeduction = sfs + afp + isr;
      finalEarnings = totalAmount - totalDeduction;
    } else if (sal > 52027.4 && sal < 72260.26) {
      sfs = (sal + bon) * 0.0304;
      afp = (sal + bon) * 0.0287;
      excedent = sal + bon + ext - 34685;
      isr = (excedent - (sfs + afp)) * 0.2;
      totalDeduction = sfs + afp + isr;
      finalEarnings = totalAmount - totalDeduction;
    } else if (sal > 72260.25) {
      sfs = (sal + bon) * 0.0304;
      afp = (sal + bon) * 0.0287;
      excedent = sal + bon + ext - 34685;
      isr = (excedent - (sfs + afp)) * 0.25;
      totalDeduction = sfs + afp + isr;
      finalEarnings = totalAmount - totalDeduction;
    }

    setAmounts({
      totalAmount: totalAmount.toLocaleString(undefined, {
        style: "currency",
        currency: "DOP",
      }),
      sfs: sfs.toLocaleString(undefined, {
        style: "currency",
        currency: "DOP",
      }),
      isr: isr.toLocaleString(undefined, {
        style: "currency",
        currency: "DOP",
      }),
      afp: afp.toLocaleString(undefined, {
        style: "currency",
        currency: "DOP",
      }),
      excedent: excedent.toLocaleString(undefined, {
        style: "currency",
        currency: "DOP",
      }),
      totalDeduction: totalDeduction.toLocaleString(undefined, {
        style: "currency",
        currency: "DOP",
      }),
      finalEarnings: finalEarnings.toLocaleString(undefined, {
        style: "currency",
        currency: "DOP",
      }),
    });
  }

  useEffect(() => {
    console.log(amounts.total);
  }, [amounts.total]);

  return (
    <>
      <SalaryForm onFormSubmission={salaryCalculator} />
      <Result amountsObj={amounts} />
    </>
  );
}

export default App;
