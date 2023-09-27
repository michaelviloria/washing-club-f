export function MessagesForm({ message, success }) {
  return (
    <div className="messages-form">
      {message &&
        message.map((e) => (
          <div
            key={e}
            className={`${
              success ? "text-green-600" : "text-red-600"
            } px-5 py-2 `}
          >
            {e}
          </div>
        ))}
    </div>
  );
}
