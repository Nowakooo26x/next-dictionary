import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import EnglishCell from "components/Table/ItemsTableCell/EnglishCell";
import TypeCell from "components/Table/ItemsTableCell/TypeCell";
import PolishCell from "components/Table/ItemsTableCell/PolishCell";
import AudioCell from "components/Table/ItemsTableCell/AudioCell";
import LevelCell from "components/Table/ItemsTableCell/LevelCell";

import moment from "moment";

function StudyTable({ data, columns }) {
  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((item) => (
              <TableCell
                key={item.id}
                align={item.align}
                style={{ minWidth: item.minWidth, maxWidth: item.minWidth }}
              >
                <b>{item.label}</b>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            const date = moment(item.dueDate).format("HH:mm:ss DD-MM-YYYY");
            return (
              <TableRow hover key={item.id}>
                <EnglishCell link={item.url_definition}>
                  {item.english}
                </EnglishCell>
                <TypeCell>{item.type}</TypeCell>
                <LevelCell>{item.level}</LevelCell>
                <TableCell>{item.interval}</TableCell>
                <TableCell>{item.repetition}</TableCell>
                <TableCell>{item.efactor}</TableCell>
                <TableCell>{date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudyTable;
