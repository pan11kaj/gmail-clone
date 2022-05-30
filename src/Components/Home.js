


import React from 'react'
import PropTypes from "prop-types";
function Home({tab}) {


    if(tab===0){

        return <h1>Fragment 1</h1>
    }

    if(tab === 1){
        return <h1>Fragment 2</h1>
    }

    if(tab === 2){
        return <h1>Fragment 3</h1>
    }
    
  return (
    <div>{tab}</div>
  );


}

Home.propTypes={
    tab:PropTypes.number
};
export default Home;