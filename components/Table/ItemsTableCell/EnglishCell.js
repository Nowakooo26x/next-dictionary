import React from "react";

import TableCell from "@mui/material/TableCell";

function EnglishCell({ children, link }) {
  return (
    <TableCell>
      <a
        href={`${process.env.NEXT_PUBLIC_SERVER_OXFORD}${link}`}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </TableCell>
  );
}

export default EnglishCell;
