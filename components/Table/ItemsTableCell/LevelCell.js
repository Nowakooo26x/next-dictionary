import React from 'react';

import TableCell from "@mui/material/TableCell";

function LevelCell({children}) {
    return (
    <TableCell>
        {children.toUpperCase()}
    </TableCell>
    );
}

export default LevelCell;