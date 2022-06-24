import React from "react";

import { useAddStudyWordMutation } from "redux/services/dictionaryAPI";

import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton } from "@mui/material";

function ButtoAddStudy({ id }) {
  const [addStudyWordMutation] = useAddStudyWordMutation();

  const handleClick = (id) => {
    addStudyWordMutation(id);
  };

  return (
    <IconButton
      onClick={() => {
        handleClick(id);
      }}
    >
      <AddBoxIcon
        color="secondary"
      />
    </IconButton>
  );
}

export default ButtoAddStudy;
