import { HiCake } from "react-icons/hi";
import clsx from "clsx";
import css from "./PaymentCard.module.css";

export default function PaymentCard({
  payment: {
    amount,
    description,
    cardNumber,
    cardType,
    cardOwner,
    date,
    isPaid,
  },
}) {
  const amountClassName = clsx(css.text, isPaid ? css.isPaid : css.isPending);
  return (
    <div className={css.container}>
      <HiCake />
      <p className={css.text}>Amount: {amount}</p>
      <p className={amountClassName}>status: {isPaid ? "Paid" : "Pending"}</p>
      <p className={css.text}>Description: {description}</p>
      <p className={css.text}>Card Number : {cardNumber} </p>
      <p className={css.text}>Card Type : {cardType} </p>
      <p className={css.text}>Card Holder Name : {cardOwner} </p>
      <p className={css.text}>Payment Date: {date} </p>
    </div>
  );
}
