import React from "react";
import "./App.css";

import { DataGrid } from "./components";
import { dataHead, dataSet } from "./fakeData";

function App() {
  return (
    <div className="App">
      <DataGrid headersData={dataHead} data={dataSet} />
    </div>
  );
}

export default App;
