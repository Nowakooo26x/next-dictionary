import React from "react";

import { useGetLessonWordsQuery } from "redux/services/dictionaryAPI";
import { Grid, Typography } from "@mui/material";
import Layout from "components/Layout/Layout";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";

function CardFront({card}) {

    console.log(card)
  return (
    <Paper elevation={3} sx={{ m: 2, p: 3 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        
        <Grid item><b><Typography variant="h6">{card.study_word[0].english}</Typography></b></Grid>
        <Grid item>{card.study_word[0].type}</Grid>
      </Grid>
    </Paper>
  );
}

export default CardFront;
