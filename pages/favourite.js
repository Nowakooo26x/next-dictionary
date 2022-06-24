import React from "react";

import Layout from "components/Layout/Layout";
import { Typography } from "@mui/material";
import { useGetFavouriteWordsQuery } from "redux/services/dictionaryAPI";

import ButtonDeleteFavourite from "components/favourite/ButtonDeleteFavourite";
import ButtoAddStudy from "components/favourite/ButtoAddStudy"

import Item from "components/favourite/Item";
import MyTable from "components/Table/MyTable";

export default function Favourite() {
  const { data, error, isLoading, isFetching } = useGetFavouriteWordsQuery();

  const columns = [
    { id: "0", label: "English", minWidth: 120, align: "left" },
    { id: "1", label: "Type", minWidth: 120, align: "left" },
    { id: "2", label: "Polish", minWidth: 180, align: "left" },
    { id: "3", label: "AudioUS", minWidth: 90, align: "left" },
    { id: "4", label: "AudioGB", minWidth: 90, align: "left" },
    { id: "5", label: "Level", minWidth: 80, align: "left" },
    { id: "6", label: "Study", minWidth: 100, align: "right" },
    { id: "7", label: "Delete Favourite", minWidth: 100, align: "right" },
  ];

  //useAddStudyWordMutation
  const rowRecords = [
    { funComponent: (value)=>(<ButtoAddStudy id={value}/>)},
    { funComponent: (value)=>(<ButtonDeleteFavourite id={value}/>)},
  ]

  return (
    <Layout>
      <Typography variant="h3">Favourite</Typography>
      {isFetching ? (
        "loading..."
      ) : (
        <MyTable columns={columns} data={data} rowRecords={rowRecords}/>
      )}
    </Layout>
  );
}
