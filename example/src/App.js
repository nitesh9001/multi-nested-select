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
          selectedValue={data}
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