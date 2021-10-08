import React from 'react';
import styled from '@emotion/styled';
import Particles from 'react-particles-js';

import Shorter from './Shorter';

const Section = styled.section`
  background-size:cover;
  background-position:center center;
  height:100vh;
  z-index:1;
  position:relative;
  color: ${(props) => props.theme.colors.white};

  &:after {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    content:"";
    background: ${(props) => props.theme.colors.prussianBlue};
    z-index:-1;
  }
`;
const ParticlesContainer = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;

  div, canvas {
    height: 100vh;
  }
`;
const Slider = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 65px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  padding: 0;
  margin: 0;
  text-align: center;
`;
const SubTitle = styled.h2`
  display: block;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 1px;
  padding: 0;
  margin: 4px 0 35px 0;
  text-align: center;
`;

const PARTICLES_PARAMS = {
  particles: {
    number: {
      value: 100,
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

const Hero = () => (
  <Section>
    <ParticlesContainer>
      <Particles params={ PARTICLES_PARAMS } />
    </ParticlesContainer>
    <Slider>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <Title>
              URL Shortener
            </Title>
            <SubTitle>Simplify your links</SubTitle>
            <Shorter />
          </div>
        </div>
      </div>
    </Slider>
  </Section>
);

export default Hero;
