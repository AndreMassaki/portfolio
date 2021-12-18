import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: rgba(0, 0, 0, .5);
  transition: .5s;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

export default ModalWrapper;
