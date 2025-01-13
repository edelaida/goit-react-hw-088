import React, { useState } from 'react';
import Modal from "react-modal";
//import { ReactComponent as CloseIcon } from "./CloseIcon.svg";
import css from "./CustomModal.module.css";

export const CustomModal = ({ isOpen, onClose }) => {
    const [count, setCount] = useState(50);
    const [valtime, setValtime] = useState(new Date().toLocaleTimeString());
    
    // const timeMinut = new Date().getMinutes();
    // const timeHours = new Date().getHours();
      
    function increment() {
        setCount(count + 50);
    }
    function decrement() {
        if (count>50) { 
        setCount(count - 50)};
    }
    const change = event => {
        setValtime(event.target.value)
    }        
            
    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={css.moverlay}  
            className={css.mcontent}
            closeTimeoutMS={300}
            onRequestClose={()=>onClose()}
            ariaHideApp={false} >
            <buttom className={css.mclose} onClick={()=>onClose()}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L16 16" stroke="#2F2F2F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></buttom>
            <h2 className={css.water} >Add water</h2>
            <p className={css.choose} >Choose a value</p>
            <p className={css.amount}>Amount of water</p>
            <div className={css.countsum} > 
            <button className={css.incrbut}  onClick={increment} >+</button>
            <span className={css.incrcount}>{count} ml</span>
            <button className={css.incrbut} onClick={decrement} >-</button>
            </div>
            <p className={css.recording}>Recording time</p>
            <input className={css.inputtime} onChange={change} type="string" value={valtime} />
            
            <p className={css.enter}>Enter the value of the water used:</p>
            <input className={css.inputtime}  type="string" value={count} />
            <button className={css.btnsave} onClick={()=>onClose()}>Save</button>
        </Modal>
    )
}