import React, { type FC } from "react";

interface ButtonType {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const Button: FC<ButtonType> = ({ label, onClick, disabled }) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
