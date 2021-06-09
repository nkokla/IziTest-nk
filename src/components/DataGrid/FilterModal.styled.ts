import styled from "styled-components";

export const Modal = styled.div<{ ref: any }>`
  width: 345px;
  height: 230px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(147, 163, 192, 0.5);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 2em;
  margin: 0.5em;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 500;
  position: absolute;
  left: 0;
  z-index: 1;
`;

export const ModalTitle = styled.div`
  font-weight: bold;
  margin: 1em 0;
`;

export const InputQuery = styled.input.attrs({ type: "text" })<{ ref: any }>`
  border: 1px solid #196cff;
  border-radius: 4px;
  padding: 1em;
`;

export const Label = styled.div`
  cursor: default;
`;
