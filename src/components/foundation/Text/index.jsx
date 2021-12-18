import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  title: css`
    ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.titleMD.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.titleMD.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.titleMD.lineHeight};
    `,
  })}
  `,
  subTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
  `,
  navLogo: css`
    ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.navLogoXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.navLogoXS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.navLogoXS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.navLogoMD.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.navLogoMD.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.navLogoMD.lineHeight};
    `,
  })}
  `,
  navItem: css`
    ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.navItemXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.navItemXS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.navItemXS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.navItemMD.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.navItemMD.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.navItemMD.lineHeight};
    `,
  })}
  `,
  title2: css`
    ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.title2XS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.title2XS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.title2XS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.title2MD.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.title2MD.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.title2MD.lineHeight};
    `,
  })}
  `,
  subTitle2: css`
    ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.subTitle2XS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.subTitle2XS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.subTitle2XS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.subTitle2MD.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.subTitle2MD.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.subTitle2MD.lineHeight};
    `,
  })}
  `,
  highlighted: css`
    ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.highlightedXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.highlightedXS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.highlightedXS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.highlightedMD.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.highlightedMD.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.highlightedMD.lineHeight};
    `,
  })}
  `,
  contactTitle: css`
    ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.contactTitleXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.contactTitleXS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.contactTitleXS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.contactTitleMD.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.contactTitleMD.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.contactTitleMD.lineHeight};
    `,
  })}
  `,
  formTitle: css`
    ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.formTitleXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.formTitleXS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.formTitleXS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.formTitleMD.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.formTitleMD.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.formTitleMD.lineHeight};
    `,
  })}
  `,
  formText: css`
    ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.formTextXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.formTextXS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.formTextXS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.formTextMD.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.formTextMD.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.formTextMD.lineHeight};
    `,
  })}
  `,
  formSubmit: css`
    ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.formSubmitXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.formSubmitXS.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.formSubmitXS.lineHeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.formSubmitMD.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.formSubmitMD.fontWeight};
      line-height: ${({ theme }) => theme.typographyVariants.formSubmitMD.lineHeight};
    `,
  })}
  `,
  paragraph: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph.lineHeight};
  `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]};
  ${propToStyle('backgroundColor')}
  ${propToStyle('border')}
  ${propToStyle('color')}
  ${propToStyle('display')}
  ${propToStyle('height')}
  ${propToStyle('margin')}
  ${propToStyle('order')}
  ${propToStyle('padding')}
  ${propToStyle('position')}
  ${propToStyle('textAlign')}
  ${propToStyle('textDecoration')}
  ${propToStyle('textTransform')}
  ${propToStyle('width')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph',
  children: null,
};
