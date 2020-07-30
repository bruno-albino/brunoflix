import React from 'react'
import styled from 'styled-components'
import SlickSlider from 'react-slick'

const Container = styled.ul`
    padding: 0;
    margin: 0;
    .slick-prev,
    .slick-next {
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 30px;
        height: 30px;
        transform: initial;
        &:before {
            font-size: 30px;
        }
    }

    .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }

  &:hover{
    z-index: 400;
    transform: translate3d(0px, 0px, 0px);
    width: 500px;
    height: 500px;
    transition-duration: 500ms;
    transition-delay: 0ms;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 500,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 