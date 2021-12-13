import styled from 'styled-components';
import propToStyle from '../../utils/propToStyle';
import { TextStyleVariantsMap } from '../../../components/foundation/Text';

const Logo = styled.a`
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary.main.color};
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${TextStyleVariantsMap.navLogo};
  :hover {
    background: ${({ theme }) => theme.colors.primary.main.color};
    border: 1px solid ${({ theme }) => theme.colors.secondary.main.color};
    color: ${({ theme }) => theme.colors.secondary.main.color};
    text-decoration: underline;
    transition: ease-in-out .5s;
  }
`;

export default Logo;
