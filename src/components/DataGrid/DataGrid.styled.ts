import styled, { css } from "styled-components";

export const Table = styled.table.attrs({})`
  border-collapse: collapse;
  margin: 0.5em;
  font-weight: 500;
`;

const tableCellStyle = css`
  min-width: 180px;
  padding: 1em 0.5em;
  text-align: left;
  box-sizing: border-box;
`;
export const TableCell = styled.td`
  ${tableCellStyle}
  color: #031b4a;
  border-bottom: 1px solid #e2e6ee;
`;

export const HeadLine = styled.tr``;
export const HeadCell = styled.th`
  ${tableCellStyle}
  color: #2b497c;
  background-color: #f7f9fa;
  font-weight: 700;
  position: relative;
  cursor: default;
`;

export const Mark = styled.div<{ isMarked?: Boolean }>`
  display: inline-block;
  width: 0.5em;
  height: 0.5em;
  margin: 0 0.5em;
  border-radius: 0.5em;
  border: 1px solid #196cff;
  background-color: ${({ isMarked }) => (isMarked ? "#196cff" : "transparent")};
`;
