import { useState } from "react";

export default function Toggler() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={handleToggle}>{isOpen ? "Close" : "Open"} </button>
      {isOpen && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          asperiores ducimus sapiente quisquam dolore recusandae doloribus quasi
          sed ipsa, enim, consequuntur soluta a optio repellendus atque pariatur
          possimus voluptatibus nisi.
        </p>
      )}
    </div>
  );
}
