import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../../theme/utils/propToStyle';

const Grid = {
  Row: styled.div`
    display: flex;
    ${propToStyle('flexDirection')}
    ${propToStyle('gap')}
    ${propToStyle('marginBottom')}
  `,
  Col: styled.div`
    ${({ value }) => ((typeof value === 'number') ? css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * value) / 10}%;
      max-width: ${(100 * value) / 10}%;
    ` : breakpointsMedia({
    xs: value?.xs ? css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * value.xs) / 10}%;
      max-width: ${(100 * value.xs) / 10}%;
    ` : '',
    sm: value?.sm ? css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * value.sm) / 10}%;
      max-width: ${(100 * value.sm) / 10}%;
    ` : '',
    md: value?.md ? css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * value.md) / 10}%;
      max-width: ${(100 * value.md) / 10}%;
    ` : '',
    lg: value?.lg ? css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * value.lg) / 10}%;
      max-width: ${(100 * value.lg) / 10}%;
    ` : '',
    xl: value?.xl ? css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * value.xl) / 10}%;
      max-width: ${(100 * value.xl) / 10}%;
    ` : '',
    xxl: value?.xxl ? css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * value.xxl) / 10}%;
      max-width: ${(100 * value.xxl) / 10}%;
    ` : '',
  })
  )}

    ${({ offset }) => ((typeof offset === 'number') ? css`
      margin-left: ${(100 * offset) / 10}%;
    ` : breakpointsMedia({
    xs: offset?.xs ? css`
      margin-left: ${(100 * offset.xs) / 10}%;
    ` : '',
    sm: offset?.sm ? css`
      margin-left: ${(100 * offset.sm) / 10}%;
    ` : '',
    md: offset?.md ? css`
      margin-left: ${(100 * offset.md) / 10}%;
    ` : '',
    lg: offset?.lg ? css`
      margin-left: ${(100 * offset.lg) / 10}%;
    ` : '',
    xl: offset?.xl ? css`
      margin-left: ${(100 * offset.xl) / 10}%;
    ` : '',
    xxl: offset?.xxl ? css`
      margin-left: ${(100 * offset.xxl) / 10}%;
    ` : '',
  })
  )}
  `,
};

export default Grid;
