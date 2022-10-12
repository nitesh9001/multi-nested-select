import './App.css';
import React ,{ useEffect, useState } from 'react';
import {NestedSelect} from 'multi-nested-select' 

const App = () => {

  const [response, setResponse] = useState([]);
  const data = [{
    "name": "Afghanistan",
    "code": "AF",
    "zones": [],
    "continent": "Asia",
    "phoneNumberPrefix": 93,
    "autocompletionField": "address1",
    "provinceKey": "REGION",
    "labels": {
        "address1": "Address",
        "address2": "Apartment, suite, etc.",
        "city": "City",
        "company": "Company",
        "country": "Country/region",
        "firstName": "First name",
        "lastName": "Last name",
        "phone": "Phone",
        "postalCode": "Postal code",
        "zone": "Region"
    },
    "optionalLabels": {
        "address2": "Apartment, suite, etc. (optional)"
    },
    "formatting": {
        "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
        "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
    }
  }];
  const callbackFUnction = (value) => {
    console.log("value", value);
    setResponse(value);
  }
  
  return (
    <div className="App">
      <hr className='hr_dm'/>
      <h1>Multi Nested Select Component</h1>
      <div className='center-component'>
        <NestedSelect
          buttonContent="Save Selected"
          enableButton={true}
          state={true}
          // leading={true}
          // trailing={true}
          // trailingIcon={true}
          continent={false}
          // selectedValue={data}
          onChange={(v) => console.log("okay", v)}
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
          <tbody>
          {response && response.map((data,i) => <tr key={i}>
              <td>{i+1} .</td>
              <td>{data.name}</td>
              <td>{data.code}</td>
              <td>{data.zones?.length > 0 ? data.zones.map((item,j) => <tr key={j}>
                <td>{j+1}. {item.name}</td>
                </tr>
              ) :"-"}</td>
              <td>{data.zones?.length > 0 ? data.zones.map((item,j) => <tr key={j}>
                <td>{item.code}</td>
                </tr>
              ) :"-"}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;