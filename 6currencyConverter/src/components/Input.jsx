import React from "react";
import currencyIds from "./Currency";
const Input = ({
  tg,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "USD",
}) => {
  return (
    <div className="">
      <div className="flex p-2 justify-between">
        <h2>{tg}</h2> <h2>Currency Type</h2>
      </div>
      <div className="flex justify-between p-2">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
          className=" border-none outline-none text-1xl"
        />
        {/* <i class="fa-solid fa-arrows-rotate"></i> */}
        <select
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          className="border-none outline-none text-1xl"
        >
          {currencyIds.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
