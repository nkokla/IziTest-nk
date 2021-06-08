import styled, { css } from "styled-components";

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
const Radio = styled.div.attrs<{ value: string; currentValue: string }>(
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

export default Radio;
