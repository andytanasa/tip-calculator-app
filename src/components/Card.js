import React, { useState } from "react";
import { StyledCard } from "../styledComponets/StyledCard.styled";
import Button from "./Button";
import { FaUserAlt, FaGrinStars } from "react-icons/fa";
const valueBtn = {
  one: "5%",
  two: "10%",
  three: {
    value: "15%",
    color: `${({ theme }) => theme.primary.strongCyan}`,
    bgcolor: `${({ theme }) => theme.neutral.lightGrayishCyanSec}`,
  },
  four: "25%",
  five: "50%",
  six: {
    value: "Custom",
    color: `${({ theme }) => theme.primary.strongCyan}`,
    bgcolor: `${({ theme }) => theme.neutra.lightGrayishCyanl}`,
  },
  seven: {
    value: "RESET",
    color: `${({ theme }) => theme.primary.strongCyan}`,
    bgcolor: `${({ theme }) => theme.neutra.lightGrayishCyanl}`,
  },
};

const Card = () => {
  const [inputValue, setInputValue] = useState(0);
  const [people, setPeople] = useState(1);
  const [total, setTotal] = useState("0,00");
  const [tip, setTip] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [specialTip, setSpecialTip] = useState(0);

  const persentage = (value) => {
    let totalAmount;
    const resultPersentage = (value / 100) * inputValue;

    setTip(() => parseFloat(resultPersentage / people).toFixed(2));

    if (inputValue !== 0) {
      totalAmount = resultPersentage + parseFloat(inputValue);
    } else {
      totalAmount = "0,00";
    }

    setTotal(() => parseFloat(totalAmount).toFixed(2));
  };
  const onCustomTip = () => {
    setShowInput(!showInput);

    console.log(specialTip);
  };

  const reset = () => {
    setPeople(1);
    setInputValue("");
    setTotal("0,00");
    setTip("0,00");
  };
  return (
    <StyledCard>
      <form autoComplete="off">
        <label htmlFor="Bill">Bill</label>
        <span>$</span>
        <input
          type="number"
          name="Bill"
          id="Bill"
          value={inputValue}
          onFocus={() => setInputValue("")}
          onChange={(e) => setInputValue(Number(e.currentTarget.value))}
        />
      </form>
      <div>
        <h6>Select Tip %</h6>
        <ul>
          <li onClick={() => persentage(5)}>
            <Button value={valueBtn.one}></Button>
          </li>
          <li onClick={() => persentage(10)}>
            <Button value={valueBtn.two} />
          </li>
          <li onClick={() => persentage(15, inputValue)}>
            <Button
              value={valueBtn.three.value}
              bgcolor={valueBtn.three.bgcolor}
              color={valueBtn.three.color}
              onClick={() => persentage(15, inputValue)}
            />
          </li>
          <li onClick={() => persentage(25, inputValue)}>
            <Button value={valueBtn.four} />
          </li>
          <li onClick={() => persentage(50, inputValue)}>
            <Button value={valueBtn.five} />
          </li>
          <li onClick={onCustomTip}>
            <Button
              value={valueBtn.six.value}
              bgcolor={valueBtn.six.bgcolor}
              color={valueBtn.six.color}
            />
          </li>
        </ul>
      </div>
      {showInput ? (
        <div>
          <h6>Special Tip</h6>
          <span>
            <FaGrinStars />
          </span>
          <input
            type="number"
            value={specialTip}
            onFocus={() => setSpecialTip("")}
            onChange={(e) => setSpecialTip(Number(e.currentTarget.value))}
          />
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <h6>Number of People</h6>
        <input
          type="text"
          value={people}
          onChange={(e) => setPeople(Number(e.currentTarget.value))}
        />
        <span>
          <FaUserAlt />
        </span>
      </div>
      <div>
        <div>
          <h6>Tip Amount</h6>
          <span>/person</span>

          <h6>Total</h6>
          <span>/person</span>
        </div>
        <div>
          <p>${tip}</p>
          <p>${total}</p>
        </div>
        <div onClick={reset}>
          <Button
            value={valueBtn.seven.value}
            bgcolor={valueBtn.seven.bgcolor}
            color={valueBtn.seven.color}
          />
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
