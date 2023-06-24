export default function Form({ action, method, children }) {
  return (
    <form
      action={action}
      method={method}
      className="w-full max-w-md p-8 mx-auto bg-white rounded-md shadow-md"
    >
      {children}
    </form>
  );
}
