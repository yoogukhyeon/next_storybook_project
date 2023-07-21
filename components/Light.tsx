import React from 'react';

type Props = {
  variant: 'green' | 'yellow' | 'red';
  size?: number;
};

const Light = ({ variant = 'green', size = 50 }: Props) => {
  return <div style={{ background: variant, borderRadius: '50%', width: size, height: size }} />;
};

export default Light;
