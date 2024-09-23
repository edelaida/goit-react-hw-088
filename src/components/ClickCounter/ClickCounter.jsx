import { useState } from "react";
import { useEffect } from "react";

export default function ClickCounter() {
  const [clicks, setClick] = useState(0);
  const [date, setDate] = useState(Date.now());

  const updateClick = () => {
    setClick(clicks + 1);
  };
  const updateDate = () => {
    setDate(Date.now());
  };

  useEffect(() => {
    console.log("localStorage.setItem");
    localStorage.setItem("ClickCount", clicks);
  }, [clicks]);

  useEffect(() => {
    console.log("useEffect on mount");
  }, []);

  useEffect(() => {
    console.log("useEffect", date);
  }, [date]);

  return (
    <>
      <button onClick={updateClick}>click : {clicks}</button>;
      <button onClick={updateDate}>Date: {date} </button>
    </>
  );
}
