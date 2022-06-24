import React from "react";

import MyTableHead from "./MyTableHead";
import MyTableBody from "./MyTableBody";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

function MyTable({ data, columns, page, rowsPerPage, rowRecords }) {
  return (
    <>
      <TableContainer>
        <Table>
          <MyTableHead columns={columns} />
          <MyTableBody data={data} page={page} rowsPerPage={rowsPerPage} rowRecords={rowRecords}/>
        </Table>
      </TableContainer>
    </>
  );
}

export default MyTable;
