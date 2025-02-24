import { useState } from "react";
import "./App.css";
import { Input } from "./components/index.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyData = useCurrencyInfo(); // ✅ Move hook call to top level

  const convert = () => {
    console.log(currencyData);
    const fromRate = currencyData.data[from];
    const toRate = currencyData.data[to];
    const val = ((toRate / fromRate) * amount).toFixed(3);
    setConvertedAmount(val);
  };

  return (
    <div className="bg-black w-full h-screen ">
      <div className="border-2 m-1.5 p-2 w-120 fixed top-22 right-60 bg-gray-50 rounded-md ">
        <h1 className="text-center text-3xl">Currency App</h1>
        <Input
          tg="From"
          selectCurrency={from}
          amount={amount}
          onCurrencyChange={setFrom}
          onAmountChange={setAmount}
        />
        <Input
          tg="To"
          selectCurrency={to}
          amount={convertedAmount}
          onCurrencyChange={setTo}
          onAmountChange={setConvertedAmount}
        />
        <div className="flex justify-center">
          <button
            onClick={convert}
            className="m-2 p-2 bg-green-600 w-full rounded-2xl text-white"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
