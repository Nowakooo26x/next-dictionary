import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function myTableHead( {columns} ) {
    return ( 
        <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, maxWidth: column.minWidth }}
                  >
                      <b>{column.label}</b>
                  </TableCell>
                ))}
              </TableRow>
        </TableHead>
    );
}

export default myTableHead;