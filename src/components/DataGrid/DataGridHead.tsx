import React, { Fragment } from "react";

import { HeadCell, Mark } from "./DataGrid.styled";
import { headersDataType } from "./helper";

const DataGridHead = ({
  headersData,
}: {
  headersData: Array<headersDataType>;
}) => (
  <Fragment>
    {headersData.map(({ name, label }) => (
      <HeadCell key={name}>
        <div>
          {label}
          <Mark />
        </div>
      </HeadCell>
    ))}
  </Fragment>
);

export default DataGridHead;
