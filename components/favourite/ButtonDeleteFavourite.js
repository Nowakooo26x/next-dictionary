

import React from "react";

import { useDeleteFavouriteWordMutation } from "redux/services/dictionaryAPI";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ButtonDeleteFavourite({ id }) {
  const [deleteFavouriteWord] = useDeleteFavouriteWordMutation();

  const handleClick = (id) => {
    deleteFavouriteWord(id);
  };

  return (
    <DeleteForeverIcon
      onClick={() => {
        handleClick(id);
      }}
    />
  );
}

export default ButtonDeleteFavourite;
