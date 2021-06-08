import styled, { css } from "styled-components";

import { Filter as FilterIcon } from "../Icon";

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

type MarkType = { isMarked?: Boolean };
export const Mark = styled(FilterIcon).attrs<MarkType>(({ isMarked }) => ({
  color: isMarked ? "#196cff" : "currentColor",
}))<MarkType>`
  display: inline-block;
  font-size: 1.1em;
  margin: 0 0.5em -2px;
`;
