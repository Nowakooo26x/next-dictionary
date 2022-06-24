import React from "react";

import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
/*

english: "culture"
id: 1283
level: "a1"
polish: "kultura"
type: "noun"
url_audion_1: "/media/english/us_pron/c/cul/cultu/culture__us_2.mp3"
url_audion_2: "/media/english/uk_pron/c/cul/cultu/culture__gb_2.mp3"
url_definition: "/definition/english/culture_1"
_id: "629b4495ecf203bd907948cc"

*/
function Item({ value }) {
  const {
    english,
    level,
    polish,
    type,
    url_audion_1,
    url_audion_2,
    url_definition,
  } = value;
  return (
    <Paper variant="outlined" squareF sx={{m:0.5, p:1, pl:3}}>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
          sx={{ height: 80 }}
        >
          <Grid item xs={2}>
            {english}
          </Grid>
          <Grid item xs={2}>
            {type}
          </Grid>
          <Grid item xs={2}>
            {polish}
          </Grid>
          <Grid item xs={2}>
            {level}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default Item;
