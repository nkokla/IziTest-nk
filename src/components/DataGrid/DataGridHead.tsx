import React, { Fragment } from "react";

import FilterModal from "./FilterModal";
import { HeadCell, Mark } from "./DataGrid.styled";
import { filterType, headersDataType } from "./helper";

const DataGridHead = ({
  filter,
  headersData,
  dispatcher,
}: {
  filter: filterType;
  headersData: Array<headersDataType>;
  dispatcher: Function;
}) => {
  const {
    modal: filterModal,
    key: filterKey,
    query: filterQuery,
    sort: filterType,
  } = filter;

  const setFilterModal = (name: string) =>
    name
      ? dispatcher({ type: "open-modal", modal: name })
      : dispatcher({ type: "close-modal" });
  const setFilterQuery = (query: string) =>
    dispatcher({ type: "set-query", query });
  const setFilterKey = (key: string, reset: Boolean = false) =>
    dispatcher({ type: "set-key", reset, key });
  const setFilterType = (sort: "date" | "az" | "za") =>
    dispatcher({ type: "set-sort", sort });

  return (
    <Fragment>
      {headersData.map(({ name, label }) => (
        <HeadCell key={name}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setFilterModal(filterModal === name ? "" : name);
            }}
          >
            {label}
            <Mark
              isMarked={
                filterKey === name &&
                (filterQuery !== "" || filterType !== "date")
              }
            />
          </div>
          {filterModal === name && (
            <FilterModal
              query={filterQuery}
              type={filterType}
              isFiltered={filterKey === name}
              onChangeQuery={(q: string) => {
                if (filterKey !== name) setFilterKey(name, true);
                setFilterQuery(q);
              }}
              onChangeType={(t: "date" | "az" | "za") => {
                if (filterKey !== name)
                  setFilterKey(t !== "date" ? name : "", true);
                setFilterType(t);
              }}
              onClickOut={() => setFilterModal("")}
            />
          )}
        </HeadCell>
      ))}
    </Fragment>
  );
};

export default DataGridHead;
