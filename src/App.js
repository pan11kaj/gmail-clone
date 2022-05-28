
import { useState } from 'react';
import './App.css';
import DrawerNavigator from './Components/Drawer';
import Navbar from './Components/Navbar';
import SampleTable from './Components/SampleTable';

function App() {
  const [drawerState,setDrawerState] = useState("80px");
  return (
   <>

    <SampleTable/>
    {/* <Navbar setDrawerState={setDrawerState}/>

   <DrawerNavigator state={drawerState}/> */}
   </>
  );
}

export default App;
