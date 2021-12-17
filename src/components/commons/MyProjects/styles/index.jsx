import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const MyProjectsWrapper = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
`;

MyProjectsWrapper.Card = styled.a`
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  color: black;
  text-decoration: none;
  transition: all .1s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('order')}
  ${propToStyle('width')}
  ${propToStyle('margin')}
`;

MyProjectsWrapper.CardImage = styled.img`
  ${propToStyle('width')}
  ${propToStyle('borderRight')}
  ${propToStyle('borderBottom')}
`;

export default MyProjectsWrapper;
