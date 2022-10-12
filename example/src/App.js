import './App.css';
import React ,{ useEffect, useState } from 'react';
import {NestedSelect} from 'multi-nested-select' 

const App = () => {
  const [response, setResponse] = useState([]);
  const data = [
    {
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
    },
    {
        "name": "Azerbaijan",
        "code": "AZ",
        "zones": [],
        "count": 0,
        "continent": "Asia",
        "phoneNumberPrefix": 994,
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
            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
        }
    },
    {
        "name": "Bahrain",
        "code": "BH",
        "zones": [],
        "count": 0,
        "continent": "Asia",
        "phoneNumberPrefix": 973,
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
            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
        }
    },
    {
        "name": "Bangladesh",
        "code": "BD",
        "zones": [],
        "count": 0,
        "continent": "Asia",
        "phoneNumberPrefix": 880,
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
            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
        }
    },
    {
        "name": "China",
        "code": "CN",
        "zones": [
            {
                "name": "Anhui",
                "code": "AH"
            },
            {
                "name": "Beijing",
                "code": "BJ"
            },
            {
                "name": "Chongqing",
                "code": "CQ"
            },
            {
                "name": "Fujian",
                "code": "FJ"
            },
            {
                "name": "Gansu",
                "code": "GS"
            },
            {
                "name": "Guangdong",
                "code": "GD"
            },
            {
                "name": "Guangxi",
                "code": "GX"
            },
            {
                "name": "Guizhou",
                "code": "GZ"
            },
            {
                "name": "Hainan",
                "code": "HI"
            },
            {
                "name": "Hebei",
                "code": "HE"
            },
            {
                "name": "Heilongjiang",
                "code": "HL"
            },
            {
                "name": "Henan",
                "code": "HA"
            },
            {
                "name": "Hubei",
                "code": "HB"
            },
            {
                "name": "Hunan",
                "code": "HN"
            },
            {
                "name": "Inner Mongolia",
                "code": "NM"
            },
            {
                "name": "Jiangsu",
                "code": "JS"
            },
            {
                "name": "Jiangxi",
                "code": "JX"
            },
            {
                "name": "Jilin",
                "code": "JL"
            },
            {
                "name": "Liaoning",
                "code": "LN"
            },
            {
                "name": "Ningxia",
                "code": "NX"
            },
            {
                "name": "Qinghai",
                "code": "QH"
            },
            {
                "name": "Shaanxi",
                "code": "SN"
            },
            {
                "name": "Shandong",
                "code": "SD"
            },
            {
                "name": "Shanghai",
                "code": "SH"
            },
            {
                "name": "Shanxi",
                "code": "SX"
            },
            {
                "name": "Sichuan",
                "code": "SC"
            },
            {
                "name": "Tianjin",
                "code": "TJ"
            },
            {
                "name": "Xinjiang",
                "code": "XJ"
            },
            {
                "name": "Tibet",
                "code": "YZ"
            },
            {
                "name": "Yunnan",
                "code": "YN"
            },
            {
                "name": "Zhejiang",
                "code": "ZJ"
            }
        ],
        "count": 31,
        "continent": "Asia",
        "phoneNumberPrefix": 86,
        "autocompletionField": "address1",
        "provinceKey": "PROVINCE",
        "labels": {
            "address1": "Full address",
            "address2": "Apartment, suite, etc.",
            "city": "City",
            "company": "Company",
            "country": "Country/region",
            "firstName": "First name",
            "lastName": "Last name",
            "phone": "Phone",
            "postalCode": "Postal code",
            "zone": "Province"
        },
        "optionalLabels": {
            "address2": "Apartment, suite, etc. (optional)"
        },
        "formatting": {
            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
            "show": "{firstName} {lastName}_{company}_{address1} {address2} {city}_{zip} {province}_{country}_{phone}"
        }
    },
    {
        "name": "Hong Kong SAR",
        "code": "HK",
        "continent": "Asia",
        "phoneNumberPrefix": 852,
        "autocompletionField": "address1",
        "provinceKey": "REGION",
        "labels": {
            "address1": "Address",
            "address2": "Apartment, suite, etc.",
            "city": "District",
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
            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}_{phone}",
            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province} {country}_{phone}"
        },
        "zones": [
            {
                "name": "Hong Kong Island",
                "code": "HK"
            },
            {
                "name": "Kowloon",
                "code": "KL"
            }
        ],
        "count": 3
    },
    {
        "name": "Bulgaria",
        "code": "BG",
        "zones": [],
        "count": 0,
        "continent": "Europe",
        "phoneNumberPrefix": 359,
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
            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
        }
    },
    {
        "name": "Croatia",
        "code": "HR",
        "zones": [],
        "count": 0,
        "continent": "Europe",
        "phoneNumberPrefix": 385,
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
            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
        }
    },
    {
        "name": "Congo - Kinshasa",
        "code": "CD",
        "zones": [],
        "count": 0,
        "continent": "Africa",
        "phoneNumberPrefix": 243,
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
            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
        }
    },
    {
        "name": "Côte d'Ivoire",
        "code": "CI",
        "zones": [],
        "count": 0,
        "continent": "Africa",
        "phoneNumberPrefix": 225,
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
            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
        }
    },
    {
        "name": "Djibouti",
        "code": "DJ",
        "zones": [],
        "count": 0,
        "continent": "Africa",
        "phoneNumberPrefix": 253,
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
            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
        }
    },
    {
        "name": "Egypt",
        "code": "EG",
        "zones": [
            {
                "name": "6th of October",
                "code": "SU"
            },
            {
                "name": "Al Sharqia",
                "code": "SHR"
            },
            {
                "name": "Alexandria",
                "code": "ALX"
            },
            {
                "name": "Aswan",
                "code": "ASN"
            },
            {
                "name": "Asyut",
                "code": "AST"
            },
            {
                "name": "Beheira",
                "code": "BH"
            },
            {
                "name": "Beni Suef",
                "code": "BNS"
            },
            {
                "name": "Cairo",
                "code": "C"
            },
            {
                "name": "Dakahlia",
                "code": "DK"
            },
            {
                "name": "Damietta",
                "code": "DT"
            },
            {
                "name": "Faiyum",
                "code": "FYM"
            },
            {
                "name": "Gharbia",
                "code": "GH"
            },
            {
                "name": "Giza",
                "code": "GZ"
            },
            {
                "name": "Helwan",
                "code": "HU"
            },
            {
                "name": "Ismailia",
                "code": "IS"
            },
            {
                "name": "Kafr el-Sheikh",
                "code": "KFS"
            },
            {
                "name": "Luxor",
                "code": "LX"
            },
            {
                "name": "Matrouh",
                "code": "MT"
            },
            {
                "name": "Minya",
                "code": "MN"
            },
            {
                "name": "Monufia",
                "code": "MNF"
            },
            {
                "name": "New Valley",
                "code": "WAD"
            },
            {
                "name": "North Sinai",
                "code": "SIN"
            },
            {
                "name": "Port Said",
                "code": "PTS"
            },
            {
                "name": "Qalyubia",
                "code": "KB"
            },
            {
                "name": "Qena",
                "code": "KN"
            },
            {
                "name": "Red Sea",
                "code": "BA"
            },
            {
                "name": "Sohag",
                "code": "SHG"
            },
            {
                "name": "South Sinai",
                "code": "JS"
            },
            {
                "name": "Suez",
                "code": "SUZ"
            }
        ],
        "count": 29,
        "continent": "Africa",
        "phoneNumberPrefix": 20,
        "autocompletionField": "address1",
        "provinceKey": "GOVERNORATE",
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
            "zone": "Governorate"
        },
        "optionalLabels": {
            "address2": "Apartment, suite, etc. (optional)"
        },
        "formatting": {
            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{province}_{city}_{zip}_{country}_{phone}"
        }
    }
]
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
          showDefaultValue={false}
          selectedValue={data}
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