export default function ClickCounter({ value, onUpdate }) {
  return <button onClick={onUpdate}>Number on click : {value}</button>;
}
