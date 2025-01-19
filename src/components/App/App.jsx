//import PaymentLis from "../PaymentList/PaymentList";
//import { CustomModal } from "../CustomModal/CustomModal.jsx";
// import Button from "../Button/Button";
// import Reader from "../Reader/Reader";
// import Timer from "../Timer/Timer";
// import initialPayments from "../../payments.json";
// import articles from "../../articles.json";
//import { useState } from "react";
//import UserForm from "../UserForm/UserForm";
// import zvtr from "../../assets/zavtrak.jpg";
// import ClickCounter from "../ClickCounter/ClickCounter";
// import Togler from "../Toggler/Togler";

import { HiArrowCircleDown } from "react-icons/hi";
import css from "./App.module.css";
import PageTitle from "../PageTitle/PageTitle";
import { useState } from "react";
//import { EditModal } from "../CustomModal/EditModal.jsx";
import { CustomModal } from "../CustomModal/CustomModal.jsx";
 
 

export default function App() {
  //const [text, setText] = useState("");
  // const [isTimerVisible, setIsTimerVisible] = useState(false);

  // const handleChange = (event) => {
  //   setText(event.target.value);
  // };
   // const handleAdd = (newUser) => {
  //    console.log(newUser);
  // };
  // const data={
  //   id: 21,
  //   count: 250,
  //   time: '12:20',
  //   }
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className={css.container}>     
       <button className={css.mshow}
        onClick={openModal}>Modal</button>      
      <PageTitle>
        Styling React Components
        <HiArrowCircleDown className={css.icon} />
      </PageTitle>
      {modalIsOpen && ( 
      <CustomModal closeModal={closeModal}/>)}
      {/* <EditModal  isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} /> */}
                  
        {/* <UserForm onAdd={handleAdd} /> */}             
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
