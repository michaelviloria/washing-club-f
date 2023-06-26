"use client";
import { useRouter } from "next/navigation";

export default function ButtonPrev() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      className="max-w-max fixed left-5 top-5 bg-gray-800 text-white rounded border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
      onClick={handleGoBack}
    >
      <div className="flex flex-row align-middle">
        <svg
          className="w-5 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p className="ml-1">Regresar</p>
      </div>
    </button>
  );
}
