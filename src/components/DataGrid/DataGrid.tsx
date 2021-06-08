import React from "react";

import { HeadLine, Table, TableCell } from "./DataGrid.styled";
import { headersDataType } from "./helper";
import DataGridHead from "./DataGridHead";

function DataGrid({
  headersData = [],
  data = [],
}: {
  headersData: Array<headersDataType>;
  data: Array<any>;
}) {
  return (
    <Table>
      <thead>
        <HeadLine>
          <DataGridHead headersData={headersData} />
        </HeadLine>
      </thead>
      <tbody>
        {data.map(({ email, jobName, customer }) => (
          <tr key={email}>
            <TableCell>{email}</TableCell>
            <TableCell>{jobName}</TableCell>
            <TableCell>{customer}</TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataGrid;
