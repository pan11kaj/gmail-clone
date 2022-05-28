import {
  AppsOutage,
  AppsOutlined,
  HelpOutlineRounded,
  Menu,
  QuestionMark,
  Search,
  Settings,
  SettingsInputAntenna,
  SettingsInputComposite,
  Support,
} from "@mui/icons-material";
import { Avatar, IconButton, TextField } from "@mui/material";
import React from "react";
import "../Styles/navbar.component.css";

export default function Navbar({ setDrawerState }) {
  return (
    <div className="navbar">
      <div style={{ width: "80%", display: "flex" }}>
        <IconButton
          onClick={() =>
            setDrawerState((previousState) =>
              previousState === "80px" ? "200px" : "80px"
            )
          }
        >
          <Menu fontSize="large" />
        </IconButton>
        <img src="/assets/maillogo.png" className="gmail-logo" width={70} height={70} />

        <TextField
          InputProps={{
            startAdornment: (
              <IconButton>
                <Search />
              </IconButton>
            ),
            endAdornment: (
              <IconButton>
                <SettingsInputComposite />
              </IconButton>
            ),
          }}
          placeholder="Search mail"
          variant="outlined"
          sx={{ width:"32rem", marginLeft: "" }}
        />
      </div>
      <div className="nav-right">
        <IconButton>
          <HelpOutlineRounded fontSize="large" />
        </IconButton>
        <IconButton>
          <Settings fontSize="large" />
        </IconButton>
        <IconButton>
          <AppsOutlined fontSize="large" />
        </IconButton>
        <IconButton>
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I7z6K5NX6AnpUl9zlz6_-509xO_lLb0pWpwIGqn=s32-c-mo" />
        </IconButton>
      </div>
    </div>
  );
}
