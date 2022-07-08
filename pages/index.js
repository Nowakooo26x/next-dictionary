import React from "react";
import { useGetWordsQuery } from "redux/services/dictionaryAPI";
import { Typography } from "@mui/material";
import Layout from "components/Layout/Layout";
import MyTable from "components/Table/MyTable";

import ButtonAddFavourite from "components/favourite/ButtonAddFavourite";

export default function Home() {
  const { data, error, isLoading, isFetching } = useGetWordsQuery();

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
      { isFetching ? "loading..." : <MyTable columns={columns} data={data} rowRecords={rowRecords} /> }
    </Layout>
  );
}
