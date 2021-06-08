import React from "react";

import { HeadCell, HeadLine, Table, TableCell } from "./DataGrid.styled";

function DataGrid({ data = [] }: { data: Array<any> }) {
  return (
    <Table>
      <thead>
        <HeadLine>
          <HeadCell>Col 1</HeadCell>
          <HeadCell>Col 2</HeadCell>
          <HeadCell>Col 3</HeadCell>
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
