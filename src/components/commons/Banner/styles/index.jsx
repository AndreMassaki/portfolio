import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const BannerWrapper = styled.div`
  ${breakpointsMedia({
    xs: css`
      height: 75vh
    `,
    md: css`
      height: 91vh;
    `,
  })}
`;

BannerWrapper.Image = styled.img`
  height: 100%;
  width: 100%;
`;

BannerWrapper.Div = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border: 5px solid ${({ theme }) => theme.colors.secondary};
  color: white;
  left: 50%;
  padding: 20px;
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
  ${breakpointsMedia({
    xs: css`
      top: 40%;
      width: 90%;
    `,
    sm: css`
      width: 80%;
    `,
    md: css`
      width: 85%;
    `,
    lg: css`
      width: 65%;
    `,
    xl: css`
      width: 60%;
    `,
  })}
`;

export default BannerWrapper;
