import React, { useState, useEffect } from "react";

import ButtonFront from "components/lesson/ButtonFront";

import CardFront from "components/lesson/CardFront";
import { Grid } from "@mui/material";

function Cards({ data }) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item>
        <CardFront card={data[0]}/>
      </Grid>
      <Grid item>
        <ButtonFront/>
      </Grid>
    </Grid>
  );
}

export default Cards;
