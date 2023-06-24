export default function Form({ action, method, children }) {
  return (
    <form
      action={action}
      method={method}
      className="w-full px-1"
    >
      {children}
    </form>
  );
}
