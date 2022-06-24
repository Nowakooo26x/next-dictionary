import React, { useState } from "react";

import MyTableMain from "./MyTableMain";
import MyTableFooter from "./MyTableFooter";

import Paper from "@mui/material/Paper";

function MyTable({ data, columns, rowRecords}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <MyTableMain
        rowRecords={rowRecords}
        columns={columns}
        data={data}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
      <MyTableFooter
        length={data.length}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </Paper>
  );
}

export default MyTable;
