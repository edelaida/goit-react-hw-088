import { useState } from "react";

export default function Reader({ items }) {
  const [selectedIdx, setSelctedIdx] = useState(0);
  const handlePrev = () => {
    setSelctedIdx(selectedIdx - 1);
  };
  const handleNext = () => {
    setSelctedIdx(selectedIdx + 1);
  };

  const currentItem = items[selectedIdx];
  //   console.log(currentItem);

  const totalItems = items.length;

  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === totalItems - 1;
  return (
    <div>
      <div>
        <button onClick={handlePrev} disabled={isFirst}>
          Prev
        </button>
        <button onClick={handleNext} disabled={isLast}>
          Next
        </button>
      </div>
      <p>
        {selectedIdx + 1}/{totalItems}
      </p>
      <article>
        <h2>{currentItem.topic}</h2>
        <p>{currentItem.text}</p>
      </article>
    </div>
  );
}
