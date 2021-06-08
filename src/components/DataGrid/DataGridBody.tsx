import React, { Fragment } from "react";

import { TableCell } from "./DataGrid.styled";
import { sorter, filterType } from "./helper";

const DataGridBody = ({
  data,
  dataSetHead,
  filter,
}: {
  data: Array<any>;
  dataSetHead: Array<string>;
  filter: filterType;
}) => {
  const { key: filterKey, query: filterQuery, sort: filterType } = filter;

  const filterDataSet = (
    key: string,
    query: string = "",
    sortType: "date" | "az" | "za" = "date"
  ) =>
    data
      .filter((entry: any) => new RegExp(`${query}`).test(entry?.[key]))
      .sort(sorter(key, sortType));

  return (
    <Fragment>
      {filterDataSet(filterKey, filterQuery, filterType).map((entry: any) => (
        <tr key={entry.id}>
          {dataSetHead.map((key: string) => (
            <TableCell key={key}>{entry?.[key]}</TableCell>
          ))}
        </tr>
      ))}
    </Fragment>
  );
};

export default DataGridBody;
