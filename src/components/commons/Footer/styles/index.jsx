import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  width: 100%;
`;

FooterWrapper.Icon = styled.img`
  background: ${({ theme }) => theme.colors.secondary};
  height: 4.5rem;
  padding: 3px 1.5rem;
  transition: 300ms ease-in-out;
  :hover {
    opacity: .5;
  }
`;

export default FooterWrapper;
