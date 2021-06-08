import React from "react";
import "./App.css";

import { DataGrid } from "./components";
import { dataSet } from "./fakeData";

function App() {
  return (
    <div className="App">
      <DataGrid data={dataSet} />
    </div>
  );
}

export default App;
