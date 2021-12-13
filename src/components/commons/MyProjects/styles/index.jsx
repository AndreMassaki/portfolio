import styled, { css } from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const MyProjectsWrapper = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
`;

MyProjectsWrapper.Card = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.secondary.main.color};
  transition: all .2s ease-in-out;
  width: 100%;
  :hover {
    transform: scale(1.05)
  }
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('order')}
`;

MyProjectsWrapper.CardImage = styled.img`
  ${propToStyle('width')}
  ${breakpointsMedia({
    xs: css`
      border-bottom: 3px solid ${({ theme }) => theme.colors.secondary.main.color};
    `,
    md: css`
      border-bottom: none;
    `,
  })}
`;

export default MyProjectsWrapper;
