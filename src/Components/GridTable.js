import { ArrowDownward, ArrowUpward, Star } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import "../Styles/xyz.css";
const json_data = [
  { id: 1, subject: "Snow", customer: "Jon", age: 35 },
  { id: 2, subject: "Lannister", customer: "Cersei", age: 42 },
  { id: 3, subject: "Lannister", customer: "Jaime", age: 45 },
  { id: 4, subject: "Stark", customer: "Arya", age: 16 },
  { id: 5, subject: "Targaryen", customer: "Daenerys", age: null },
  { id: 6, subject: "Melisandre", customer: "null", age: 150 },
  { id: 7, subject: "Clifford", customer: "Ferrara", age: 44 },
  { id: 8, subject: "Frances", customer: "Rossini", age: 36 },
  { id: 9, subject: "Roxie", customer: "Harvey", age: 65 },
];
export default function GridTable() {
  const [data, setData] = useState(json_data);
  const [order, setOrder] = useState("ASC");
  const [sortedColumns,setSortedColumns] =useState({
      customer:false,
      subject:false,
      waitSince:false,
  });

  const sortData = (col) => {
    if(col === "subject"){
        if (order === "ASC") {
            const sort = [...data].sort(
        (a, b) => a[col].toLowerCase() > b[col].toLowerCase()?1:-1
      );
      setData(sort);
      setOrder("DESC");
      setSortedColumns(pre=>{return {...pre,customer:true}});
    }
    if (order === "DESC") {
        const sort = [...data].sort(
          (a, b) => a[col].toLowerCase() < b[col].toLowerCase()?1:-1
        );
        setData(sort);
        setOrder("ASC");
      setSortedColumns(pre=>{return {...pre,customer:false}});
      }
    }

    if(col === "customer"){
        if (order === "ASC") {
            const sort = [...data].sort(
        (a, b) => a[col].toLowerCase() > b[col].toLowerCase()?1:-1
      );
      setData(sort);
      setOrder("DESC");
      setSortedColumns(pre=>{return {...pre,subject:true}});
    }
    if (order === "DESC") {
        const sort = [...data].sort(
          (a, b) => a[col].toLowerCase() < b[col].toLowerCase()?1:-1
        );
        setData(sort);
        setOrder("ASC");
      setSortedColumns(pre=>{return {...pre,subject:false}});
      }
    }


  };

  return (
    <>
      <div className="tbl-header">
        <table
          cellPadding={"0"}
          cellSpacing="0"
          border="0"
          style={{ width: "80%", margin: "auto" }}
        >
          <thead
            style={{
              boxShadow: "0px 0px 0px 1px #E0E0E0",
              columnGap: "10px",
            }}
          >
            <tr>
              <th style={{ width: "18%" }}>
                Customer{" "}
                <IconButton onClick={() => sortData("customer")}>
                    {
                        sortedColumns.customer?<ArrowUpward/>:<ArrowDownward/>
                    }
                  
                </IconButton>
              </th>
              <th style={{ width: "60%" }}>
                Subject{" "}
                <IconButton onClick={() => sortData("subject")}>
                    {
                      sortedColumns.subject?<ArrowUpward/>:<ArrowDownward/>
                    }
                </IconButton>{" "}
              </th>
              <th style={{ width: "20%" }}>
                Waiting since
                <IconButton>
                  <ArrowDownward />
                </IconButton>
              </th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table
          cellPadding="0"
          cellSpacing="0"
          border="0"
          style={{ width: "80%", margin: "auto" }}
        >
          <tbody>
            {data.map((data) => (
              <>
                <tr
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <td style={{ width: "10%" }}>{data.customer}</td>
                  <td style={{ width: "60%" }}>
                    <div>
                      <Typography
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          maxWidth: "100%",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {data.subject}
                      </Typography>
                      <Typography
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          maxWidth: "100%",
                          whiteSpace: "nowrap",
                        }}
                      >

                      </Typography>
                    </div>
                  </td>
                  <td style={{ width: "10%" }}>88/88/99</td>
                  <td>
                    <Star />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
