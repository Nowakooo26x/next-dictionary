import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Layout from "components/Layout/Layout";
import StudyTable from "components/study/StudyTable";
import { useGetStudyWordsQuery } from "redux/services/dictionaryAPI";

function Study() {
  const { data, error, isLoading, isFetching } = useGetStudyWordsQuery();

  const columns = [
    { id: "0", label: "English", minWidth: 120, align: "left" },
    { id: "1", label: "Type", minWidth: 120, align: "left" },
    { id: "2", label: "Level", minWidth: 80, align: "left" },
    { id: "3", label: "Interval", minWidth: 80, align: "left" },
    { id: "4", label: "Repetition", minWidth: 80, align: "left" },
    { id: "5", label: "Efactor", minWidth: 80, align: "left" },
    { id: "6", label: "Date Lesson", minWidth: 80, align: "left" }
  ];

  console.log(data);

  return (
    <Layout>
      <Typography variant="h3">Study</Typography>
      {isFetching ? "loading..." : <StudyTable data={data} columns={columns} />}
    </Layout>
  );
}

export default Study;
