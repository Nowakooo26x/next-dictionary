import React from "react";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function ButtonEnd() {
  const buttons = [
    <Button key="0">0</Button>,
    <Button key="1">1</Button>,
    <Button key="2">2</Button>,
    <Button key="3">3</Button>,
    <Button key="4">4</Button>,
    <Button key="5">5</Button>,
  ];

  return (
    <>
      <Typography variant="h6">Select rating</Typography>
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </>
  );
}

export default ButtonEnd;
