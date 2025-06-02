export function Top10Item(props) {
  return (
    <li className="bg-[#415A77] border-[#778DA9] border-2 rounded-lg p-2 text-xl">
      1.{props.title}
      <p className="text-base">{props.update}</p>
    </li>
  );
}
