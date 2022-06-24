import React from "react";

import TableCell from "@mui/material/TableCell";

import AudiotrackIcon from "@mui/icons-material/Audiotrack";

function AudioCell({ link }) {
  return (
    <TableCell>
      <AudiotrackIcon
        onClick={() => {
          new Audio(
            `${process.env.NEXT_PUBLIC_SERVER_OXFORD}${link}`
          ).play();
        }}
      />
      <audio hidden>
        <source
          src={`${process.env.NEXT_PUBLIC_SERVER_OXFORD}${link}`}
          type="audio/mpeg"
        />
        Not support.
      </audio>
    </TableCell>
  );
}

export default AudioCell;
