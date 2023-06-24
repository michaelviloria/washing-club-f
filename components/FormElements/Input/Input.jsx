export default function Input({ type, id, name, placeholder = "" }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
    />
  );
}
