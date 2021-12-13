import React from 'react';
import FooterWrapper from './styles';
import Text from '../../foundation/Text';

export default function Footer() {
  return (
    <FooterWrapper>
      <Text
        tag="a"
        href="https://www.github.com/andremassaki"
        height="4.5rem"
      >
        <FooterWrapper.Icon src="/images/github.png" alt="GitHub" />
      </Text>
      <Text
        tag="a"
        href="https://www.linkedin.com/in/andré-luiz-massaki-júnior"
        height="4.5rem"
      >
        <FooterWrapper.Icon src="/images/linkedin.png" alt="Linkedin" />
      </Text>
    </FooterWrapper>
  );
}
