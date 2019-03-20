import React from 'react';
import styled from 'styled-components';
const unWrappedLoading = ({ className }) => {
  return (
    <div className={className}>
      <p />
      <p />
      <p />
    </div>
  );
};
export default styled(unWrappedLoading)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    margin: 5px;
    width: 5px;
    height: 15px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: load;
    animation-duration: ${props => props.duration + 's'};
    &:nth-child(1) {
      animation-delay: ${props => props.duration / 3 + 's'};
    }
    &:nth-child(2) {
      animation-delay: ${props => (2 * props.duration) / 3 + 's'};
    }
  }
  @keyframes load {
    25% {
      transform: translateY(-10px);
    }
    75% {
      transform: translateY(10px);
    }
  }
`;
