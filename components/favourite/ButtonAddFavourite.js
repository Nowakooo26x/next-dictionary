import React from "react";

import { usePostAddFavouriteWordMutation } from "redux/services/dictionaryAPI";

import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton } from "@mui/material";

function ButtonAddFavourite({ id }) {
  const [addFavouriteWord] = usePostAddFavouriteWordMutation();

  const handleClick = (id) => {
    addFavouriteWord(id);
  };

  return (
    <IconButton
      onClick={() => {
        handleClick(id);
      }}
    >
      <AddBoxIcon color="primary" />
    </IconButton>
  );
}

export default ButtonAddFavourite;
