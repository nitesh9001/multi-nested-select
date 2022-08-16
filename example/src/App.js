import './App.css';
import React ,{ useEffect, useState } from 'react';
import {NestedSelect} from "multi-nested-select";

const App = () => {

  const [response, setResponse] = useState([]);

  const callbackFUnction = (value) => {
    console.log(value);
    setResponse(value);
  }
  
  return (
    <div className="App">
      <h1>Nested select component</h1>
      <div className='center-component'>
        <NestedSelect
          buttonContent="Done"
          enableButton={true}
          state={true}
          continent={true}
          callback={(val) => callbackFUnction(val)}/>
      </div>
      <h1>Selected Country-state</h1>
      <p>**(Not part of package only for showing response getting from package)</p>
      <div>
        <table className='center-table'>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Country Name</th>
              <th>Country Code</th>
              <th>State</th>
              <th>State code</th>
            </tr>
          </thead>
          {response && response.map((data,i) => <tr key={i}>
              <th>{i+1}</th>
              <th>{data.name}</th>
              <th>{data.code}</th>
              <th>{data.zones?.length > 0 ? data.zones.map((item,j) => <tr key={j}>
                <th>{j+1}. {item.name}</th>
                </tr>
              ) :"-"}</th>
              <th>{data.zones?.length > 0 ? data.zones.map((item,j) => <tr key={j}>
                <th>{item.code}</th>
                </tr>
              ) :"-"}</th>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default App;