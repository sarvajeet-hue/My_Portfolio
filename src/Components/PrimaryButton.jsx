import React from "react";

export const PrimaryButton = ({ children, className, implementFunction }) => {
  return (
    <button
      onClick={implementFunction}
      className={`px-3  py-2 border rounded-lg text-white hover:shadow-lg hover:shadow-black bg-blue-400  font-semibold font-serif transition-all ${className}`}
    >
      {children}
    </button>
  );
};
