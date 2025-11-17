import { useState, useMemo } from "react";

const CurrencyConverter = () => {
  const [start, setStart] = useState("USD");
  const [target, setTarget] = useState("EUR");
  const [amount, setAmount] = useState(0);

  const converted = useMemo(() => {
    
  })

  const currencies = ["EUR", "USD", "RON"];
  const mapping = {
    USD: 1,
    EUR: 0.87,
    RON: 4.40
  }

  const conversion = useMemo(() => {
    const rate = mapping[target] / mapping[start];
    return amount * rate;
  }, [start, target, amount])
  return (
    <div className="w-[450px] m-auto p-[20px] bg-[#303030] relative top-[150px] rounded-[10px] h-[410px]">
      <h1 className="text-center text-white font-bold text-[1.8rem]">Currency Converter</h1>
      <div className="text-center flex flex-col gap-[10px] relative top-[15px]">
        <label className="text-white text-[1.1rem]">{start} to {target} Conversion</label>
        <input type="number" className="p-[8px] rounded-[10px]" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        <label className="text-white text-[1.1rem]">Start Currency:</label>
        <select className="p-[8px] rounded-[10px]" onChange={(e) => setStart(e.target.value)} value={start}>
          {
            currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))
          }
        </select>
        <label className="text-white text-[1.1rem]">Target Currency:</label>
        <select className="p-[8px] rounded-[10px]" onChange={(e) => setTarget(e.target.value)} value={target}>
          {
            currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))
          }
        </select>
      </div>
      <div id="results" className="text-center relative top-[40px]">
        <p className="text-[#34ebe8] text-[1.1rem]">Converted Amount: {conversion.toFixed(2)} EUR</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <CurrencyConverter />
  )
}