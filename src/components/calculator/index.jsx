import React, { useState } from "react";
import css from "./css.module.css";

export const Calculator = () => {
  const [sign, setSign] = useState("");
  const [numValue1, setNumValue1] = useState("");
  const [numValue2, setNumValue2] = useState("");
  const [total, setTotal] = useState(0);

  const onClickInput = (e) => {
    e.preventDefault();
    if (sign && sign !== "=") {
      let newValue2 = e.currentTarget.value;
      setNumValue2(numValue2 + newValue2);
    }
    if (sign === "=") {
      setTotal(total);
    } else {
      let newValue1 = e.currentTarget.value;
      setNumValue1(numValue1 + newValue1);
      
    }
  };

  const handleValue = (e) => {
    e.preventDefault();

    if (sign) {
      let newValue2 = e.currentTarget.value;
      setNumValue2(numValue2 + newValue2);
    } else {
      let newValue1 = e.currentTarget.value;
      setNumValue1(numValue1 + newValue1);
    }
  };
  const handleValueAC = (e) => {
    e.preventDefault();
    setNumValue1("");
    setNumValue2("");
    setSign("");
    setTotal(0);
  };
  const handleValueSign = (e) => {
    e.preventDefault();
    let valueSign = e.currentTarget.value;
    console.log(valueSign);
    setSign(valueSign);
  };
  const handleValueSignDel = (e) => {
    e.preventDefault();
    if (numValue1 && !sign) {
      setNumValue1(numValue1.slice(0, -1));
    }
    if (numValue2) {
      setNumValue2(numValue2.slice(0, -1));
    }
  };
  const handleValuePluce = (e) => {
    e.preventDefault();
    setTotal(total * -1);
    setNumValue1(numValue1 * -1);
    setNumValue2(numValue2 * -1);
  };
  const handleValueEquals = (e) => {
    e.preventDefault();
    const numVal1 = Number(numValue1);
    const numVal2 = Number(numValue2);
    if (sign === "+") {
      setTotal(numVal1 + numVal2);
    }
    if (sign === "-") {
      setTotal(numVal1 - numVal2);
    }
    if (sign === "/") {
      setTotal(numVal1 / numVal2);
    }
    if (sign === "*") {
      setTotal(numVal1 * numVal2);
    }
    setSign("=");
  };

  return (
    <div className={css.body}>
      <form className={css.form}>
        <label className={css.label}>
          <input
            type="text"
            onChange={onClickInput}
            value={
              sign && sign !== "="
                ? numValue2
                : numValue1 && sign === "="
                ? total
                : numValue1
            }
            className={css.results}
          ></input>

          <div className={css.box_btn}>
            <input
              type="button"
              value={"AC"}
              name="AC"
              onClick={handleValueAC}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"<-"}
              name="<-"
              onClick={handleValueSignDel}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"%"}
              name="%"
              onClick={handleValueSign}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"/"}
              name="/"
              onClick={handleValueSign}
              className={css.button}
            ></input>
            <input
              type="button"
              value={7}
              name="7"
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"8"}
              name="8"
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"9"}
              name="9"
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"*"}
              name="*"
              onClick={handleValueSign}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"4"}
              name="4"
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"5"}
              name="5"
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"6"}
              name="6"
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"-"}
              name="-"
              onClick={handleValueSign}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"1"}
              name="1"
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"2"}
              name="2"
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"3"}
              name="3"
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"+"}
              name="+"
              onClick={handleValueSign}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"+-"}
              name="+-"
              onClick={handleValuePluce}
              className={css.button}
            ></input>
            <input
              type="button"
              value={0}
              name="0"
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"."}
              name="."
              onClick={handleValue}
              className={css.button}
            ></input>
            <input
              type="button"
              value={"="}
              name="="
              onClick={handleValueEquals}
              className={css.button}
            ></input>
          </div>
        </label>
      </form>
    </div>
  );
};
