import { HiArrowCircleDown } from "react-icons/hi";
import PaymentLis from "../PaymentList/PaymentList";
import PageTitle from "../PageTitle/PageTitle";
import Button from "../Button/Button";
import initialPayments from "../../payments.json";
import css from "./App.module.css";
import zvtr from "../../assets/zavtrak.jpg";

// const Panel = ({ title, children }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };npm install react-icons

export default function App() {
  return (
    <div className={css.container}>
      <PageTitle>
        Styling React Components
        <HiArrowCircleDown className={css.icon} />
      </PageTitle>

      <img src={zvtr} alt="" />
      <Button variant="primary">First</Button>
      <Button variant="secondary" type="submit">
        Second
      </Button>
      {/* <Panel title="reyting">
        <div className={css.container}>First panel content</div>
      </Panel>
      <Panel title="dosvid">
        <p className={css.text}>Secjnd panel content</p>
      </Panel>
      <Panel title="peremoga">
        <button>Third panel content</button>
      </Panel> */}
      <PaymentLis payments={initialPayments} />
    </div>
  );
}
