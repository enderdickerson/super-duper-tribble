import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

const Loading = () => <Loader>Loading...</Loader>;

export default Loading;
