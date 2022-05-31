import {
  ArrowDownward,
  ArrowUpward,
  CheckBox,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Star,
} from "@mui/icons-material";
import { Button, Checkbox, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../Styles/xyz.css";
import PropTypes from "prop-types";
import { CONSTANTS } from "../constants";
import TableSkeleton from "./TableSkeleton";
export default function GridTable({ json_data,table_type }) {

  const [data, setData] = useState(json_data);
  const [maxItems, setMaxItems] = useState(5);
  const [page, setPage] = useState(1);
  const [isLoading,setIsLoading] = useState(true);
  const [sortedColumns, setSortedColumns] = useState({
    customer: false,
    subject: false,
    waitingSince: false,
  });

  const sortData = (col) => {
    if (sortedColumns[col] === true) {
      const sort = [...data].sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setData(sort);
      setSortedColumns((pre) => {
        return { ...pre, [col]: false };
      });
      return;
    }
    const sort = [...data].sort((a, b) =>
      a[col].toString().toLowerCase() < b[col].toString().toLowerCase() ? 1 : -1
    );
    setData(sort);
    setSortedColumns((previousData) => {
      return { ...previousData, [col]: true };
    });
  };

  useEffect(() => setData((pre) => pre.slice(0, maxItems)), []);


  useEffect(() => {
    const originalData = [...json_data];
    const startIdx = (page - 1) * maxItems; // maxItem=5
    const endIdx = page * maxItems;
    setData(originalData.slice(startIdx, endIdx));

    setTimeout(()=>{

      setIsLoading(false);
    },2000);
  }, [page]);

  const paginate = (type) => {
    setPage((pre) => (type === "next" ? pre + 1 : pre - 1));
  };

  return (
    <>
      <Toaster />
      {
        isLoading?<TableSkeleton/>: 
       <>
      <div className="tbl-header">
        <table
          cellPadding={"0"}
          cellSpacing="0"
          border="0"
          style={{ width:"100%", margin: "auto",overflow:"hidden" }}
        >
          <thead
            style={{
              boxShadow: "0px 0px 0px 1px #E0E0E0",
              columnGap: "10px",
            }}
          >
            <tr>
              <th style={{ width: "15%" }}>
                Customer{" "}
                <IconButton
                  onClick={() => sortData("customer")}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {sortedColumns.customer ? <ArrowUpward /> : <ArrowDownward />}
                </IconButton>
              </th>
              <th style={{ width: "45%" }}>
                Subject{" "}
                <IconButton onClick={() => sortData("subject")}>
                  {sortedColumns.subject ? <ArrowUpward /> : <ArrowDownward />}
                </IconButton>{" "}
              </th>
                  {
                    table_type===CONSTANTS.TABLETYPES.ASSIGNED?<th style={{width:"15%"}}>assigned to</th>:null
                  }
              <th style={{ width: "20%" }}>
                Waiting since
                <IconButton onClick={() => sortData("waitingSince")}>
                  {sortedColumns.waitingSince ? (
                    <ArrowUpward />
                  ) : (
                    <ArrowDownward />
                  )}
                </IconButton>
              </th>
              <th style={{ width: "5%" }}> </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table
          cellPadding="0"
          cellSpacing="0"
          border="0"
          style={{ width: "100%", margin: "auto",overflow:"hidden" }}
        >
          <tbody>
            {data.map((data) => (
              <>
                <tr
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <td style={{ width: "15%",fontWeight:"bolder",fontFamily:"cursive",fontSize:"18px" }}>{data.customer}</td>
                  <td style={{ width: "45%" }}>
                    <div>
                      <Typography
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          maxWidth: "100%",
                          whiteSpace: "nowrap",
                          color:"black",
                          fontWeight:"bold"
                        }}
                        className="robotofont"
                      >
                        {data.subject.header}
                      </Typography>
                      <Typography
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          maxWidth: "100%",
                          whiteSpace: "nowrap",
                          
                        }}
                        className="ubuntufont"
                      >
                        {data.subject.subheader}
                      </Typography>
                    </div>
                  </td>
                        {
                          table_type===CONSTANTS.TABLETYPES.ASSIGNED?<td style={{width:"15%",overflow:"hidden",textOverflow:"ellipsis",fontWeight:"800",fontSize:"11px"}}>
                          ps0802503@gmail.com
                        </td>:null
                        }
                  
                  <td style={{ width: "20%",fontWeight:"400",fontFamily:"cursive",fontSize:"18px"}}>{data.waitingSince}</td>
                  <td style={{ width: "5%" }}>
                  <input className="star" type="checkbox" title="favorites" /><br/><br/>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        
        <div
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <IconButton
            size="large"
            color="primary"
            onClick={() => paginate("previous")}
            disabled={page === 1 ? true : false}
          >
            <KeyboardArrowLeft fontSize="large" color="success" />
          </IconButton>
          <div className="pages-out-of" style={{width:"90%"}}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography>
                {page === Math.ceil(json_data.length / maxItems)
                  ? `${page * maxItems - maxItems + 1} -${
                      json_data.length
                    }   of ${json_data.length}`
                  : page * maxItems -
                    maxItems +
                    1 +
                    " - " +
                    page * maxItems +
                    " of " +
                    json_data.length}
              </Typography>
              <Button
                onClick={() =>
                  page === 1
                    ? toast.error("You are already in first page", {
                        duration: 1200,
                      })
                    : setPage(1)
                }
              >
                go to first
              </Button>
            </div>
          </div>

          <IconButton
            size="large"
            color="primary"
            onClick={() => paginate("next")}
            disabled={
              page === Math.ceil(json_data.length / maxItems) ? true : false //
            }
          >
            <KeyboardArrowRight fontSize="large" color="success" />
          </IconButton>
        </div>
       
      </div>
      </>
      }
    </>
  );
}
GridTable.propTypes = {
  json_data: PropTypes.arrayOf(
    PropTypes.shape({
      customer: PropTypes.string,
      waitingSince: PropTypes.string,
      subject: PropTypes.shape({
        header: PropTypes.string,
        subheader: PropTypes.string,
      }),
    })
  ),
  table_type:PropTypes.string,
  json_data:PropTypes.element.isRequired,
  table_type:PropTypes.element.isRequired
};
