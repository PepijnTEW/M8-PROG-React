export function Top10Item(props) {
  return (
    <li className="bg-[#415A77] border-[#4B7A94] border-2 rounded-lg p-2 text-lg">
      {props.number}. {props.title}
      <p className="text-xs">{props.update}</p>
    </li>
  );
}
