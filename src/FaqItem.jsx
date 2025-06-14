import { useState } from "react";

export function FaqItem(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <li
      onClick={handleClick}
      className="bg-[#415A77] border-[#4B7A94] border-2 rounded-lg p-2 text-lg"
    >
      {props.number}. {props.question}
      {open && <p className="text-xs">{props.answer}</p>}
    </li>
  );
}
