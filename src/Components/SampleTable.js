import {
  ArrowDownward,
  ArrowUpward,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
  Star,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import * as React from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import "../Styles/sample.css";

const json_data = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: "null", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function SampleTable() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 40% 1fr 1.1fr",
          columnGap:"20px",
          borderBottom: "1px solid black",
          boxShadow:"0px 0px 0px 1px #E0E0E0",
          paddingTop:"7px",
          paddingBottom:"7px"
        }}
      >
        <Typography variant="h5">Customer</Typography>
        <Typography variant="h5">Subject</Typography>
        <Typography variant="h5" width={200}>Waiting Since</Typography>
        <Typography> </Typography>
      </div>
      {json_data.map((data) => {
        return (
          <>
            <div
            // className="child-container"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 3fr 1fr 1fr",
                columnGap:"100px",
                borderBottom: "1px solid black",
                boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.06)",
              }}
            >
              <Typography className="centered-data">{data.id}</Typography>
              <Typography >
                <p
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "390px",
                    fontWeight:"bold"
                  }}
                >
                  lorem13sdjhgkjsdfvkjriuetiuwer8t nskdbvkjbiuy983wurojmnc
                  sdfasdfasfas
                </p>
                <p
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "390px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat excepturi dolorum rem.
                </p>
              </Typography>
              <Typography className="centered-data">22/22/22</Typography>
              <Typography className="centered-data">
                <Star />
              </Typography>
            </div>
          </>
        );
      })}
    </div>
  );
}
/*





// const columns = [
//   {
//     Header:"ID",
//     accessor:"id"
//   },
//   {
//     Header:"first Name",
//     accessor:"firstName"
//   },
//   {
//     Header:"last Name",
//     accessor:"lastName"
//   },
//   {
//     Header:"Age",
//     accessor:"age"
//   }
// ]


<table {...getTableProps()} >
        <thead style={{color:"whitesmoke"}}>
          {
                //Looping the header rows:
                headerGroups.map(headerGroups=>(
                  <tr {...headerGroups.getHeaderGroupProps()}>
                      {
                        headerGroups.headers.map(column=>(
                        
                          <th {...column.getHeaderProps(column.getSortByToggleProps())}> <div style={{display:'flex'}}>{column.render("Header")} <span>{column.isSorted?(column.isSortedDesc?<ArrowUpward/>:<ArrowDownward/>):<ArrowDownward/>}</span></div></th>
                        ))
                      }
                  </tr>
                ))
          }
        </thead>
        
        <tbody {...getTableBodyProps()} style={{color:"white"}}>
          {
            page.map(row=>{
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell=>(
                      <td {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    ))
}
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div style={{width:"100%",display:"flex",justifyContent:"space-between"}} >
      <IconButton color="success" onClick={()=>previousPage()} disabled={!canPreviousPage}>
      <KeyboardArrowLeft color="error" fontSize="large" />
      </IconButton>
      
      <IconButton color="success" onClick={()=>nextPage()} disabled={!canNextPage}>
      <KeyboardArrowRight color="error" fontSize="large"  />
      </IconButton>
      </div>

      */
