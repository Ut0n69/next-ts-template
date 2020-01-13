import styled, { keyframes } from 'styled-components';

const SLIDE_UP = keyframes`
  from {
    top: 200%;
  }
  to {
    top: 0;
  }
`;
export const slideUp = styled.div`
  animation-name: ${SLIDE_UP};
  animation-duration: 0.8s;
`;

const FADE_IN = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const fadeIn = styled.div`
  animation-name: ${FADE_IN};
  animation-duration: 3s;
`;
