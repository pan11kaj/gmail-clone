import { Add, Chat, Dangerous, Delete, Drafts, HdrPlus, ImportantDevices, Inbox, Keyboard, KeyboardArrowDown, KeyboardArrowUp, Mail, MeetingRoom, NoEncryption, PlusOne, Schedule, Send, Snooze, Star, Videocam } from '@mui/icons-material'
import { Collapse, createStyles, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, makeStyles, Menu, Typography } from '@mui/material'
import { Box, height} from '@mui/system'
import React, { useRef, useState } from 'react'
import "../Styles/drawer.component.css";


const drawer_items = [ {name:"Compose",icon:<Add/>,url:""},{name:"Inbox",icon:<Inbox/>,url:""},{name:"Starred",icon:<Star/>,url:""},{name:"Soonzed",icon:<Snooze/>,url:""},{name:"Sents",icon:<Send/>,url:""},{name:"Drafts",icon:<Drafts/>,url:""}, ]


export default function DrawerNavigator({state}) {

    const [itemcollapse,setItemCollapse] = useState(false);

    const handleCollapse = ()=>itemcollapse?setItemCollapse(false):setItemCollapse(true);

  return (
        <Drawer className='drawer' variant="permanent" PaperProps={{style:{position:"fixed",top:"80px",width:state}}} >
            <List className="drawer-list-1">
            {
                drawer_items.map(data=>{
                return <ListItem >
                <ListItemButton>
                        <ListItemIcon>{data.icon}</ListItemIcon>
                        <ListItemText>{data.name}</ListItemText>
                        </ListItemButton>   
                </ListItem>
                })
            }
                <ListItem>
                    <ListItemButton onClick={handleCollapse}>
                        {
                            state==="80px"? <> <ListItemIcon> {itemcollapse?<KeyboardArrowUp/>:<KeyboardArrowDown/>}</ListItemIcon><ListItemText>more</ListItemText></> 
                            : <><ListItemText>more</ListItemText>
                            <ListItemIcon> {itemcollapse?<KeyboardArrowUp/>:<KeyboardArrowDown/>}</ListItemIcon></>
                        }
                       
                    </ListItemButton>
                </ListItem>
            <Collapse in={itemcollapse}>
                <ListItem sx={{display:'block'}}>
                  <ListItemButton>
                        <ListItemIcon><ImportantDevices/></ListItemIcon>
                        <ListItemText>Important</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon><Chat/></ListItemIcon>
                        <ListItemText>Chats</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon><Schedule/></ListItemIcon>
                        <ListItemText>Sheduled</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon><Dangerous/></ListItemIcon>
                        <ListItemText>Spam</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon><Mail/></ListItemIcon>
                        <ListItemText>All Mail</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon><Delete/></ListItemIcon>
                        <ListItemText>Bin</ListItemText>
                    </ListItemButton>
                </ListItem>          
                </Collapse>
            </List>
            <Divider/>
            <Typography align="center" color={"error"} variant="h2" fontWeight={"bold"} fontSize="large">{state==="80px"?"":"Meet"}</Typography>
            <List sx={{padding:"0px",overflowX:"hidden"}}>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <Videocam/>
                        </ListItemIcon>
                        <ListItemText>New Meeting</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                            <ListItemIcon>
                            <Keyboard/></ListItemIcon>

                        <ListItemText>Join Meeting</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
          )
}

