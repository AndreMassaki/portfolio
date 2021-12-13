import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.primary.main.color};
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

HeaderWrapper.Navbar = styled.nav`
  align-items: center;
  display: flex;
  list-style: none;
  li {
    margin: 0 .75rem;
  }
  li:nth-child(1) {
    margin: 0 .75rem 0 0;
  }
  li:last-child {
    margin: 0 0 0 .75rem;
  }
  a {
    color: #000;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary.main.color};
    }
  }
`;

export default HeaderWrapper;
