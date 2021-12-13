import { css } from 'styled-components';
import theme from '../index';

export default function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointName) => css`
    @media screen and (min-width: ${theme.breakpoints[breakpointName]}px) {
      ${cssByBreakpoints[breakpointName]};
    }
  `);
}
