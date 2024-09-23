import { HiArrowCircleDown } from "react-icons/hi";
//import PaymentLis from "../PaymentList/PaymentList";
import PageTitle from "../PageTitle/PageTitle";
// import Button from "../Button/Button";
// import Reader from "../Reader/Reader";
// import Timer from "../Timer/Timer";
// import initialPayments from "../../payments.json";
// import articles from "../../articles.json";
//import { useState } from "react";
import css from "./App.module.css";
import UserForm from "../UserForm/UserForm";
// import zvtr from "../../assets/zavtrak.jpg";
// import ClickCounter from "../ClickCounter/ClickCounter";
// import Togler from "../Toggler/Togler";

export default function App() {
  //const [text, setText] = useState("");
  // const [isTimerVisible, setIsTimerVisible] = useState(false);

  // const handleChange = (event) => {
  //   setText(event.target.value);
  // };

  const handleAdd = (newUser) => {
    console.log(newUser);
  };
  return (
    <div className={css.container}>
      <PageTitle>
        Styling React Components
        <HiArrowCircleDown className={css.icon} />
      </PageTitle>
      <UserForm onAdd={handleAdd} />
      {/* <img src={zvtr} alt="" />
      <hr />
      <ClickCounter />
      <hr />
      {isTimerVisible && <Timer />}
      <button onClick={() => setIsTimerVisible(!isTimerVisible)}>
        {isTimerVisible ? "Hide" : "Show"}
      </button>
      <hr />
      <Togler />
      <Togler />
      <input type="text" onChange={handleChange} />
      <p> {text} </p>
      <Button variant="primary">helou</Button>
      <Button variant="secondary" type="submit">
        Second
      </Button>
      <hr />
      <Reader items={articles} />
      <hr />
      <PaymentLis payments={initialPayments} /> */}
    </div>
  );
}

// <ClickCounter value={clicks} onUpdate={handleClick} />
