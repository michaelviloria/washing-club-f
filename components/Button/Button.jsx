export default function Button({
  type,
  children,
  background = "",
  textColor = "",
}) {
  return (
    <button
      type={type}
      className={`py-2 rounded px-7 font-bold text-base ${background} ${textColor}`}
    >
      {children}
    </button>
  );
}
