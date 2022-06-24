import React, { useState } from "react";

import TableCell from "@mui/material/TableCell";
import Chip from "@mui/material/Chip";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

function PolishCell({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <TableCell>
      <Chip
        label={visible ? children : "translate"}
        onDelete={() => {
          setVisible(!visible);
        }}
        onClick={() => {
          setVisible(!visible);
        }}
        deleteIcon={visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        variant="outlined"
      />
    </TableCell>
  );
}

export default PolishCell;
