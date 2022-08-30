import { useState, useRef } from "react";
import { formatTime } from "./formatTime";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  const isStart = useRef(false);
  const active = useRef();
  const refInterval = useRef(0);
  const [history, setHistory] = useState([]);

  function startTimer() {
    isStart.current = false;
    active.current.disabled = true;
    refInterval.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }
  const stopTimer = () => {
    setTime(time);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    setTime(0);
    active.current.disabled = false;
    setHistory([]);
  };
  const splitTimer = () => {
    setHistory([...history, formatTime(time)]);
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitTimer,
    history,
  };
};
export default useTimer;
