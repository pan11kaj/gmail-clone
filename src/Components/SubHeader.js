import {
  Inbox,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LocalOffer,
  MoreVert,
  PersonPin,
  Refresh,
} from "@mui/icons-material";
import {
  Checkbox,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import "../Styles/subheader.component.css";
export default function SubHeader({setTab,tab}) {
  const changeTab =(e,v)=>setTab(v);


  return (
    <div className="subheader">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
        }}
      >
        <div className="subheader-left">
          <Checkbox color="warning" />
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="subheader-right">
          <Typography className="page-number">70-9000 |</Typography>
          <IconButton>
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton>
            <KeyboardArrowRight />
          </IconButton>
        </div>
      </div>
      <Divider sx={{ width: "100%" }} />
      <div className="subheader-middle">
        <Tabs
          value={tab}
          textColor="red"
          sx={{paddingLeft:"10px"}}
          onChange={changeTab}
          aria-label="basic tabs example"
          TabIndicatorProps={{style:{backgroundColor:"red",border:"1px solid orange",borderRadius:"30%"}}}
          
          indicatorColor="primary"
        >
          <Tab label="Primary"   icon={<Inbox color="error"/>} iconPosition="start" style={{color:tab===0?"red":"",fontFamily:"revert"}}/>
          <Tab label="Socials"  icon={<PersonPin color="success"/>} iconPosition="start" style={{color:tab===1?"green":"",fontFamily:"revert"}} />
          <Tab label="Promotions"  icon={<LocalOffer color="warning"/>} iconPosition="start" style={{color:tab===2?"darkorange":"",fontFamily:"revert"}}  />
        </Tabs>
        
      </div>
      
    </div>
  );
}
