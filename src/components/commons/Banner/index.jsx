import React from 'react';
import BannerWrapper from './styles';
import Text from '../../foundation/Text';

export default function Banner() {
  return (
    <BannerWrapper>
      <BannerWrapper.Image src="/images/Banner.jpg" />
      <BannerWrapper.Div>
        <Text
          tag="h1"
          variant="title"
          margin="0"
        >
          André Massaki
        </Text>
        <Text
          tag="h2"
          variant="subTitle"
          margin="0"
        >
          Portfólio
        </Text>
      </BannerWrapper.Div>
    </BannerWrapper>
  );
}
