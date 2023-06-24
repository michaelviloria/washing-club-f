export default function Button({
  type,
  text,
  background = "",
  textColor = "",
}) {
  return (
    <button
      type={type}
      className={`py-2 rounded px-7 font-bold text-base ${background} ${textColor}`}
    >
      {text}
    </button>
  );
}
