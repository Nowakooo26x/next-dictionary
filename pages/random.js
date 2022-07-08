import React from "react";

import Layout from "components/Layout/Layout";
import MyTable from "components/Table/MyTable";
import Loading from "components/Loading";

import ButtonAddFavourite from "components/favourite/ButtonAddFavourite";

import { useGetRandomWordsQuery } from "redux/services/dictionaryAPI";
import { Typography } from "@mui/material";

export default function Random() {
  const { data, error, isLoading, isFetching } = useGetRandomWordsQuery();

  const columns = [
    { id: "0", label: "AudioUS", minWidth: 90, align: "left" },
    { id: "1", label: "AudioGB", minWidth: 90, align: "left" },
    { id: "2", label: "English", minWidth: 120, align: "left" },
    { id: "3", label: "Type", minWidth: 120, align: "left" },
    { id: "4", label: "Polish", minWidth: 180, align: "left" },
    { id: "5", label: "Level", minWidth: 80, align: "left" },
    { id: "6", label: "Favourite", minWidth: 100, align: "right" },
  ];

  const rowRecords = [
    { funComponent: (value)=>(<ButtonAddFavourite id={value}/>)},
  ]

  return (
    <Layout>
      <Typography variant="h3">Random</Typography>
      {isFetching ? (
        <Loading/>
      ) : (
        <>
          {/*<Sort/>
          <SortLetter/>*/}
          <MyTable columns={columns} data={data} rowRecords={rowRecords}/>
        </>
      )}
    </Layout>
  );
}
