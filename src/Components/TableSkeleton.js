import { Typography } from '@mui/material';
import React from 'react';
import "../Styles/tableSkelaton.component.css";

export default function TableSkeleton() {
    const data = [1,2,3,4,5];
  return (
    <div>
        <div className="tableheader">
        <table
          cellPadding={"0"}
          cellSpacing="0"
          border="0"
          className="animate"
          >
 <thead>
 <tr>
              <th style={{ width: "15%" }} >
              </th>
              <th style={{ width: "45%" }} >
              </th>
                  {/* {
                    table_type===CONSTANTS.TABLETYPES.ASSIGNED?<th style={{width:"15%"}}>assigned to</th>:null
                  } */}
              <th style={{ width: "20%" }} ></th>
              <th style={{ width: "5%" }} ></th>
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
                  className="animate"
                >
                  <td style={{ width: "15%"}} className="animate-margin"></td>
                  <td style={{ width: "45%"}}  className="animate-margin">
                    <div>
                      <Typography
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          maxWidth: "100%",
                          whiteSpace: "nowrap",
                        }}
                        fontFamily="bold"
                      >
                      </Typography>
                      <Typography
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          maxWidth: "100%",
                          whiteSpace: "nowrap",
                          color: "gray",
                        }}
                      >
                      </Typography>
                    </div>
                  </td>
                        {/* {
                          table_type===CONSTANTS.TABLETYPES.ASSIGNED?<td style={{width:"15%",overflow:"hidden",textOverflow:"ellipsis"}}>
                          ps0802503@gmail.com
                        </td>:null
                        }
                   */}
                  <td style={{ width: "20%" }}></td>
                  <td style={{ width: "5%" }}>
                  {/* <input className="star" type="checkbox" title="favorites" /><br/><br/> */}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>


        </div>

            
    </div>
  )
}
