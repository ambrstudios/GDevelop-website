import React from 'react';
import styled from 'styled-components';
import background from '../../img/background.png';

const BannerContainer = styled.div`
  width:100%;
  min-height: 20px;

  padding: 20px;
  display: block;
  text-align: center;

  background-image: url(${background});

  color: white;
`;

export default BannerContainer;
