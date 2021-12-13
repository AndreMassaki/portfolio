import React from 'react';
import Logo from './styles';

export default function LogoWrapper({ children, ...props }) {
  return (
    <Logo href="/" {...props}>
      {children}
    </Logo>
  );
}
