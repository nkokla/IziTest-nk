import React, { useCallback, useRef, useEffect } from "react";

import {
  Modal,
  ModalTitle,
  InputQuery,
  Label,
  Radio,
} from "./FilterModal.styled";

type FilterModalProps = {
  query: string;
  type: string;
  isFiltered?: Boolean;
  onChangeQuery: Function;
  onChangeType: Function;
  onClickOut: Function;
};

function FilterModal({
  query,
  type: sortType,
  isFiltered,
  onChangeQuery,
  onChangeType,
  onClickOut,
}: FilterModalProps) {
  const modalRef = useRef();
  const selectRadio = useCallback(
    (value: string) => () => onChangeType(value),
    [onChangeType]
  );
  const updateQuery = useCallback(
    (event) => onChangeQuery(event.target.value),
    [onChangeQuery]
  );

  useEffect(() => {
    const handleClickOut = (e: any) => {
      const modalElement = modalRef?.current;
      let targetElement: any = e.target;
      do {
        if (targetElement === modalElement) return;
        targetElement = targetElement?.parentNode;
      } while (targetElement);
      onClickOut();
    };

    document.addEventListener("click", handleClickOut);
    return () => document.removeEventListener("click", handleClickOut);
  }, [onClickOut]);

  return (
    <Modal ref={modalRef}>
      <InputQuery
        defaultValue={isFiltered ? query : ""}
        onKeyUp={updateQuery}
      />
      <ModalTitle>Option de tri</ModalTitle>
      <Label onClick={selectRadio("date")}>
        <Radio currentValue={isFiltered ? sortType : "date"} value="date" />
        Trier par date de creation
      </Label>
      <Label onClick={selectRadio("az")}>
        <Radio currentValue={isFiltered ? sortType : "date"} value="az" />
        Trier de A &rarr; Z
      </Label>
      <Label onClick={selectRadio("za")}>
        <Radio currentValue={isFiltered ? sortType : "date"} value="za" />
        Trier de Z &rarr; A
      </Label>
    </Modal>
  );
}

export default FilterModal;
