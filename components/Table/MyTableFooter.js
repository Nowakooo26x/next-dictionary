import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TablePagination from "@mui/material/TablePagination";

function myTableFooter({ length, page, setPage, rowsPerPage, setRowsPerPage }) {
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[15, 25, 100]}
      component="div"
      count={length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default myTableFooter;
