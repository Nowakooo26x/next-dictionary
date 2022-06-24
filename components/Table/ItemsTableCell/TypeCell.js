import React from 'react';

import TableCell from "@mui/material/TableCell";

function TypeCell({children}) {
    return (
    <TableCell>
        {children}
    </TableCell>
    );
}

export default TypeCell;