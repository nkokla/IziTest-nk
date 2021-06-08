import styled, { css } from "styled-components";

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
const RadioMark = styled.div<{ isChecked?: Boolean }>`
  width: calc(100%);
  height: calc(100%);
  background-color: ${({ isChecked }) =>
    isChecked ? `#196cff` : `transparent`};
  border: 3px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  transition: background-color ease 250ms;
`;
export const Radio = styled.div.attrs<{ value: string; currentValue: string }>(
  ({ value, currentValue }) => ({
    children: <RadioMark isChecked={value === currentValue} />,
    isChecked: value === currentValue,
  })
)<{ currentValue: string; value: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background-color: #fff;
  border: 1px solid #56709c;
  border-radius: 50%;
  box-sizing: border-box;
  margin: 0 0.5em -1px 0;

  transition: border ease 250ms, margin ease 250ms;

  ${({ value, currentValue }) =>
    value === currentValue &&
    css`
      border: 2px solid #196cff;
      margin-bottom: -2px;
    `}
`;
