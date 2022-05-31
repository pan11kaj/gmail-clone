
import { useState } from 'react';
import './App.css';
import GridTable from './Components/GridTable';
import TableSkeleton from './Components/TableSkeleton';
import { CONSTANTS } from './constants';
import DrawerNavigator from "./Components/Drawer";
import Navbar from "./Components/Navbar";
function App() {
  const [drawerWidth,setDrawerWidth] = useState("80px");
  const [homeTab,setHomeTab] = useState(0);

  return (
   <>
    {/* <GridTable json_data={[

{

  customer:"PANKAJJI",
  waitingSince:"22/22/22",
  subject:{header:"jsdhnvjksdnkjv sdviush vsdyugweyf7qwyr789wqeiyryq23784yi723uhfkwbehjf bksdjgbhjsbjgsjdg",subheader:"dskjgniuehtiyew789y34879ntv gy w7834y 7weyys807yv87sdfy78dft798g79dfyv78sfdy07vydmf09ysdf097gysdf079gym0dfmygdf0g"}
},
{

  customer:"PANKAJJI",
  waitingSince:"22/22/22",
  subject:{header:"jsdhnvjksdnkjv sdviush vsdyugweyf7qwyr789wqeiyryq23784yi723uhfkwbehjf bksdjgbhjsbjgsjdg",subheader:"dskjgniuehtiyew789y34879ntv gy w7834y 7weyys807yv87sdfy78dft798g79dfyv78sfdy07vydmf09ysdf097gysdf079gym0dfmygdf0g"}
},
{

  customer:"2rfAJJI",
  waitingSince:"22/22/22",
  subject:{header:"jsdhnvjksdnkjv sdviush vsdyugweyf7qwyr789wqeiyryq23784yi723uhfkwbehjf bksdjgbhjsbjgsjdg",subheader:"dskjgniuehtiyew789y34879ntv gy w7834y 7weyys807yv87sdfy78dft798g79dfyv78sfdy07vydmf09ysdf097gysdf079gym0dfmygdf0g"}
},
{

  customer:"PANKAJJI",
  waitingSince:"22/22/22",
  subject:{header:"jsdhnvjksdnkjv sdviush vsdyugweyf7qwyr789wqeiyryq23784yi723uhfkwbehjf bksdjgbhjsbjgsjdg",subheader:"dskjgniuehtiyew789y34879ntv gy w7834y 7weyys807yv87sdfy78dft798g79dfyv78sfdy07vydmf09ysdf097gysdf079gym0dfmygdf0g"}
},
{

  customer:"PANKAJJI",
  waitingSince:"22/22/22",
  subject:{header:"jsdhnvjksdnkjv sdviush vsdyugweyf7qwyr789wqeiyryq23784yi723uhfkwbehjf bksdjgbhjsbjgsjdg",subheader:"dskjgniuehtiyew789y34879ntv gy w7834y 7weyys807yv87sdfy78dft798g79dfyv78sfdy07vydmf09ysdf097gysdf079gym0dfmygdf0g"}
},
{

  customer:"PANKAJJI",
  waitingSince:"22/22/22",
  subject:{header:"jsdhnvjksdnkjv sdviush vsdyugweyf7qwyr789wqeiyryq23784yi723uhfkwbehjf bksdjgbhjsbjgsjdg",subheader:"dskjgniuehtiyew789y34879ntv gy w7834y 7weyys807yv87sdfy78dft798g79dfyv78sfdy07vydmf09ysdf097gysdf079gym0dfmygdf0g"}
}
    ]} table_type={CONSTANTS.TABLETYPES.ASSIGNED}/> */}

{/* 
    <TableSkeleton/> */}





    {/* <SampleTable/> */}
    <Navbar setDrawerState={setDrawerWidth}/>
        <div style={{display:"grid",gridTemplateColumns:`${drawerWidth} auto`}}>
        <DrawerNavigator state={drawerWidth}/>
        <div>
        {/* <SubHeader setTab={setHomeTab} tab={homeTab}/> */}
        {/* <Home tab={homeTab} /> */}

        </div>
        </div>
    
   </>
  );
}

export default App;
