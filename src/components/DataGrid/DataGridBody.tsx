import React, { Fragment } from "react";

import { TableCell } from "./DataGrid.styled";

const DataGridBody = ({
  data,
  dataSetHead,
}: {
  data: Array<any>;
  dataSetHead: Array<string>;
}) => {
  return (
    <Fragment>
      {data.map((entry: any) => (
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
