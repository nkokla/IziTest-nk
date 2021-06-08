import React, { useMemo } from "react";

import { HeadLine, Table } from "./DataGrid.styled";
import { headersDataType } from "./helper";
import DataGridBody from "./DataGridBody";
import DataGridHead from "./DataGridHead";

function DataGrid({
  headersData = [],
  data = [],
}: {
  headersData: Array<headersDataType>;
  data: Array<any>;
}) {
  const dataSetHead = useMemo(
    () => headersData.map(({ name }) => name),
    [headersData]
  );

  return (
    <Table>
      <thead>
        <HeadLine>
          <DataGridHead headersData={headersData} />
        </HeadLine>
      </thead>
      <tbody>
        <DataGridBody data={data} dataSetHead={dataSetHead} />
      </tbody>
    </Table>
  );
}

export default DataGrid;
