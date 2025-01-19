import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import css from "./CustomModal.module.css";


const initialValue ={
    count: 50,
    time: new Date().toLocaleTimeString("ua-UA", { hour: "2-digit", minute: "2-digit", timeZone: "UTC", }),
    }

export const CustomModal = ({ closeModal }) => {
    const [water, setWater] = useState(initialValue)   
    
    function increment() {
        if (water.count < 5000) {
            setWater({ ...water, count: water.count + 50 })
        };
    }
    function decrement() {
        if (water.count > 50) { 
        setWater({ ...water, count: water.count - 50})};
    }
    const change = event => {
        setWater({ ...water, time: event.target.value });
    } 
    const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};
         
    const validationSchema = Yup.object().shape({
        count: Yup.number(),
        time: Yup.string().max(5),
    })
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValue}
            onSubmit={handleSubmit}            
           >
            <Form                 
                className={css.moverlay}  
                onClick={closeModal}     
            >
            <div className={css.mcontent} onClick={e => e.stopPropagation()} >    
            <buttom className={css.mclose} onClick={closeModal}>X</buttom>
            <h2 className={css.water} >Add water</h2>
            <p className={css.choose} >Choose a value</p>
            <p className={css.amount}>Amount of water</p>           
            <div className={css.countsum} > 
            <button className={css.incrbut}  onClick={increment} >+</button>
            <span className={css.incrcount}>{water.count} ml</span>
            <button className={css.incrbut} onClick={decrement} >-</button>
            </div>            
            <p className={css.recording}>Recording time</p>
            <Field className={css.inputtime} onChange={change} type="string" maxlength="5" value={water.time} />
            
            <p className={css.enter}>Enter the value of the water used:</p>
            <Field className={css.inputtime}  type="string" value={water.count} />
                <button className={css.btnsave} type="submit" onClick={() => onClose(water)}>Save</button>            
                </div>     
            </Form>
        </Formik>
    )
}