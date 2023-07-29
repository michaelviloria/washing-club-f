import Link from "next/link";

export default function ButtonPrev() {
  return (
    <Link href="/">
      <button
        type="button"
        className="fixed z-10 px-3 py-2 text-white bg-gray-800 border-r border-gray-100 rounded max-w-max left-5 top-5 hover:bg-red-700 hover:text-white"
      >
        <div className="flex flex-row align-middle">
          <svg
            className="w-5 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="ml-1">Inicio</p>
        </div>
      </button>
    </Link>
  );
}
