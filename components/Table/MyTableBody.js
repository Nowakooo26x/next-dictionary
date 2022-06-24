import React from "react";
import { useSelector } from "react-redux";

import ButtonAddFavourite from "components/favourite/ButtonAddFavourite";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import EnglishCell from "components/Table/ItemsTableCell/EnglishCell";
import TypeCell from "components/Table/ItemsTableCell/TypeCell";
import PolishCell from "components/Table/ItemsTableCell/PolishCell";
import AudioCell from "components/Table/ItemsTableCell/AudioCell";
import LevelCell from "components/Table/ItemsTableCell/LevelCell";

function MyTableBody({ data, page, rowsPerPage, rowRecords }) {
  console.log(`data1`);
  console.log(data);
  console.log(page);
  console.log(rowsPerPage);
  return (
    <TableBody>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          console.log(row);
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
              <EnglishCell link={row.url_definition}>{row.english}</EnglishCell>
              <TypeCell>{row.type}</TypeCell>
              <PolishCell>{row.polish}</PolishCell>
              <AudioCell link={row.url_audion_1}></AudioCell>
              <AudioCell link={row.url_audion_2}></AudioCell>
              <LevelCell>{row.level}</LevelCell>
              {rowRecords.map((item) => (
                <TableCell align="right">{item.funComponent(row.id)}</TableCell>
              ))}
            </TableRow>
          );
        })}
    </TableBody>
  );
}

export default MyTableBody;
