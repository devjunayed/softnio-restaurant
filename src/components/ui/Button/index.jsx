/* eslint-disable react/prop-types */
const Button = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className=" px-4 py-2 uppercase font-semibold bg-buttonBg outline-none border-none"
    >
      {children}
    </button>
  );
};

export default Button;
