export default function Label({ htmlFor, children }) {
  return <label htmlFor={htmlFor} className="text-base font-semibold">{children}</label>;
}
