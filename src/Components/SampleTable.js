import { ArrowDownward, ArrowUpward, KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp, Star } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import * as React from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import "../Styles/sample.css";


const json_data = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35},
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
    <div  style={{display:"grid",gridTemplateColumns:"1fr 3fr 1fr 1fr",width:"100%"}}>

          <Typography>Customer</Typography>
          <Typography>Subject</Typography>
          <Typography sx={{whiteSpace:"nowrap"}}>Waiting Since</Typography>
          <Typography></Typography>
          {
            json_data.map(data=>{
             return  <>
              <div><Typography>{data.id}</Typography></div>
          <Typography sx={{padding:"5px"}}><p style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"430px"}}>lorem13sdjhgkjsdfvkjriuetiuwer8t nskdbvkjbiuy983wurojmnc sdfasdfasfas</p>
          <p style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"430px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat excepturi dolorum rem.
          </p></Typography>
          <Typography sx={{padding:"5px"}}>
            sdkjafjksda
          </Typography>
          <Typography style={{maxWidth:"50px"}}><Star/></Typography>
              </>
            })
          }

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