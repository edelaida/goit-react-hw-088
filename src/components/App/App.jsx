import { HiArrowCircleDown } from "react-icons/hi";
import PaymentLis from "../PaymentList/PaymentList";
import PageTitle from "../PageTitle/PageTitle";
import Button from "../Button/Button";
import Reader from "../Reader/Reader";
import initialPayments from "../../payments.json";
import articles from "../../articles.json";
import { useState } from "react";
import css from "./App.module.css";
import zvtr from "../../assets/zavtrak.jpg";
import ClickCounter from "../ClickCounter/ClickCounter";
import Togler from "../Toggler/Togler";

export default function App() {
  const [text, setText] = useState("");
  const [clicks, setClick] = useState(0);

  const handleClick = () => {
    setClick(clicks + 1);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={css.container}>
      <PageTitle>
        Styling React Components
        <HiArrowCircleDown className={css.icon} />
      </PageTitle>
      <img src={zvtr} alt="" />
      <ClickCounter value={clicks} on onUpdate={handleClick} />
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
      <PaymentLis payments={initialPayments} />
    </div>
  );
}
