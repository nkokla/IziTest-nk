import React, { useReducer, useMemo } from "react";

import { Table, HeadLine } from "./DataGrid.styled";
import { initialFilter, filterReducer, headersDataType } from "./helper";
import DataGridBody from "./DataGridBody";
import DataGridHead from "./DataGridHead";

function DataGrid({
  headersData = [],
  data = [],
}: {
  headersData: Array<headersDataType>;
  data: Array<any>;
}) {
  const [filter, dispatchFilter] = useReducer(filterReducer, initialFilter);

  const dataSetHead = useMemo(
    () => headersData.map(({ name }) => name),
    [headersData]
  );

  return (
    <Table>
      <thead>
        <HeadLine>
          <DataGridHead
            filter={filter}
            headersData={headersData}
            dispatcher={dispatchFilter}
          />
        </HeadLine>
      </thead>
      <tbody>
        <DataGridBody data={data} dataSetHead={dataSetHead} filter={filter} />
      </tbody>
    </Table>
  );
}

export default DataGrid;
