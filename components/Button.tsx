import React from 'react';

type Props = {
  primary: boolean;
  label: string;
  onClick?: () => void;
};

function Button({ label = 'button', primary, onClick }: Props) {
  return (
    <button
      style={{
        cursor: 'pointer',
        background: primary ? 'skyblue' : 'red',
        width: 100,
        height: 50,
        outline: 'none',
        border: 'none',
        borderRadius: '15px',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
