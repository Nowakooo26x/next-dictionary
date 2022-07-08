import React, { useState, useEffect } from "react";

import Cards from "components/lesson/Cards";
import Panel from "components/lesson/Panel";

import { useGetLessonWordsQuery } from "redux/services/dictionaryAPI";
import { Grid, Typography } from "@mui/material";
import Layout from "components/Layout/Layout";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import Loading from "components/Loading";

function Lesson() {
  const [isLesson, setIsLesson] = useState(false);
  const [length, setLength] = useState(0);
  //
  const { data, error, isLoading, isFetching } = useGetLessonWordsQuery();

  const cardsLength = data?.length || 0

  

  return (
    <Layout>
      <Typography variant="h3">Lesson</Typography>
      { isLesson ? 
        ( !isFetching? <Cards data={data} /> : <Loading/>) : 
        (<Panel/>)
      }
      <Button
        variant="outlined"
        onClick={() => {
          setIsLesson(!isLesson);
        }}
      >
        {!isLesson? ("Start lesson") : ("Show panel")} 
      </Button>
    </Layout>
  );
}

export default Lesson;
