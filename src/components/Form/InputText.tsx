import React from "react";
import styled from "styled-components";

import { Search as SearchIcon } from "../Icon";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #196cff;
  border-radius: 4px;
`;
const InputStyled = styled.input<{ onKeyUp?: Function }>`
  padding: 0.8rem 0.8rem 0.8rem 0;
  flex: 1;
  border: 0 none;
  border-radius: 4px;
  outline: 0 none;
`;
const SearchIconStyled = styled(SearchIcon)`
  font-size: 1.5rem;
  margin: 0 0.5rem;
`;

function InputText(
  { defaultValue, onKeyUp }: { defaultValue: string; onKeyUp?: any },
  ref: any
) {
  return (
    <InputWrapper>
      <SearchIconStyled />
      <InputStyled ref={ref} defaultValue={defaultValue} onKeyUp={onKeyUp} />
    </InputWrapper>
  );
}

export default React.forwardRef(InputText);
