
import { useState } from 'react';
import './App.css';
import DrawerNavigator from './Components/Drawer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SampleTable from './Components/SampleTable';
import SubHeader from './Components/SubHeader';

function App() {
  const [drawerWidth,setDrawerWidth] = useState("80px");
  const [homeTab,setHomeTab] = useState(0);

  return (
   <>

    <SampleTable/>
    {/* <Navbar setDrawerState={setDrawerWidth}/>
        <div style={{display:"grid",gridTemplateColumns:`${drawerWidth} auto`}}>
        <DrawerNavigator state={drawerWidth}/>
        <div>
        <SubHeader setTab={setHomeTab} tab={homeTab}/>
        <Home tab={homeTab} />

        </div>
        </div> */}
    
   </>
  );
}

export default App;
