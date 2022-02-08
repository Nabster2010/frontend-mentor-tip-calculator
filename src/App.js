import { useEffect, useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [people, setPeople] = useState(1);
  const calculate = () => {
    if (isNaN(amount) || isNaN(tip)) {
      return;
    }
    if (people === 0) {
      return;
    }
    const totalTipAmount = (amount * tip) / 100;
    setTipAmount((totalTipAmount / people).toFixed(2));
    setTotal(((amount + totalTipAmount) / people).toFixed(2));
  };
  const reset = () => {
    setAmount(0);
    setTip(0);
    setTipAmount(0);
    setTotal(0);
    setPeople(1);
  };

  useEffect(() => {
    calculate();
  }, [amount, tip, people]);

  return (
    <main className=" grid min-h-screen w-full justify-center bg-lightGrayishCyan pb-8 text-veryDarkCyan">
      <header className=" w-full py-8 text-center">
        <h1 className="font-spaceMono text-3xl font-bold text-veryDarkCyan">
          SPLI <br /> TTER
        </h1>
      </header>

      <div className="flex h-full max-w-sm flex-col rounded-2xl bg-white p-8 md:max-w-5xl md:flex-row md:items-center  md:gap-8">
        <div className="md:w-1/2">
          <div className="mb-2 flex items-center justify-between">
            <h1 className="">Bill</h1>
            <span
              className={
                " text-sm text-red-500 " + (isNaN(amount) ? "" : "hidden")
              }
            >
              please enter a valid amount
            </span>
          </div>
          <div className="relative text-veryDarkCyan ">
            <span className="absolute inset-y-0 left-1 flex items-center pl-2">
              <img src="../images/icon-dollar.svg" alt="" />
            </span>
            <input
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder={0}
              type="text"
              pattern="\d*"
              maxlength="10"
              className={
                " w-full  rounded-md border border-transparent bg-VeryLightGrayishCyan px-4 py-2 pl-10 text-right  text-xl font-bold text-veryDarkCyan focus:border  focus:outline-none" +
                (isNaN(amount)
                  ? " focus::border-red-500 border-red-500"
                  : " focus:border-strongCyan ")
              }
            />
          </div>
          <h1 className="mt-8 mb-4">Select Tip %</h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <MyButton value={5} setTip={setTip} active={tip === 5} />
            <MyButton value={10} setTip={setTip} active={tip === 10} />
            <MyButton value={15} setTip={setTip} active={tip === 15} />
            <MyButton value={25} setTip={setTip} active={tip === 25} />
            <MyButton value={50} setTip={setTip} active={tip === 50} />

            <input
              type="text"
              pattern="\d*"
              maxlength="3"
              placeholder="Custom"
              value={tip}
              onChange={(e) => setTip(Number(e.target.value))}
              className={
                "  rounded-md border border-transparent bg-VeryLightGrayishCyan py-3 px-4  text-right text-xl font-bold text-veryDarkCyan placeholder:text-veryDarkCyan/80  focus:outline-none" +
                (isNaN(tip)
                  ? " focus::border-red-500 border-red-500"
                  : " focus:border-strongCyan ")
              }
            />
          </div>
          <div className="mt-8 mb-2 flex items-center justify-between">
            <h1 className="">Number of People </h1>
            <span
              className={" text-sm text-red-500 " + (people !== 0 && "hidden")}
            >
              can't be zero
            </span>
          </div>
          <div className="relative text-veryDarkCyan ">
            <span className="absolute inset-y-0 left-1 flex items-center pl-2">
              <img src="../images/icon-person.svg" alt="" />
            </span>
            <input
              placeholder={1}
              type="text"
              pattern="\d*"
              maxlength="5"
              min={1}
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className={
                "w-full rounded border border-transparent bg-VeryLightGrayishCyan px-4 py-2 pl-10 text-right text-xl  font-bold text-veryDarkCyan focus:border focus:border-strongCyan focus:outline-none" +
                (people === 0 ? " border-red-500 focus:border-red-500" : "")
              }
            />
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-veryDarkCyan px-8 pt-8 pb-4 text-white md:mt-0 md:flex md:h-full md:w-1/2 md:flex-col md:justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-sm font-bold">Tip Amount</h1>
                <h1 className="text-sm text-lightGrayishCyan">/ person</h1>
              </div>
              <h1 className="text-3xl font-bold text-strongCyan">
                ${tipAmount}
              </h1>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <h1 className="text-sm font-bold">Total</h1>
                <h1 className="text-sm text-lightGrayishCyan">/ person</h1>
              </div>
              <h1 className="text-3xl font-bold text-strongCyan">${total}</h1>
            </div>
          </div>
          <div className="mt-8 ">
            <button
              onClick={reset}
              disabled={!amount && !tip && people === 1}
              className="w-full  rounded-md bg-strongCyan py-3 text-lg font-bold text-veryDarkCyan hover:bg-hoverCyan disabled:bg-disableDark "
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default App;
