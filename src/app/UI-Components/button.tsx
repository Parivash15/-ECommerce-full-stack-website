import { FC } from "react";

export const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button
      className="bg-black text-gray-100 px-4 py-4 shadow-lg
       hover:scale-105 duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
