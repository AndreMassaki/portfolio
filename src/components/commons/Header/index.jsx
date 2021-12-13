import React from 'react';
import HeaderWrapper from './styles';
import LogoWrapper from '../../../theme/Logo';
import Text from '../../foundation/Text';

const links = [
  {
    texto: 'Sobre Mim',
    url: '/about',
  },
  {
    texto: 'Contato',
    url: '/contact',
  },
];

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper
        height={{
          xs: '2rem',
          md: '3.5rem',
        }}
        width={{
          xs: '8.5rem',
          md: '12rem',
        }}
      >
        {'<ANDRÉ/>'}
      </LogoWrapper>
      <HeaderWrapper.Navbar>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="navItem" tag="a" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </HeaderWrapper.Navbar>
    </HeaderWrapper>
  );
}
