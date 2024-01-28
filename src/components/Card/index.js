import React from "react";

function Card({ children }) {
  return (
    <div className="w-96 h-96 rounded-md bg-[#F8EAE7] m-auto mt-10">
      {children}
    </div>
  );
}

export default Card;
