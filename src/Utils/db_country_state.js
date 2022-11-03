export const Countries = (arrayDefault, showContinent) => {
    var finalArray = [];
    if(showContinent !== true){
        if(arrayDefault?.length > 0){
            finalArray = arrayDefault;
        }else{
            finalArray = [{
                autocompletionField: "address1",
                code: "AF",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Afghanistan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 93,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AX",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Åland Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 358,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AL",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Albania",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 355,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "DZ",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Algeria",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 213,
                provinceKey: "PROVINCE",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AD",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Andorra",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 376,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AO",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Angola",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 244,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AI",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country} {zip}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Anguilla",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AG",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Antigua &amp; Barbuda",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AR",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Province"
                },
                name: "Argentina",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 54,
                provinceKey: "PROVINCE",
                zones: [{
                code: "B",
                name: "Buenos Aires Province"
              }, {
                code: "K",
                name: "Catamarca"
              }, {
                code: "H",
                name: "Chaco"
              }, {
                code: "U",
                name: "Chubut"
              }, {
                code: "C",
                name: "Buenos Aires (Autonomous City)"
              }, {
                code: "X",
                name: "Córdoba"
              }, {
                code: "W",
                name: "Corrientes"
              }, {
                code: "E",
                name: "Entre Ríos"
              }, {
                code: "P",
                name: "Formosa"
              }, {
                code: "Y",
                name: "Jujuy"
              }, {
                code: "L",
                name: "La Pampa"
              }, {
                code: "F",
                name: "La Rioja"
              }, {
                code: "M",
                name: "Mendoza"
              }, {
                code: "N",
                name: "Misiones"
              }, {
                code: "Q",
                name: "Neuquén"
              }, {
                code: "R",
                name: "Río Negro"
              }, {
                code: "A",
                name: "Salta"
              }, {
                code: "J",
                name: "San Juan"
              }, {
                code: "D",
                name: "San Luis"
              }, {
                code: "Z",
                name: "Santa Cruz"
              }, {
                code: "S",
                name: "Santa Fe"
              }, {
                code: "G",
                name: "Santiago del Estero"
              }, {
                code: "V",
                name: "Tierra del Fuego"
              }, {
                code: "T",
                name: "Tucumán"
              }]
              }, {
                autocompletionField: "address1",
                code: "AM",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Armenia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 374,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AW",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Aruba",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 297,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AC",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Ascension Island",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 247,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AU",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "Suburb",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postcode",
                  zone: "State/territory"
                },
                name: "Australia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 61,
                provinceKey: "STATE_AND_TERRITORY",
                zones: [{
                code: "ACT",
                name: "Australian Capital Territory"
              }, {
                code: "NSW",
                name: "New South Wales"
              }, {
                code: "NT",
                name: "Northern Territory"
              }, {
                code: "QLD",
                name: "Queensland"
              }, {
                code: "SA",
                name: "South Australia"
              }, {
                code: "TAS",
                name: "Tasmania"
              }, {
                code: "VIC",
                name: "Victoria"
              }, {
                code: "WA",
                name: "Western Australia"
              }]
              }, {
                autocompletionField: "address1",
                code: "AT",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Additional address",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Austria",
                optionalLabels: {
                  address2: "Additional address (optional)"
                },
                phoneNumberPrefix: 43,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AZ",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Azerbaijan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 994,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BS",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Bahamas",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BH",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Bahrain",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 973,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BD",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Bangladesh",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 880,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BB",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Barbados",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BY",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Belarus",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 375,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BE",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Belgium",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 32,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BZ",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Belize",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 501,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BJ",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Benin",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 229,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BM",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Bermuda",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BT",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Bhutan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 975,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BO",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Bolivia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 591,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BA",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Bosnia &amp; Herzegovina",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 387,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BW",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Botswana",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 267,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BR",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "State"
                },
                name: "Brazil",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 55,
                provinceKey: "STATE",
                zones: [{
                code: "AC",
                name: "Acre"
              }, {
                code: "AL",
                name: "Alagoas"
              }, {
                code: "AP",
                name: "Amapá"
              }, {
                code: "AM",
                name: "Amazonas"
              }, {
                code: "BA",
                name: "Bahia"
              }, {
                code: "CE",
                name: "Ceará"
              }, {
                code: "DF",
                name: "Federal District"
              }, {
                code: "ES",
                name: "Espírito Santo"
              }, {
                code: "GO",
                name: "Goiás"
              }, {
                code: "MA",
                name: "Maranhão"
              }, {
                code: "MT",
                name: "Mato Grosso"
              }, {
                code: "MS",
                name: "Mato Grosso do Sul"
              }, {
                code: "MG",
                name: "Minas Gerais"
              }, {
                code: "PA",
                name: "Pará"
              }, {
                code: "PB",
                name: "Paraíba"
              }, {
                code: "PR",
                name: "Paraná"
              }, {
                code: "PE",
                name: "Pernambuco"
              }, {
                code: "PI",
                name: "Piauí"
              }, {
                code: "RN",
                name: "Rio Grande do Norte"
              }, {
                code: "RS",
                name: "Rio Grande do Sul"
              }, {
                code: "RJ",
                name: "Rio de Janeiro"
              }, {
                code: "RO",
                name: "Rondônia"
              }, {
                code: "RR",
                name: "Roraima"
              }, {
                code: "SC",
                name: "Santa Catarina"
              }, {
                code: "SP",
                name: "São Paulo"
              }, {
                code: "SE",
                name: "Sergipe"
              }, {
                code: "TO",
                name: "Tocantins"
              }]
              }, {
                autocompletionField: "address1",
                code: "IO",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "British Indian Ocean Territory",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 246,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "VG",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "British Virgin Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BN",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Brunei",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 673,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BG",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Bulgaria",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 359,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BF",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Burkina Faso",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 226,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BI",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Burundi",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 257,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "KH",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Cambodia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 855,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CM",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Cameroon",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 237,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CA",
                continent: "North America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Province"
                },
                name: "Canada",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "PROVINCE",
                zones: [{
                code: "AB",
                name: "Alberta"
              }, {
                code: "BC",
                name: "British Columbia"
              }, {
                code: "MB",
                name: "Manitoba"
              }, {
                code: "NB",
                name: "New Brunswick"
              }, {
                code: "NL",
                name: "Newfoundland and Labrador"
              }, {
                code: "NT",
                name: "Northwest Territories"
              }, {
                code: "NS",
                name: "Nova Scotia"
              }, {
                code: "NU",
                name: "Nunavut"
              }, {
                code: "ON",
                name: "Ontario"
              }, {
                code: "PE",
                name: "Prince Edward Island"
              }, {
                code: "QC",
                name: "Quebec"
              }, {
                code: "SK",
                name: "Saskatchewan"
              }, {
                code: "YT",
                name: "Yukon"
              }]
              }, {
                autocompletionField: "address1",
                code: "CV",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Cape Verde",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 238,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BQ",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Caribbean Netherlands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 599,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "KY",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Cayman Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CF",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Central African Republic",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 236,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TD",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Chad",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 235,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CL",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Chile",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 56,
                provinceKey: "REGION",
                zones: [{
                code: "AP",
                name: "Arica y Parinacota"
              }, {
                code: "TA",
                name: "Tarapacá"
              }, {
                code: "AN",
                name: "Antofagasta"
              }, {
                code: "AT",
                name: "Atacama"
              }, {
                code: "CO",
                name: "Coquimbo"
              }, {
                code: "VS",
                name: "Valparaíso"
              }, {
                code: "RM",
                name: "Santiago Metropolitan"
              }, {
                code: "LI",
                name: "Libertador General Bernardo O'Higgins"
              }, {
                code: "ML",
                name: "Maule"
              }, {
                code: "NB",
                name: "Ñuble"
              }, {
                code: "BI",
                name: "Bío Bío"
              }, {
                code: "AR",
                name: "Araucanía"
              }, {
                code: "LR",
                name: "Los Ríos"
              }, {
                code: "LL",
                name: "Los Lagos"
              }, {
                code: "AI",
                name: "Aysén"
              }, {
                code: "MA",
                name: "Magallanes Region"
              }]
              }, {
                autocompletionField: "address1",
                code: "CN",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1} {address2} {city}_{zip} {province}_{country}_{phone}"
                },
                labels: {
                  address1: "Full address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Province"
                },
                name: "China",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 86,
                provinceKey: "PROVINCE",
                zones: [{
                code: "AH",
                name: "Anhui"
              }, {
                code: "BJ",
                name: "Beijing"
              }, {
                code: "CQ",
                name: "Chongqing"
              }, {
                code: "FJ",
                name: "Fujian"
              }, {
                code: "GS",
                name: "Gansu"
              }, {
                code: "GD",
                name: "Guangdong"
              }, {
                code: "GX",
                name: "Guangxi"
              }, {
                code: "GZ",
                name: "Guizhou"
              }, {
                code: "HI",
                name: "Hainan"
              }, {
                code: "HE",
                name: "Hebei"
              }, {
                code: "HL",
                name: "Heilongjiang"
              }, {
                code: "HA",
                name: "Henan"
              }, {
                code: "HB",
                name: "Hubei"
              }, {
                code: "HN",
                name: "Hunan"
              }, {
                code: "NM",
                name: "Inner Mongolia"
              }, {
                code: "JS",
                name: "Jiangsu"
              }, {
                code: "JX",
                name: "Jiangxi"
              }, {
                code: "JL",
                name: "Jilin"
              }, {
                code: "LN",
                name: "Liaoning"
              }, {
                code: "NX",
                name: "Ningxia"
              }, {
                code: "QH",
                name: "Qinghai"
              }, {
                code: "SN",
                name: "Shaanxi"
              }, {
                code: "SD",
                name: "Shandong"
              }, {
                code: "SH",
                name: "Shanghai"
              }, {
                code: "SX",
                name: "Shanxi"
              }, {
                code: "SC",
                name: "Sichuan"
              }, {
                code: "TJ",
                name: "Tianjin"
              }, {
                code: "XJ",
                name: "Xinjiang"
              }, {
                code: "YZ",
                name: "Tibet"
              }, {
                code: "YN",
                name: "Yunnan"
              }, {
                code: "ZJ",
                name: "Zhejiang"
              }]
              }, {
                autocompletionField: "address1",
                code: "CX",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Christmas Island",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 61,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CC",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Cocos (Keeling) Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 891,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CO",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Province"
                },
                name: "Colombia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 57,
                provinceKey: "PROVINCE",
                zones: [{
                code: "DC",
                name: "Capital District"
              }, {
                code: "AMA",
                name: "Amazonas"
              }, {
                code: "ANT",
                name: "Antioquia"
              }, {
                code: "ARA",
                name: "Arauca"
              }, {
                code: "ATL",
                name: "Atlántico"
              }, {
                code: "BOL",
                name: "Bolívar"
              }, {
                code: "BOY",
                name: "Boyacá"
              }, {
                code: "CAL",
                name: "Caldas"
              }, {
                code: "CAQ",
                name: "Caquetá"
              }, {
                code: "CAS",
                name: "Casanare"
              }, {
                code: "CAU",
                name: "Cauca"
              }, {
                code: "CES",
                name: "Cesar"
              }, {
                code: "CHO",
                name: "Chocó"
              }, {
                code: "COR",
                name: "Córdoba"
              }, {
                code: "CUN",
                name: "Cundinamarca"
              }, {
                code: "GUA",
                name: "Guainía"
              }, {
                code: "GUV",
                name: "Guaviare"
              }, {
                code: "HUI",
                name: "Huila"
              }, {
                code: "LAG",
                name: "La Guajira"
              }, {
                code: "MAG",
                name: "Magdalena"
              }, {
                code: "MET",
                name: "Meta"
              }, {
                code: "NAR",
                name: "Nariño"
              }, {
                code: "NSA",
                name: "Norte de Santander"
              }, {
                code: "PUT",
                name: "Putumayo"
              }, {
                code: "QUI",
                name: "Quindío"
              }, {
                code: "RIS",
                name: "Risaralda"
              }, {
                code: "SAP",
                name: "San Andrés &amp; Providencia"
              }, {
                code: "SAN",
                name: "Santander"
              }, {
                code: "SUC",
                name: "Sucre"
              }, {
                code: "TOL",
                name: "Tolima"
              }, {
                code: "VAC",
                name: "Valle del Cauca"
              }, {
                code: "VAU",
                name: "Vaupés"
              }, {
                code: "VID",
                name: "Vichada"
              }]
              }, {
                autocompletionField: "address1",
                code: "KM",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Comoros",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 269,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CG",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Congo - Brazzaville",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 243,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CD",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Congo - Kinshasa",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 243,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CK",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Cook Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 682,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CR",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Costa Rica",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 506,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CI",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Côte d'Ivoire",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 225,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "HR",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Croatia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 385,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CW",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Curaçao",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 599,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CY",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Cyprus",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 357,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CZ",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Czechia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 420,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "DK",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Denmark",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 45,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "DJ",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Djibouti",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 253,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "DM",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Dominica",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "DO",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Dominican Republic",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "EC",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Ecuador",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 593,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "EG",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{province}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Governorate"
                },
                name: "Egypt",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 20,
                provinceKey: "GOVERNORATE",
                zones: [{
                code: "SU",
                name: "6th of October"
              }, {
                code: "SHR",
                name: "Al Sharqia"
              }, {
                code: "ALX",
                name: "Alexandria"
              }, {
                code: "ASN",
                name: "Aswan"
              }, {
                code: "AST",
                name: "Asyut"
              }, {
                code: "BH",
                name: "Beheira"
              }, {
                code: "BNS",
                name: "Beni Suef"
              }, {
                code: "C",
                name: "Cairo"
              }, {
                code: "DK",
                name: "Dakahlia"
              }, {
                code: "DT",
                name: "Damietta"
              }, {
                code: "FYM",
                name: "Faiyum"
              }, {
                code: "GH",
                name: "Gharbia"
              }, {
                code: "GZ",
                name: "Giza"
              }, {
                code: "HU",
                name: "Helwan"
              }, {
                code: "IS",
                name: "Ismailia"
              }, {
                code: "KFS",
                name: "Kafr el-Sheikh"
              }, {
                code: "LX",
                name: "Luxor"
              }, {
                code: "MT",
                name: "Matrouh"
              }, {
                code: "MN",
                name: "Minya"
              }, {
                code: "MNF",
                name: "Monufia"
              }, {
                code: "WAD",
                name: "New Valley"
              }, {
                code: "SIN",
                name: "North Sinai"
              }, {
                code: "PTS",
                name: "Port Said"
              }, {
                code: "KB",
                name: "Qalyubia"
              }, {
                code: "KN",
                name: "Qena"
              }, {
                code: "BA",
                name: "Red Sea"
              }, {
                code: "SHG",
                name: "Sohag"
              }, {
                code: "JS",
                name: "South Sinai"
              }, {
                code: "SUZ",
                name: "Suez"
              }]
              }, {
                autocompletionField: "address1",
                code: "SV",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "El Salvador",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 503,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GQ",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Equatorial Guinea",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 240,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "ER",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Eritrea",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 291,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "EE",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Estonia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 372,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SZ",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Eswatini",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 268,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "ET",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Ethiopia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 251,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "FK",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Falkland Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 500,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "FO",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Faroe Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 298,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "FJ",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Fiji",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 679,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "FI",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Finland",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 358,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "FR",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "France",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 33,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GF",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "French Guiana",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 594,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "PF",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "French Polynesia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 689,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TF",
                continent: "Other",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "French Southern Territories",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 262,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GA",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Gabon",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 241,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GM",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Gambia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 220,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GE",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Georgia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 995,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "DE",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Additional address",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Germany",
                optionalLabels: {
                  address2: "Additional address (optional)"
                },
                phoneNumberPrefix: 49,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GH",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Ghana",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 233,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GI",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Gibraltar",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 350,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GR",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Greece",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 30,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GL",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Greenland",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 299,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GD",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Grenada",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GP",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Guadeloupe",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 590,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GT",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Guatemala",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 502,
                provinceKey: "REGION",
                zones: [{
                code: "AVE",
                name: "Alta Verapaz"
              }, {
                code: "BVE",
                name: "Baja Verapaz"
              }, {
                code: "CMT",
                name: "Chimaltenango"
              }, {
                code: "CQM",
                name: "Chiquimula"
              }, {
                code: "EPR",
                name: "El Progreso"
              }, {
                code: "ESC",
                name: "Escuintla"
              }, {
                code: "GUA",
                name: "Guatemala"
              }, {
                code: "HUE",
                name: "Huehuetenango"
              }, {
                code: "IZA",
                name: "Izabal"
              }, {
                code: "JAL",
                name: "Jalapa"
              }, {
                code: "JUT",
                name: "Jutiapa"
              }, {
                code: "PET",
                name: "Petén"
              }, {
                code: "QUE",
                name: "Quetzaltenango"
              }, {
                code: "QUI",
                name: "Quiché"
              }, {
                code: "RET",
                name: "Retalhuleu"
              }, {
                code: "SAC",
                name: "Sacatepéquez"
              }, {
                code: "SMA",
                name: "San Marcos"
              }, {
                code: "SRO",
                name: "Santa Rosa"
              }, {
                code: "SOL",
                name: "Sololá"
              }, {
                code: "SUC",
                name: "Suchitepéquez"
              }, {
                code: "TOT",
                name: "Totonicapán"
              }, {
                code: "ZAC",
                name: "Zacapa"
              }]
              }, {
                autocompletionField: "address1",
                code: "GG",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Guernsey",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 44,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GN",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Guinea",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 224,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GW",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Guinea-Bissau",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 245,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "GY",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Guyana",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 592,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "HT",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Haiti",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 509,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "HN",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Honduras",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 504,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "HK",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province} {country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "District",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Hong Kong SAR",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 852,
                provinceKey: "REGION",
                zones: [{
                code: "HK",
                name: "Hong Kong Island"
              }, {
                code: "KL",
                name: "Kowloon"
              }, {
                code: "NT",
                name: "New Territories"
              }]
              }, {
                autocompletionField: "address1",
                code: "HU",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{zip}{city}_{address1}_{address2}_{phone}",
                  show: "{firstName} {lastName}_{company}_{zip} {city}_{address1}_{address2}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Hungary",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 36,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "IS",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Iceland",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 354,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "IN",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "PIN code",
                  zone: "State"
                },
                name: "India",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 91,
                provinceKey: "STATE",
                zones: [{
                code: "AN",
                name: "Andaman and Nicobar Islands"
              }, {
                code: "AP",
                name: "Andhra Pradesh"
              }, {
                code: "AR",
                name: "Arunachal Pradesh"
              }, {
                code: "AS",
                name: "Assam"
              }, {
                code: "BR",
                name: "Bihar"
              }, {
                code: "CH",
                name: "Chandigarh"
              }, {
                code: "CG",
                name: "Chhattisgarh"
              }, {
                code: "DN",
                name: "Dadra and Nagar Haveli"
              }, {
                code: "DD",
                name: "Daman and Diu"
              }, {
                code: "DL",
                name: "Delhi"
              }, {
                code: "GA",
                name: "Goa"
              }, {
                code: "GJ",
                name: "Gujarat"
              }, {
                code: "HR",
                name: "Haryana"
              }, {
                code: "HP",
                name: "Himachal Pradesh"
              }, {
                code: "JK",
                name: "Jammu and Kashmir"
              }, {
                code: "JH",
                name: "Jharkhand"
              }, {
                code: "KA",
                name: "Karnataka"
              }, {
                code: "KL",
                name: "Kerala"
              }, {
                code: "LA",
                name: "Ladakh"
              }, {
                code: "LD",
                name: "Lakshadweep"
              }, {
                code: "MP",
                name: "Madhya Pradesh"
              }, {
                code: "MH",
                name: "Maharashtra"
              }, {
                code: "MN",
                name: "Manipur"
              }, {
                code: "ML",
                name: "Meghalaya"
              }, {
                code: "MZ",
                name: "Mizoram"
              }, {
                code: "NL",
                name: "Nagaland"
              }, {
                code: "OR",
                name: "Odisha"
              }, {
                code: "PY",
                name: "Puducherry"
              }, {
                code: "PB",
                name: "Punjab"
              }, {
                code: "RJ",
                name: "Rajasthan"
              }, {
                code: "SK",
                name: "Sikkim"
              }, {
                code: "TN",
                name: "Tamil Nadu"
              }, {
                code: "TS",
                name: "Telangana"
              }, {
                code: "TR",
                name: "Tripura"
              }, {
                code: "UP",
                name: "Uttar Pradesh"
              }, {
                code: "UK",
                name: "Uttarakhand"
              }, {
                code: "WB",
                name: "West Bengal"
              }]
              }, {
                autocompletionField: "address1",
                code: "ID",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Province"
                },
                name: "Indonesia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 62,
                provinceKey: "PROVINCE",
                zones: [{
                code: "AC",
                name: "Aceh"
              }, {
                code: "BA",
                name: "Bali"
              }, {
                code: "BB",
                name: "Bangka–Belitung Islands"
              }, {
                code: "BT",
                name: "Banten"
              }, {
                code: "BE",
                name: "Bengkulu"
              }, {
                code: "GO",
                name: "Gorontalo"
              }, {
                code: "JK",
                name: "Jakarta"
              }, {
                code: "JA",
                name: "Jambi"
              }, {
                code: "JB",
                name: "West Java"
              }, {
                code: "JT",
                name: "Central Java"
              }, {
                code: "JI",
                name: "East Java"
              }, {
                code: "KB",
                name: "West Kalimantan"
              }, {
                code: "KS",
                name: "South Kalimantan"
              }, {
                code: "KT",
                name: "Central Kalimantan"
              }, {
                code: "KI",
                name: "East Kalimantan"
              }, {
                code: "KU",
                name: "North Kalimantan"
              }, {
                code: "KR",
                name: "Riau Islands"
              }, {
                code: "LA",
                name: "Lampung"
              }, {
                code: "MA",
                name: "Maluku"
              }, {
                code: "MU",
                name: "North Maluku"
              }, {
                code: "SU",
                name: "North Sumatra"
              }, {
                code: "NB",
                name: "West Nusa Tenggara"
              }, {
                code: "NT",
                name: "East Nusa Tenggara"
              }, {
                code: "PA",
                name: "Papua"
              }, {
                code: "PB",
                name: "West Papua"
              }, {
                code: "RI",
                name: "Riau"
              }, {
                code: "SS",
                name: "South Sumatra"
              }, {
                code: "SR",
                name: "West Sulawesi"
              }, {
                code: "SN",
                name: "South Sulawesi"
              }, {
                code: "ST",
                name: "Central Sulawesi"
              }, {
                code: "SG",
                name: "Southeast Sulawesi"
              }, {
                code: "SA",
                name: "North Sulawesi"
              }, {
                code: "SB",
                name: "West Sumatra"
              }, {
                code: "YO",
                name: "Yogyakarta"
              }]
              }, {
                autocompletionField: "address1",
                code: "IQ",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Iraq",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 964,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "IE",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "County"
                },
                name: "Ireland",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 353,
                provinceKey: "COUNTY",
                zones: [{
                code: "CW",
                name: "Carlow"
              }, {
                code: "CN",
                name: "Cavan"
              }, {
                code: "CE",
                name: "Clare"
              }, {
                code: "CO",
                name: "Cork"
              }, {
                code: "DL",
                name: "Donegal"
              }, {
                code: "D",
                name: "Dublin"
              }, {
                code: "G",
                name: "Galway"
              }, {
                code: "KY",
                name: "Kerry"
              }, {
                code: "KE",
                name: "Kildare"
              }, {
                code: "KK",
                name: "Kilkenny"
              }, {
                code: "LS",
                name: "Laois"
              }, {
                code: "LM",
                name: "Leitrim"
              }, {
                code: "LK",
                name: "Limerick"
              }, {
                code: "LD",
                name: "Longford"
              }, {
                code: "LH",
                name: "Louth"
              }, {
                code: "MO",
                name: "Mayo"
              }, {
                code: "MH",
                name: "Meath"
              }, {
                code: "MN",
                name: "Monaghan"
              }, {
                code: "OY",
                name: "Offaly"
              }, {
                code: "RN",
                name: "Roscommon"
              }, {
                code: "SO",
                name: "Sligo"
              }, {
                code: "TA",
                name: "Tipperary"
              }, {
                code: "WD",
                name: "Waterford"
              }, {
                code: "WH",
                name: "Westmeath"
              }, {
                code: "WX",
                name: "Wexford"
              }, {
                code: "WW",
                name: "Wicklow"
              }]
              }, {
                autocompletionField: "address1",
                code: "IM",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Isle of Man",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 44,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "IL",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Israel",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 972,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "IT",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Province"
                },
                name: "Italy",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 39,
                provinceKey: "PROVINCE",
                zones: [{
                code: "AG",
                name: "Agrigento"
              }, {
                code: "AL",
                name: "Alessandria"
              }, {
                code: "AN",
                name: "Ancona"
              }, {
                code: "AO",
                name: "Aosta Valley"
              }, {
                code: "AR",
                name: "Arezzo"
              }, {
                code: "AP",
                name: "Ascoli Piceno"
              }, {
                code: "AT",
                name: "Asti"
              }, {
                code: "AV",
                name: "Avellino"
              }, {
                code: "BA",
                name: "Bari"
              }, {
                code: "BT",
                name: "Barletta-Andria-Trani"
              }, {
                code: "BL",
                name: "Belluno"
              }, {
                code: "BN",
                name: "Benevento"
              }, {
                code: "BG",
                name: "Bergamo"
              }, {
                code: "BI",
                name: "Biella"
              }, {
                code: "BO",
                name: "Bologna"
              }, {
                code: "BZ",
                name: "South Tyrol"
              }, {
                code: "BS",
                name: "Brescia"
              }, {
                code: "BR",
                name: "Brindisi"
              }, {
                code: "CA",
                name: "Cagliari"
              }, {
                code: "CL",
                name: "Caltanissetta"
              }, {
                code: "CB",
                name: "Campobasso"
              }, {
                code: "CI",
                name: "Carbonia-Iglesias"
              }, {
                code: "CE",
                name: "Caserta"
              }, {
                code: "CT",
                name: "Catania"
              }, {
                code: "CZ",
                name: "Catanzaro"
              }, {
                code: "CH",
                name: "Chieti"
              }, {
                code: "CO",
                name: "Como"
              }, {
                code: "CS",
                name: "Cosenza"
              }, {
                code: "CR",
                name: "Cremona"
              }, {
                code: "KR",
                name: "Crotone"
              }, {
                code: "CN",
                name: "Cuneo"
              }, {
                code: "EN",
                name: "Enna"
              }, {
                code: "FM",
                name: "Fermo"
              }, {
                code: "FE",
                name: "Ferrara"
              }, {
                code: "FI",
                name: "Florence"
              }, {
                code: "FG",
                name: "Foggia"
              }, {
                code: "FC",
                name: "Forlì-Cesena"
              }, {
                code: "FR",
                name: "Frosinone"
              }, {
                code: "GE",
                name: "Genoa"
              }, {
                code: "GO",
                name: "Gorizia"
              }, {
                code: "GR",
                name: "Grosseto"
              }, {
                code: "IM",
                name: "Imperia"
              }, {
                code: "IS",
                name: "Isernia"
              }, {
                code: "AQ",
                name: "L'Aquila"
              }, {
                code: "SP",
                name: "La Spezia"
              }, {
                code: "LT",
                name: "Latina"
              }, {
                code: "LE",
                name: "Lecce"
              }, {
                code: "LC",
                name: "Lecco"
              }, {
                code: "LI",
                name: "Livorno"
              }, {
                code: "LO",
                name: "Lodi"
              }, {
                code: "LU",
                name: "Lucca"
              }, {
                code: "MC",
                name: "Macerata"
              }, {
                code: "MN",
                name: "Mantua"
              }, {
                code: "MS",
                name: "Massa and Carrara"
              }, {
                code: "MT",
                name: "Matera"
              }, {
                code: "VS",
                name: "Medio Campidano"
              }, {
                code: "ME",
                name: "Messina"
              }, {
                code: "MI",
                name: "Milan"
              }, {
                code: "MO",
                name: "Modena"
              }, {
                code: "MB",
                name: "Monza and Brianza"
              }, {
                code: "NA",
                name: "Naples"
              }, {
                code: "NO",
                name: "Novara"
              }, {
                code: "NU",
                name: "Nuoro"
              }, {
                code: "OG",
                name: "Ogliastra"
              }, {
                code: "OT",
                name: "Olbia-Tempio"
              }, {
                code: "OR",
                name: "Oristano"
              }, {
                code: "PD",
                name: "Padua"
              }, {
                code: "PA",
                name: "Palermo"
              }, {
                code: "PR",
                name: "Parma"
              }, {
                code: "PV",
                name: "Pavia"
              }, {
                code: "PG",
                name: "Perugia"
              }, {
                code: "PU",
                name: "Pesaro and Urbino"
              }, {
                code: "PE",
                name: "Pescara"
              }, {
                code: "PC",
                name: "Piacenza"
              }, {
                code: "PI",
                name: "Pisa"
              }, {
                code: "PT",
                name: "Pistoia"
              }, {
                code: "PN",
                name: "Pordenone"
              }, {
                code: "PZ",
                name: "Potenza"
              }, {
                code: "PO",
                name: "Prato"
              }, {
                code: "RG",
                name: "Ragusa"
              }, {
                code: "RA",
                name: "Ravenna"
              }, {
                code: "RC",
                name: "Reggio Calabria"
              }, {
                code: "RE",
                name: "Reggio Emilia"
              }, {
                code: "RI",
                name: "Rieti"
              }, {
                code: "RN",
                name: "Rimini"
              }, {
                code: "RM",
                name: "Rome"
              }, {
                code: "RO",
                name: "Rovigo"
              }, {
                code: "SA",
                name: "Salerno"
              }, {
                code: "SS",
                name: "Sassari"
              }, {
                code: "SV",
                name: "Savona"
              }, {
                code: "SI",
                name: "Siena"
              }, {
                code: "SR",
                name: "Syracuse"
              }, {
                code: "SO",
                name: "Sondrio"
              }, {
                code: "TA",
                name: "Taranto"
              }, {
                code: "TE",
                name: "Teramo"
              }, {
                code: "TR",
                name: "Terni"
              }, {
                code: "TO",
                name: "Turin"
              }, {
                code: "TP",
                name: "Trapani"
              }, {
                code: "TN",
                name: "Trentino"
              }, {
                code: "TV",
                name: "Treviso"
              }, {
                code: "TS",
                name: "Trieste"
              }, {
                code: "UD",
                name: "Udine"
              }, {
                code: "VA",
                name: "Varese"
              }, {
                code: "VE",
                name: "Venice"
              }, {
                code: "VB",
                name: "Verbano-Cusio-Ossola"
              }, {
                code: "VC",
                name: "Vercelli"
              }, {
                code: "VR",
                name: "Verona"
              }, {
                code: "VV",
                name: "Vibo Valentia"
              }, {
                code: "VI",
                name: "Vicenza"
              }, {
                code: "VT",
                name: "Viterbo"
              }]
              }, {
                autocompletionField: "address1",
                code: "JM",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Jamaica",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "zip",
                code: "JP",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{lastName}{firstName}_{company}_{zip}{province}_{city}_{address1}_{address2}_{phone}",
                  show: "{country} 〒{zip}_{province} {city}_{address1}_{address2}_{company}_{lastName} {firstName}様_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City/ward/town/village",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Prefecture"
                },
                name: "Japan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 81,
                provinceKey: "PREFECTURE",
                zones: [{
                code: "JP-01",
                name: "Hokkaido"
              }, {
                code: "JP-02",
                name: "Aomori"
              }, {
                code: "JP-03",
                name: "Iwate"
              }, {
                code: "JP-04",
                name: "Miyagi"
              }, {
                code: "JP-05",
                name: "Akita"
              }, {
                code: "JP-06",
                name: "Yamagata"
              }, {
                code: "JP-07",
                name: "Fukushima"
              }, {
                code: "JP-08",
                name: "Ibaraki"
              }, {
                code: "JP-09",
                name: "Tochigi"
              }, {
                code: "JP-10",
                name: "Gunma"
              }, {
                code: "JP-11",
                name: "Saitama"
              }, {
                code: "JP-12",
                name: "Chiba"
              }, {
                code: "JP-13",
                name: "Tokyo"
              }, {
                code: "JP-14",
                name: "Kanagawa"
              }, {
                code: "JP-15",
                name: "Niigata"
              }, {
                code: "JP-16",
                name: "Toyama"
              }, {
                code: "JP-17",
                name: "Ishikawa"
              }, {
                code: "JP-18",
                name: "Fukui"
              }, {
                code: "JP-19",
                name: "Yamanashi"
              }, {
                code: "JP-20",
                name: "Nagano"
              }, {
                code: "JP-21",
                name: "Gifu"
              }, {
                code: "JP-22",
                name: "Shizuoka"
              }, {
                code: "JP-23",
                name: "Aichi"
              }, {
                code: "JP-24",
                name: "Mie"
              }, {
                code: "JP-25",
                name: "Shiga"
              }, {
                code: "JP-26",
                name: "Kyoto"
              }, {
                code: "JP-27",
                name: "Osaka"
              }, {
                code: "JP-28",
                name: "Hyogo"
              }, {
                code: "JP-29",
                name: "Nara"
              }, {
                code: "JP-30",
                name: "Wakayama"
              }, {
                code: "JP-31",
                name: "Tottori"
              }, {
                code: "JP-32",
                name: "Shimane"
              }, {
                code: "JP-33",
                name: "Okayama"
              }, {
                code: "JP-34",
                name: "Hiroshima"
              }, {
                code: "JP-35",
                name: "Yamaguchi"
              }, {
                code: "JP-36",
                name: "Tokushima"
              }, {
                code: "JP-37",
                name: "Kagawa"
              }, {
                code: "JP-38",
                name: "Ehime"
              }, {
                code: "JP-39",
                name: "Kochi"
              }, {
                code: "JP-40",
                name: "Fukuoka"
              }, {
                code: "JP-41",
                name: "Saga"
              }, {
                code: "JP-42",
                name: "Nagasaki"
              }, {
                code: "JP-43",
                name: "Kumamoto"
              }, {
                code: "JP-44",
                name: "Oita"
              }, {
                code: "JP-45",
                name: "Miyazaki"
              }, {
                code: "JP-46",
                name: "Kagoshima"
              }, {
                code: "JP-47",
                name: "Okinawa"
              }]
              }, {
                autocompletionField: "address1",
                code: "JE",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Jersey",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 44,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "JO",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Jordan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 962,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "KZ",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Kazakhstan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 7,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "KE",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Kenya",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 254,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "KI",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Kiribati",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 686,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "XK",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Kosovo",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 383,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "KW",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Kuwait",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 965,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "KG",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{zip}{city}_{address2}_{address1}_{company}_{firstName}{lastName}_{phone}",
                  show: "{zip} {city}_{address2}_{address1}_{company}_{firstName} {lastName}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Kyrgyzstan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 996,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "LA",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Laos",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 856,
                provinceKey: "PROVINCE",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "LV",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Latvia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 371,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "LB",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Lebanon",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 961,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "LS",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Lesotho",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 266,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "LR",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Liberia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 231,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "LY",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Libya",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 218,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "LI",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Liechtenstein",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 423,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "LT",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Lithuania",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 370,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "LU",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Luxembourg",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 352,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MO",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "Area",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Macao SAR",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 853,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MG",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Madagascar",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 261,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MW",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Malawi",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 265,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MY",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postcode",
                  zone: "State/territory"
                },
                name: "Malaysia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 60,
                provinceKey: "STATE_AND_TERRITORY",
                zones: [{
                code: "JHR",
                name: "Johor"
              }, {
                code: "KDH",
                name: "Kedah"
              }, {
                code: "KTN",
                name: "Kelantan"
              }, {
                code: "KUL",
                name: "Kuala Lumpur"
              }, {
                code: "LBN",
                name: "Labuan"
              }, {
                code: "MLK",
                name: "Malacca"
              }, {
                code: "NSN",
                name: "Negeri Sembilan"
              }, {
                code: "PHG",
                name: "Pahang"
              }, {
                code: "PNG",
                name: "Penang"
              }, {
                code: "PRK",
                name: "Perak"
              }, {
                code: "PLS",
                name: "Perlis"
              }, {
                code: "PJY",
                name: "Putrajaya"
              }, {
                code: "SBH",
                name: "Sabah"
              }, {
                code: "SWK",
                name: "Sarawak"
              }, {
                code: "SGR",
                name: "Selangor"
              }, {
                code: "TRG",
                name: "Terengganu"
              }]
              }, {
                autocompletionField: "address1",
                code: "MV",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Maldives",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 960,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "ML",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Mali",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 223,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MT",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Malta",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 356,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MQ",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Martinique",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 596,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MR",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Mauritania",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 222,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MU",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Mauritius",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 230,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "YT",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Mayotte",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 262,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MX",
                continent: "North America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "State"
                },
                name: "Mexico",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 52,
                provinceKey: "STATE",
                zones: [{
                code: "AGS",
                name: "Aguascalientes"
              }, {
                code: "BC",
                name: "Baja California"
              }, {
                code: "BCS",
                name: "Baja California Sur"
              }, {
                code: "CAMP",
                name: "Campeche"
              }, {
                code: "CHIS",
                name: "Chiapas"
              }, {
                code: "CHIH",
                name: "Chihuahua"
              }, {
                code: "DF",
                name: "Ciudad de Mexico"
              }, {
                code: "COAH",
                name: "Coahuila"
              }, {
                code: "COL",
                name: "Colima"
              }, {
                code: "DGO",
                name: "Durango"
              }, {
                code: "GTO",
                name: "Guanajuato"
              }, {
                code: "GRO",
                name: "Guerrero"
              }, {
                code: "HGO",
                name: "Hidalgo"
              }, {
                code: "JAL",
                name: "Jalisco"
              }, {
                code: "MEX",
                name: "Mexico State"
              }, {
                code: "MICH",
                name: "Michoacán"
              }, {
                code: "MOR",
                name: "Morelos"
              }, {
                code: "NAY",
                name: "Nayarit"
              }, {
                code: "NL",
                name: "Nuevo León"
              }, {
                code: "OAX",
                name: "Oaxaca"
              }, {
                code: "PUE",
                name: "Puebla"
              }, {
                code: "QRO",
                name: "Querétaro"
              }, {
                code: "Q ROO",
                name: "Quintana Roo"
              }, {
                code: "SLP",
                name: "San Luis Potosí"
              }, {
                code: "SIN",
                name: "Sinaloa"
              }, {
                code: "SON",
                name: "Sonora"
              }, {
                code: "TAB",
                name: "Tabasco"
              }, {
                code: "TAMPS",
                name: "Tamaulipas"
              }, {
                code: "TLAX",
                name: "Tlaxcala"
              }, {
                code: "VER",
                name: "Veracruz"
              }, {
                code: "YUC",
                name: "Yucatán"
              }, {
                code: "ZAC",
                name: "Zacatecas"
              }]
              }, {
                autocompletionField: "address1",
                code: "MD",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Moldova",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 373,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MC",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "Ward",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Monaco",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 377,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MN",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Mongolia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 976,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "ME",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Montenegro",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 382,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MS",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Montserrat",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MA",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Morocco",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 212,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MZ",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Mozambique",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 258,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MM",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Myanmar (Burma)",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 95,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "NA",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Namibia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 264,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "NR",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Nauru",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 674,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "NP",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Nepal",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 977,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "NL",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Netherlands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 31,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "NC",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "New Caledonia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 687,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "NZ",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{province}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Suburb",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "New Zealand",
                optionalLabels: {
                  address2: "Suburb (optional)"
                },
                phoneNumberPrefix: 64,
                provinceKey: "REGION",
                zones: [{
                code: "AUK",
                name: "Auckland"
              }, {
                code: "BOP",
                name: "Bay of Plenty"
              }, {
                code: "CAN",
                name: "Canterbury"
              }, {
                code: "CIT",
                name: "Chatham Islands"
              }, {
                code: "GIS",
                name: "Gisborne"
              }, {
                code: "HKB",
                name: "Hawke's Bay"
              }, {
                code: "MWT",
                name: "Manawatū-Whanganui"
              }, {
                code: "MBH",
                name: "Marlborough"
              }, {
                code: "NSN",
                name: "Nelson"
              }, {
                code: "NTL",
                name: "Northland"
              }, {
                code: "OTA",
                name: "Otago"
              }, {
                code: "STL",
                name: "Southland"
              }, {
                code: "TKI",
                name: "Taranaki"
              }, {
                code: "TAS",
                name: "Tasman"
              }, {
                code: "WKO",
                name: "Waikato"
              }, {
                code: "WGN",
                name: "Wellington"
              }, {
                code: "WTC",
                name: "West Coast"
              }]
              }, {
                autocompletionField: "address1",
                code: "NI",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Nicaragua",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 505,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "NE",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Niger",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 227,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "NG",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "State"
                },
                name: "Nigeria",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 234,
                provinceKey: "STATE",
                zones: [{
                code: "AB",
                name: "Abia"
              }, {
                code: "FC",
                name: "Federal Capital Territory"
              }, {
                code: "AD",
                name: "Adamawa"
              }, {
                code: "AK",
                name: "Akwa Ibom"
              }, {
                code: "AN",
                name: "Anambra"
              }, {
                code: "BA",
                name: "Bauchi"
              }, {
                code: "BY",
                name: "Bayelsa"
              }, {
                code: "BE",
                name: "Benue"
              }, {
                code: "BO",
                name: "Borno"
              }, {
                code: "CR",
                name: "Cross River"
              }, {
                code: "DE",
                name: "Delta"
              }, {
                code: "EB",
                name: "Ebonyi"
              }, {
                code: "ED",
                name: "Edo"
              }, {
                code: "EK",
                name: "Ekiti"
              }, {
                code: "EN",
                name: "Enugu"
              }, {
                code: "GO",
                name: "Gombe"
              }, {
                code: "IM",
                name: "Imo"
              }, {
                code: "JI",
                name: "Jigawa"
              }, {
                code: "KD",
                name: "Kaduna"
              }, {
                code: "KN",
                name: "Kano"
              }, {
                code: "KT",
                name: "Katsina"
              }, {
                code: "KE",
                name: "Kebbi"
              }, {
                code: "KO",
                name: "Kogi"
              }, {
                code: "KW",
                name: "Kwara"
              }, {
                code: "LA",
                name: "Lagos"
              }, {
                code: "NA",
                name: "Nasarawa"
              }, {
                code: "NI",
                name: "Niger"
              }, {
                code: "OG",
                name: "Ogun"
              }, {
                code: "ON",
                name: "Ondo"
              }, {
                code: "OS",
                name: "Osun"
              }, {
                code: "OY",
                name: "Oyo"
              }, {
                code: "PL",
                name: "Plateau"
              }, {
                code: "RI",
                name: "Rivers"
              }, {
                code: "SO",
                name: "Sokoto"
              }, {
                code: "TA",
                name: "Taraba"
              }, {
                code: "YO",
                name: "Yobe"
              }, {
                code: "ZA",
                name: "Zamfara"
              }]
              }, {
                autocompletionField: "address1",
                code: "NU",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Niue",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 683,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "NF",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Norfolk Island",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 672,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MK",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "North Macedonia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 389,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "NO",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Norway",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 47,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "OM",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Oman",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 968,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "PK",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Pakistan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 92,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "PS",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Palestinian Territories",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 970,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "PA",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Panama",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 507,
                provinceKey: "REGION",
                zones: [{
                code: "PA-1",
                name: "Bocas del Toro"
              }, {
                code: "PA-4",
                name: "Chiriquí"
              }, {
                code: "PA-2",
                name: "Coclé"
              }, {
                code: "PA-3",
                name: "Colón"
              }, {
                code: "PA-5",
                name: "Darién"
              }, {
                code: "PA-EM",
                name: "Emberá"
              }, {
                code: "PA-6",
                name: "Herrera"
              }, {
                code: "PA-KY",
                name: "Guna Yala"
              }, {
                code: "PA-7",
                name: "Los Santos"
              }, {
                code: "PA-NB",
                name: "Ngöbe-Buglé"
              }, {
                code: "PA-8",
                name: "Panamá"
              }, {
                code: "PA-10",
                name: "West Panamá"
              }, {
                code: "PA-9",
                name: "Veraguas"
              }]
              }, {
                autocompletionField: "address1",
                code: "PG",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Papua New Guinea",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 675,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "PY",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Paraguay",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 595,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "PE",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Peru",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 51,
                provinceKey: "REGION",
                zones: [{
                code: "PE-AMA",
                name: "Amazonas"
              }, {
                code: "PE-ANC",
                name: "Ancash"
              }, {
                code: "PE-APU",
                name: "Apurímac"
              }, {
                code: "PE-ARE",
                name: "Arequipa"
              }, {
                code: "PE-AYA",
                name: "Ayacucho"
              }, {
                code: "PE-CAJ",
                name: "Cajamarca"
              }, {
                code: "PE-CAL",
                name: "El Callao"
              }, {
                code: "PE-CUS",
                name: "Cusco"
              }, {
                code: "PE-HUV",
                name: "Huancavelica"
              }, {
                code: "PE-HUC",
                name: "Huánuco"
              }, {
                code: "PE-ICA",
                name: "Ica"
              }, {
                code: "PE-JUN",
                name: "Junín"
              }, {
                code: "PE-LAL",
                name: "La Libertad"
              }, {
                code: "PE-LAM",
                name: "Lambayeque"
              }, {
                code: "PE-LIM",
                name: "Lima (Department)"
              }, {
                code: "PE-LMA",
                name: "Lima (Metropolitan)"
              }, {
                code: "PE-LOR",
                name: "Loreto"
              }, {
                code: "PE-MDD",
                name: "Madre de Dios"
              }, {
                code: "PE-MOQ",
                name: "Moquegua"
              }, {
                code: "PE-PAS",
                name: "Pasco"
              }, {
                code: "PE-PIU",
                name: "Piura"
              }, {
                code: "PE-PUN",
                name: "Puno"
              }, {
                code: "PE-SAM",
                name: "San Martín"
              }, {
                code: "PE-TAC",
                name: "Tacna"
              }, {
                code: "PE-TUM",
                name: "Tumbes"
              }, {
                code: "PE-UCA",
                name: "Ucayali"
              }]
              }, {
                autocompletionField: "address1",
                code: "PH",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Philippines",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 63,
                provinceKey: "REGION",
                zones: [{
                code: "PH-ABR",
                name: "Abra"
              }, {
                code: "PH-AGN",
                name: "Agusan del Norte"
              }, {
                code: "PH-AGS",
                name: "Agusan del Sur"
              }, {
                code: "PH-AKL",
                name: "Aklan"
              }, {
                code: "PH-ALB",
                name: "Albay"
              }, {
                code: "PH-ANT",
                name: "Antique"
              }, {
                code: "PH-APA",
                name: "Apayao"
              }, {
                code: "PH-AUR",
                name: "Aurora"
              }, {
                code: "PH-BAS",
                name: "Basilan"
              }, {
                code: "PH-BAN",
                name: "Bataan"
              }, {
                code: "PH-BTN",
                name: "Batanes"
              }, {
                code: "PH-BTG",
                name: "Batangas"
              }, {
                code: "PH-BEN",
                name: "Benguet"
              }, {
                code: "PH-BIL",
                name: "Biliran"
              }, {
                code: "PH-BOH",
                name: "Bohol"
              }, {
                code: "PH-BUK",
                name: "Bukidnon"
              }, {
                code: "PH-BUL",
                name: "Bulacan"
              }, {
                code: "PH-CAG",
                name: "Cagayan"
              }, {
                code: "PH-CAN",
                name: "Camarines Norte"
              }, {
                code: "PH-CAS",
                name: "Camarines Sur"
              }, {
                code: "PH-CAM",
                name: "Camiguin"
              }, {
                code: "PH-CAP",
                name: "Capiz"
              }, {
                code: "PH-CAT",
                name: "Catanduanes"
              }, {
                code: "PH-CAV",
                name: "Cavite"
              }, {
                code: "PH-CEB",
                name: "Cebu"
              }, {
                code: "PH-NCO",
                name: "Cotabato"
              }, {
                code: "PH-DVO",
                name: "Davao Occidental"
              }, {
                code: "PH-DAO",
                name: "Davao Oriental"
              }, {
                code: "PH-COM",
                name: "Compostela Valley"
              }, {
                code: "PH-DAV",
                name: "Davao del Norte"
              }, {
                code: "PH-DAS",
                name: "Davao del Sur"
              }, {
                code: "PH-DIN",
                name: "Dinagat Islands"
              }, {
                code: "PH-EAS",
                name: "Eastern Samar"
              }, {
                code: "PH-GUI",
                name: "Guimaras"
              }, {
                code: "PH-IFU",
                name: "Ifugao"
              }, {
                code: "PH-ILN",
                name: "Ilocos Norte"
              }, {
                code: "PH-ILS",
                name: "Ilocos Sur"
              }, {
                code: "PH-ILI",
                name: "Iloilo"
              }, {
                code: "PH-ISA",
                name: "Isabela"
              }, {
                code: "PH-KAL",
                name: "Kalinga"
              }, {
                code: "PH-LUN",
                name: "La Union"
              }, {
                code: "PH-LAG",
                name: "Laguna"
              }, {
                code: "PH-LAN",
                name: "Lanao del Norte"
              }, {
                code: "PH-LAS",
                name: "Lanao del Sur"
              }, {
                code: "PH-LEY",
                name: "Leyte"
              }, {
                code: "PH-MAG",
                name: "Maguindanao"
              }, {
                code: "PH-MAD",
                name: "Marinduque"
              }, {
                code: "PH-MAS",
                name: "Masbate"
              }, {
                code: "PH-00",
                name: "Metro Manila"
              }, {
                code: "PH-MSC",
                name: "Misamis Occidental"
              }, {
                code: "PH-MSR",
                name: "Misamis Oriental"
              }, {
                code: "PH-MOU",
                name: "Mountain"
              }, {
                code: "PH-NEC",
                name: "Negros Occidental"
              }, {
                code: "PH-NER",
                name: "Negros Oriental"
              }, {
                code: "PH-NSA",
                name: "Northern Samar"
              }, {
                code: "PH-NUE",
                name: "Nueva Ecija"
              }, {
                code: "PH-NUV",
                name: "Nueva Vizcaya"
              }, {
                code: "PH-MDC",
                name: "Occidental Mindoro"
              }, {
                code: "PH-MDR",
                name: "Oriental Mindoro"
              }, {
                code: "PH-PLW",
                name: "Palawan"
              }, {
                code: "PH-PAM",
                name: "Pampanga"
              }, {
                code: "PH-PAN",
                name: "Pangasinan"
              }, {
                code: "PH-QUE",
                name: "Quezon"
              }, {
                code: "PH-QUI",
                name: "Quirino"
              }, {
                code: "PH-RIZ",
                name: "Rizal"
              }, {
                code: "PH-ROM",
                name: "Romblon"
              }, {
                code: "PH-WSA",
                name: "Samar"
              }, {
                code: "PH-SAR",
                name: "Sarangani"
              }, {
                code: "PH-SIG",
                name: "Siquijor"
              }, {
                code: "PH-SOR",
                name: "Sorsogon"
              }, {
                code: "PH-SCO",
                name: "South Cotabato"
              }, {
                code: "PH-SLE",
                name: "Southern Leyte"
              }, {
                code: "PH-SUK",
                name: "Sultan Kudarat"
              }, {
                code: "PH-SLU",
                name: "Sulu"
              }, {
                code: "PH-SUN",
                name: "Surigao del Norte"
              }, {
                code: "PH-SUR",
                name: "Surigao del Sur"
              }, {
                code: "PH-TAR",
                name: "Tarlac"
              }, {
                code: "PH-TAW",
                name: "Tawi-Tawi"
              }, {
                code: "PH-ZMB",
                name: "Zambales"
              }, {
                code: "PH-ZSI",
                name: "Zamboanga Sibugay"
              }, {
                code: "PH-ZAN",
                name: "Zamboanga del Norte"
              }, {
                code: "PH-ZAS",
                name: "Zamboanga del Sur"
              }]
              }, {
                autocompletionField: "address1",
                code: "PN",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Pitcairn Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 64,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "PL",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Poland",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 48,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "PT",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Portugal",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 351,
                provinceKey: "REGION",
                zones: [{
                code: "PT-20",
                name: "Azores"
              }, {
                code: "PT-01",
                name: "Aveiro"
              }, {
                code: "PT-02",
                name: "Beja"
              }, {
                code: "PT-03",
                name: "Braga"
              }, {
                code: "PT-04",
                name: "Bragança"
              }, {
                code: "PT-05",
                name: "Castelo Branco"
              }, {
                code: "PT-06",
                name: "Coimbra"
              }, {
                code: "PT-07",
                name: "Évora"
              }, {
                code: "PT-08",
                name: "Faro"
              }, {
                code: "PT-09",
                name: "Guarda"
              }, {
                code: "PT-10",
                name: "Leiria"
              }, {
                code: "PT-11",
                name: "Lisbon"
              }, {
                code: "PT-30",
                name: "Madeira"
              }, {
                code: "PT-12",
                name: "Portalegre"
              }, {
                code: "PT-13",
                name: "Porto"
              }, {
                code: "PT-14",
                name: "Santarém"
              }, {
                code: "PT-15",
                name: "Setúbal"
              }, {
                code: "PT-16",
                name: "Viana do Castelo"
              }, {
                code: "PT-17",
                name: "Vila Real"
              }, {
                code: "PT-18",
                name: "Viseu"
              }]
              }, {
                autocompletionField: "address1",
                code: "QA",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Qatar",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 974,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "RE",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Réunion",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 262,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "RO",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "County"
                },
                name: "Romania",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 40,
                provinceKey: "COUNTY",
                zones: [{
                code: "AB",
                name: "Alba"
              }, {
                code: "AR",
                name: "Arad"
              }, {
                code: "AG",
                name: "Argeș"
              }, {
                code: "BC",
                name: "Bacău"
              }, {
                code: "BH",
                name: "Bihor"
              }, {
                code: "BN",
                name: "Bistriţa-Năsăud"
              }, {
                code: "BT",
                name: "Botoşani"
              }, {
                code: "BR",
                name: "Brăila"
              }, {
                code: "BV",
                name: "Braşov"
              }, {
                code: "B",
                name: "Bucharest"
              }, {
                code: "BZ",
                name: "Buzău"
              }, {
                code: "CS",
                name: "Caraș-Severin"
              }, {
                code: "CJ",
                name: "Cluj"
              }, {
                code: "CT",
                name: "Constanța"
              }, {
                code: "CV",
                name: "Covasna"
              }, {
                code: "CL",
                name: "Călărași"
              }, {
                code: "DJ",
                name: "Dolj"
              }, {
                code: "DB",
                name: "Dâmbovița"
              }, {
                code: "GL",
                name: "Galați"
              }, {
                code: "GR",
                name: "Giurgiu"
              }, {
                code: "GJ",
                name: "Gorj"
              }, {
                code: "HR",
                name: "Harghita"
              }, {
                code: "HD",
                name: "Hunedoara"
              }, {
                code: "IL",
                name: "Ialomița"
              }, {
                code: "IS",
                name: "Iași"
              }, {
                code: "IF",
                name: "Ilfov"
              }, {
                code: "MM",
                name: "Maramureş"
              }, {
                code: "MH",
                name: "Mehedinți"
              }, {
                code: "MS",
                name: "Mureş"
              }, {
                code: "NT",
                name: "Neamţ"
              }, {
                code: "OT",
                name: "Olt"
              }, {
                code: "PH",
                name: "Prahova"
              }, {
                code: "SJ",
                name: "Sălaj"
              }, {
                code: "SM",
                name: "Satu Mare"
              }, {
                code: "SB",
                name: "Sibiu"
              }, {
                code: "SV",
                name: "Suceava"
              }, {
                code: "TR",
                name: "Teleorman"
              }, {
                code: "TM",
                name: "Timiș"
              }, {
                code: "TL",
                name: "Tulcea"
              }, {
                code: "VL",
                name: "Vâlcea"
              }, {
                code: "VS",
                name: "Vaslui"
              }, {
                code: "VN",
                name: "Vrancea"
              }]
              }, {
                autocompletionField: "address1",
                code: "RU",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Russia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 7,
                provinceKey: "REGION",
                zones: [{
                code: "ALT",
                name: "Altai Krai"
              }, {
                code: "AL",
                name: "Altai"
              }, {
                code: "AMU",
                name: "Amur"
              }, {
                code: "ARK",
                name: "Arkhangelsk"
              }, {
                code: "AST",
                name: "Astrakhan"
              }, {
                code: "BEL",
                name: "Belgorod"
              }, {
                code: "BRY",
                name: "Bryansk"
              }, {
                code: "CE",
                name: "Chechen"
              }, {
                code: "CHE",
                name: "Chelyabinsk"
              }, {
                code: "CHU",
                name: "Chukotka Okrug"
              }, {
                code: "CU",
                name: "Chuvash"
              }, {
                code: "IRK",
                name: "Irkutsk"
              }, {
                code: "IVA",
                name: "Ivanovo"
              }, {
                code: "YEV",
                name: "Jewish"
              }, {
                code: "KB",
                name: "Kabardino-Balkar"
              }, {
                code: "KGD",
                name: "Kaliningrad"
              }, {
                code: "KLU",
                name: "Kaluga"
              }, {
                code: "KAM",
                name: "Kamchatka Krai"
              }, {
                code: "KC",
                name: "Karachay-Cherkess"
              }, {
                code: "KEM",
                name: "Kemerovo"
              }, {
                code: "KHA",
                name: "Khabarovsk Krai"
              }, {
                code: "KHM",
                name: "Khanty-Mansi"
              }, {
                code: "KIR",
                name: "Kirov"
              }, {
                code: "KO",
                name: "Komi"
              }, {
                code: "KOS",
                name: "Kostroma"
              }, {
                code: "KDA",
                name: "Krasnodar Krai"
              }, {
                code: "KYA",
                name: "Krasnoyarsk Krai"
              }, {
                code: "KGN",
                name: "Kurgan"
              }, {
                code: "KRS",
                name: "Kursk"
              }, {
                code: "LEN",
                name: "Leningrad"
              }, {
                code: "LIP",
                name: "Lipetsk"
              }, {
                code: "MAG",
                name: "Magadan"
              }, {
                code: "ME",
                name: "Mari El"
              }, {
                code: "MOW",
                name: "Moscow"
              }, {
                code: "MOS",
                name: "Moscow Province"
              }, {
                code: "MUR",
                name: "Murmansk"
              }, {
                code: "NIZ",
                name: "Nizhny Novgorod"
              }, {
                code: "NGR",
                name: "Novgorod"
              }, {
                code: "NVS",
                name: "Novosibirsk"
              }, {
                code: "OMS",
                name: "Omsk"
              }, {
                code: "ORE",
                name: "Orenburg"
              }, {
                code: "ORL",
                name: "Oryol"
              }, {
                code: "PNZ",
                name: "Penza"
              }, {
                code: "PER",
                name: "Perm Krai"
              }, {
                code: "PRI",
                name: "Primorsky Krai"
              }, {
                code: "PSK",
                name: "Pskov"
              }, {
                code: "AD",
                name: "Adygea"
              }, {
                code: "BA",
                name: "Bashkortostan"
              }, {
                code: "BU",
                name: "Buryat"
              }, {
                code: "DA",
                name: "Dagestan"
              }, {
                code: "IN",
                name: "Ingushetia"
              }, {
                code: "KL",
                name: "Kalmykia"
              }, {
                code: "KR",
                name: "Karelia"
              }, {
                code: "KK",
                name: "Khakassia"
              }, {
                code: "MO",
                name: "Mordovia"
              }, {
                code: "SE",
                name: "North Ossetia-Alania"
              }, {
                code: "TA",
                name: "Tatarstan"
              }, {
                code: "ROS",
                name: "Rostov"
              }, {
                code: "RYA",
                name: "Ryazan"
              }, {
                code: "SPE",
                name: "Saint Petersburg"
              }, {
                code: "SA",
                name: "Sakha"
              }, {
                code: "SAK",
                name: "Sakhalin"
              }, {
                code: "SAM",
                name: "Samara"
              }, {
                code: "SAR",
                name: "Saratov"
              }, {
                code: "SMO",
                name: "Smolensk"
              }, {
                code: "STA",
                name: "Stavropol Krai"
              }, {
                code: "SVE",
                name: "Sverdlovsk"
              }, {
                code: "TAM",
                name: "Tambov"
              }, {
                code: "TOM",
                name: "Tomsk"
              }, {
                code: "TUL",
                name: "Tula"
              }, {
                code: "TVE",
                name: "Tver"
              }, {
                code: "TYU",
                name: "Tyumen"
              }, {
                code: "TY",
                name: "Tuva"
              }, {
                code: "UD",
                name: "Udmurt"
              }, {
                code: "ULY",
                name: "Ulyanovsk"
              }, {
                code: "VLA",
                name: "Vladimir"
              }, {
                code: "VGG",
                name: "Volgograd"
              }, {
                code: "VLG",
                name: "Vologda"
              }, {
                code: "VOR",
                name: "Voronezh"
              }, {
                code: "YAN",
                name: "Yamalo-Nenets Okrug"
              }, {
                code: "YAR",
                name: "Yaroslavl"
              }, {
                code: "ZAB",
                name: "Zabaykalsky Krai"
              }]
              }, {
                autocompletionField: "address1",
                code: "RW",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Rwanda",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 250,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "WS",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Samoa",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 685,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SM",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "San Marino",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 378,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "ST",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "São Tomé &amp; Príncipe",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 239,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SA",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Saudi Arabia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 966,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SN",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Senegal",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 221,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "RS",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Serbia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 381,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SC",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Seychelles",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 248,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SL",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Sierra Leone",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 232,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SG",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{country} {zip}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Singapore",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 65,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SX",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Sint Maarten",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SK",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Slovakia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 421,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SI",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Slovenia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 386,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SB",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Solomon Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 677,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SO",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Somalia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 252,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "ZA",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Suburb",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Province"
                },
                name: "South Africa",
                optionalLabels: {
                  address2: "Suburb (optional)"
                },
                phoneNumberPrefix: 27,
                provinceKey: "PROVINCE",
                zones: [{
                code: "EC",
                name: "Eastern Cape"
              }, {
                code: "FS",
                name: "Free State"
              }, {
                code: "GP",
                name: "Gauteng"
              }, {
                code: "NL",
                name: "KwaZulu-Natal"
              }, {
                code: "LP",
                name: "Limpopo"
              }, {
                code: "MP",
                name: "Mpumalanga"
              }, {
                code: "NW",
                name: "North West"
              }, {
                code: "NC",
                name: "Northern Cape"
              }, {
                code: "WC",
                name: "Western Cape"
              }]
              }, {
                autocompletionField: "address1",
                code: "GS",
                continent: "Other",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "South Georgia &amp; South Sandwich Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 500,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "zip",
                code: "KR",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{company}_{lastName}{firstName}_{zip}_{province}{city}_{address1}_{address2}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Province"
                },
                name: "South Korea",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 82,
                provinceKey: "PROVINCE",
                zones: [{
                code: "KR-26",
                name: "Busan"
              }, {
                code: "KR-43",
                name: "North Chungcheong"
              }, {
                code: "KR-44",
                name: "South Chungcheong"
              }, {
                code: "KR-27",
                name: "Daegu"
              }, {
                code: "KR-30",
                name: "Daejeon"
              }, {
                code: "KR-42",
                name: "Gangwon"
              }, {
                code: "KR-29",
                name: "Gwangju City"
              }, {
                code: "KR-47",
                name: "North Gyeongsang"
              }, {
                code: "KR-41",
                name: "Gyeonggi"
              }, {
                code: "KR-48",
                name: "South Gyeongsang"
              }, {
                code: "KR-28",
                name: "Incheon"
              }, {
                code: "KR-49",
                name: "Jeju"
              }, {
                code: "KR-45",
                name: "North Jeolla"
              }, {
                code: "KR-46",
                name: "South Jeolla"
              }, {
                code: "KR-50",
                name: "Sejong"
              }, {
                code: "KR-11",
                name: "Seoul"
              }, {
                code: "KR-31",
                name: "Ulsan"
              }]
              }, {
                autocompletionField: "address1",
                code: "SS",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "South Sudan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 211,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "ES",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Province"
                },
                name: "Spain",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 34,
                provinceKey: "PROVINCE",
                zones: [{
                code: "C",
                name: "A Coruña"
              }, {
                code: "VI",
                name: "Álava"
              }, {
                code: "AB",
                name: "Albacete"
              }, {
                code: "A",
                name: "Alicante"
              }, {
                code: "AL",
                name: "Almería"
              }, {
                code: "O",
                name: "Asturias Province"
              }, {
                code: "AV",
                name: "Ávila"
              }, {
                code: "BA",
                name: "Badajoz"
              }, {
                code: "PM",
                name: "Balears Province"
              }, {
                code: "B",
                name: "Barcelona"
              }, {
                code: "BU",
                name: "Burgos"
              }, {
                code: "CC",
                name: "Cáceres"
              }, {
                code: "CA",
                name: "Cádiz"
              }, {
                code: "S",
                name: "Cantabria Province"
              }, {
                code: "CS",
                name: "Castellón"
              }, {
                code: "CE",
                name: "Ceuta"
              }, {
                code: "CR",
                name: "Ciudad Real"
              }, {
                code: "CO",
                name: "Córdoba"
              }, {
                code: "CU",
                name: "Cuenca"
              }, {
                code: "GI",
                name: "Girona"
              }, {
                code: "GR",
                name: "Granada"
              }, {
                code: "GU",
                name: "Guadalajara"
              }, {
                code: "SS",
                name: "Gipuzkoa"
              }, {
                code: "H",
                name: "Huelva"
              }, {
                code: "HU",
                name: "Huesca"
              }, {
                code: "J",
                name: "Jaén"
              }, {
                code: "LO",
                name: "La Rioja Province"
              }, {
                code: "GC",
                name: "Las Palmas"
              }, {
                code: "LE",
                name: "León"
              }, {
                code: "L",
                name: "Lleida"
              }, {
                code: "LU",
                name: "Lugo"
              }, {
                code: "M",
                name: "Madrid Province"
              }, {
                code: "MA",
                name: "Málaga"
              }, {
                code: "ML",
                name: "Melilla"
              }, {
                code: "MU",
                name: "Murcia"
              }, {
                code: "NA",
                name: "Navarra"
              }, {
                code: "OR",
                name: "Ourense"
              }, {
                code: "P",
                name: "Palencia"
              }, {
                code: "PO",
                name: "Pontevedra"
              }, {
                code: "SA",
                name: "Salamanca"
              }, {
                code: "TF",
                name: "Santa Cruz de Tenerife"
              }, {
                code: "SG",
                name: "Segovia"
              }, {
                code: "SE",
                name: "Seville"
              }, {
                code: "SO",
                name: "Soria"
              }, {
                code: "T",
                name: "Tarragona"
              }, {
                code: "TE",
                name: "Teruel"
              }, {
                code: "TO",
                name: "Toledo"
              }, {
                code: "V",
                name: "Valencia"
              }, {
                code: "VA",
                name: "Valladolid"
              }, {
                code: "BI",
                name: "Biscay"
              }, {
                code: "ZA",
                name: "Zamora"
              }, {
                code: "Z",
                name: "Zaragoza"
              }]
              }, {
                autocompletionField: "address1",
                code: "LK",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Sri Lanka",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 94,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "BL",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "St. Barthélemy",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 590,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SH",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "St. Helena",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 290,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "KN",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "St. Kitts &amp; Nevis",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "LC",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "St. Lucia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "MF",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "St. Martin",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 590,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "PM",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "St. Pierre &amp; Miquelon",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 508,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "VC",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "St. Vincent &amp; Grenadines",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SD",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Sudan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 249,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SR",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Suriname",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 597,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SJ",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Svalbard &amp; Jan Mayen",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 47,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "SE",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Apartment, suite, etc.",
                  city: "City/town",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Sweden",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 46,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "CH",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Street and house number",
                  address2: "Additional address",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Switzerland",
                optionalLabels: {
                  address2: "Additional address (optional)"
                },
                phoneNumberPrefix: 41,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TW",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Taiwan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 886,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TJ",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Tajikistan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 992,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TZ",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Tanzania",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 255,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TH",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Province"
                },
                name: "Thailand",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 66,
                provinceKey: "PROVINCE",
                zones: [{
                code: "TH-37",
                name: "Amnat Charoen"
              }, {
                code: "TH-15",
                name: "Ang Thong"
              }, {
                code: "TH-10",
                name: "Bangkok"
              }, {
                code: "TH-38",
                name: "Bueng Kan"
              }, {
                code: "TH-31",
                name: "Buri Ram"
              }, {
                code: "TH-24",
                name: "Chachoengsao"
              }, {
                code: "TH-18",
                name: "Chai Nat"
              }, {
                code: "TH-36",
                name: "Chaiyaphum"
              }, {
                code: "TH-22",
                name: "Chanthaburi"
              }, {
                code: "TH-50",
                name: "Chiang Mai"
              }, {
                code: "TH-57",
                name: "Chiang Rai"
              }, {
                code: "TH-20",
                name: "Chon Buri"
              }, {
                code: "TH-86",
                name: "Chumphon"
              }, {
                code: "TH-46",
                name: "Kalasin"
              }, {
                code: "TH-62",
                name: "Kamphaeng Phet"
              }, {
                code: "TH-71",
                name: "Kanchanaburi"
              }, {
                code: "TH-40",
                name: "Khon Kaen"
              }, {
                code: "TH-81",
                name: "Krabi"
              }, {
                code: "TH-52",
                name: "Lampang"
              }, {
                code: "TH-51",
                name: "Lamphun"
              }, {
                code: "TH-42",
                name: "Loei"
              }, {
                code: "TH-16",
                name: "Lopburi"
              }, {
                code: "TH-58",
                name: "Mae Hong Son"
              }, {
                code: "TH-44",
                name: "Maha Sarakham"
              }, {
                code: "TH-49",
                name: "Mukdahan"
              }, {
                code: "TH-26",
                name: "Nakhon Nayok"
              }, {
                code: "TH-73",
                name: "Nakhon Pathom"
              }, {
                code: "TH-48",
                name: "Nakhon Phanom"
              }, {
                code: "TH-30",
                name: "Nakhon Ratchasima"
              }, {
                code: "TH-60",
                name: "Nakhon Sawan"
              }, {
                code: "TH-80",
                name: "Nakhon Si Thammarat"
              }, {
                code: "TH-55",
                name: "Nan"
              }, {
                code: "TH-96",
                name: "Narathiwat"
              }, {
                code: "TH-39",
                name: "Nong Bua Lam Phu"
              }, {
                code: "TH-43",
                name: "Nong Khai"
              }, {
                code: "TH-12",
                name: "Nonthaburi"
              }, {
                code: "TH-13",
                name: "Pathum Thani"
              }, {
                code: "TH-94",
                name: "Pattani"
              }, {
                code: "TH-S",
                name: "Pattaya"
              }, {
                code: "TH-82",
                name: "Phang Nga"
              }, {
                code: "TH-93",
                name: "Phatthalung"
              }, {
                code: "TH-56",
                name: "Phayao"
              }, {
                code: "TH-67",
                name: "Phetchabun"
              }, {
                code: "TH-76",
                name: "Phetchaburi"
              }, {
                code: "TH-66",
                name: "Phichit"
              }, {
                code: "TH-65",
                name: "Phitsanulok"
              }, {
                code: "TH-14",
                name: "Phra Nakhon Si Ayutthaya"
              }, {
                code: "TH-54",
                name: "Phrae"
              }, {
                code: "TH-83",
                name: "Phuket"
              }, {
                code: "TH-25",
                name: "Prachin Buri"
              }, {
                code: "TH-77",
                name: "Prachuap Khiri Khan"
              }, {
                code: "TH-85",
                name: "Ranong"
              }, {
                code: "TH-70",
                name: "Ratchaburi"
              }, {
                code: "TH-21",
                name: "Rayong"
              }, {
                code: "TH-45",
                name: "Roi Et"
              }, {
                code: "TH-27",
                name: "Sa Kaeo"
              }, {
                code: "TH-47",
                name: "Sakon Nakhon"
              }, {
                code: "TH-11",
                name: "Samut Prakan"
              }, {
                code: "TH-74",
                name: "Samut Sakhon"
              }, {
                code: "TH-75",
                name: "Samut Songkhram"
              }, {
                code: "TH-19",
                name: "Saraburi"
              }, {
                code: "TH-91",
                name: "Satun"
              }, {
                code: "TH-17",
                name: "Sing Buri"
              }, {
                code: "TH-33",
                name: "Si Sa Ket"
              }, {
                code: "TH-90",
                name: "Songkhla"
              }, {
                code: "TH-64",
                name: "Sukhothai"
              }, {
                code: "TH-72",
                name: "Suphanburi"
              }, {
                code: "TH-84",
                name: "Surat Thani"
              }, {
                code: "TH-32",
                name: "Surin"
              }, {
                code: "TH-63",
                name: "Tak"
              }, {
                code: "TH-92",
                name: "Trang"
              }, {
                code: "TH-23",
                name: "Trat"
              }, {
                code: "TH-34",
                name: "Ubon Ratchathani"
              }, {
                code: "TH-41",
                name: "Udon Thani"
              }, {
                code: "TH-61",
                name: "Uthai Thani"
              }, {
                code: "TH-53",
                name: "Uttaradit"
              }, {
                code: "TH-95",
                name: "Yala"
              }, {
                code: "TH-35",
                name: "Yasothon"
              }]
              }, {
                autocompletionField: "address1",
                code: "TL",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Timor-Leste",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 670,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TG",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Togo",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 228,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TK",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Tokelau",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 690,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TO",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Tonga",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 676,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TT",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Trinidad &amp; Tobago",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TA",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Tristan da Cunha",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 2908,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TN",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Tunisia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 216,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TR",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Turkey",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 90,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TM",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{zip}{city}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                  show: "{zip} {city}_{country}_{firstName} {lastName}_{company}_{address1}_{address2}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Turkmenistan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 993,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TC",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Turks &amp; Caicos Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "TV",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Tuvalu",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 688,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "UM",
                continent: "Central America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "U.S. Outlying Islands",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "STATE",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "UG",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Uganda",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 256,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "UA",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Ukraine",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 380,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "AE",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Emirate"
                },
                name: "United Arab Emirates",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 971,
                provinceKey: "EMIRATE",
                zones: [{
                code: "AZ",
                name: "Abu Dhabi"
              }, {
                code: "AJ",
                name: "Ajman"
              }, {
                code: "DU",
                name: "Dubai"
              }, {
                code: "FU",
                name: "Fujairah"
              }, {
                code: "RK",
                name: "Ras al-Khaimah"
              }, {
                code: "SH",
                name: "Sharjah"
              }, {
                code: "UQ",
                name: "Umm al-Quwain"
              }]
              }, {
                autocompletionField: "address1",
                code: "GB",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postcode",
                  zone: "Region"
                },
                name: "United Kingdom",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 44,
                provinceKey: "REGION",
                zones: [{
                code: "BFP",
                name: "British Forces"
              }, {
                code: "ENG",
                name: "England"
              }, {
                code: "NIR",
                name: "Northern Ireland"
              }, {
                code: "SCT",
                name: "Scotland"
              }, {
                code: "WLS",
                name: "Wales"
              }]
              }, {
                autocompletionField: "address1",
                code: "US",
                continent: "North America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "ZIP code",
                  zone: "State"
                },
                name: "United States",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 1,
                provinceKey: "STATE",
                zones: [{
                code: "AL",
                name: "Alabama"
              }, {
                code: "AK",
                name: "Alaska"
              }, {
                code: "AS",
                name: "American Samoa"
              }, {
                code: "AZ",
                name: "Arizona"
              }, {
                code: "AR",
                name: "Arkansas"
              }, {
                code: "CA",
                name: "California"
              }, {
                code: "CO",
                name: "Colorado"
              }, {
                code: "CT",
                name: "Connecticut"
              }, {
                code: "DE",
                name: "Delaware"
              }, {
                code: "DC",
                name: "Washington DC"
              }, {
                code: "FM",
                name: "Micronesia"
              }, {
                code: "FL",
                name: "Florida"
              }, {
                code: "GA",
                name: "Georgia"
              }, {
                code: "GU",
                name: "Guam"
              }, {
                code: "HI",
                name: "Hawaii"
              }, {
                code: "ID",
                name: "Idaho"
              }, {
                code: "IL",
                name: "Illinois"
              }, {
                code: "IN",
                name: "Indiana"
              }, {
                code: "IA",
                name: "Iowa"
              }, {
                code: "KS",
                name: "Kansas"
              }, {
                code: "KY",
                name: "Kentucky"
              }, {
                code: "LA",
                name: "Louisiana"
              }, {
                code: "ME",
                name: "Maine"
              }, {
                code: "MH",
                name: "Marshall Islands"
              }, {
                code: "MD",
                name: "Maryland"
              }, {
                code: "MA",
                name: "Massachusetts"
              }, {
                code: "MI",
                name: "Michigan"
              }, {
                code: "MN",
                name: "Minnesota"
              }, {
                code: "MS",
                name: "Mississippi"
              }, {
                code: "MO",
                name: "Missouri"
              }, {
                code: "MT",
                name: "Montana"
              }, {
                code: "NE",
                name: "Nebraska"
              }, {
                code: "NV",
                name: "Nevada"
              }, {
                code: "NH",
                name: "New Hampshire"
              }, {
                code: "NJ",
                name: "New Jersey"
              }, {
                code: "NM",
                name: "New Mexico"
              }, {
                code: "NY",
                name: "New York"
              }, {
                code: "NC",
                name: "North Carolina"
              }, {
                code: "ND",
                name: "North Dakota"
              }, {
                code: "MP",
                name: "Northern Mariana Islands"
              }, {
                code: "OH",
                name: "Ohio"
              }, {
                code: "OK",
                name: "Oklahoma"
              }, {
                code: "OR",
                name: "Oregon"
              }, {
                code: "PW",
                name: "Palau"
              }, {
                code: "PA",
                name: "Pennsylvania"
              }, {
                code: "PR",
                name: "Puerto Rico"
              }, {
                code: "RI",
                name: "Rhode Island"
              }, {
                code: "SC",
                name: "South Carolina"
              }, {
                code: "SD",
                name: "South Dakota"
              }, {
                code: "TN",
                name: "Tennessee"
              }, {
                code: "TX",
                name: "Texas"
              }, {
                code: "UT",
                name: "Utah"
              }, {
                code: "VT",
                name: "Vermont"
              }, {
                code: "VI",
                name: "U.S. Virgin Islands"
              }, {
                code: "VA",
                name: "Virginia"
              }, {
                code: "WA",
                name: "Washington"
              }, {
                code: "WV",
                name: "West Virginia"
              }, {
                code: "WI",
                name: "Wisconsin"
              }, {
                code: "WY",
                name: "Wyoming"
              }, {
                code: "AA",
                name: "Armed Forces Americas"
              }, {
                code: "AE",
                name: "Armed Forces Europe"
              }, {
                code: "AP",
                name: "Armed Forces Pacific"
              }]
              }, {
                autocompletionField: "address1",
                code: "UY",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Uruguay",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 598,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "UZ",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Uzbekistan",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 998,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "VU",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Vanuatu",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 678,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "VA",
                continent: "Europe",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Vatican City",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 39,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "VE",
                continent: "South America",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}{province}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip} {province}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Venezuela",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 58,
                provinceKey: "STATE",
                zones: [{
                code: "VE-Z",
                name: "Amazonas"
              }, {
                code: "VE-B",
                name: "Anzoátegui"
              }, {
                code: "VE-C",
                name: "Apure"
              }, {
                code: "VE-D",
                name: "Aragua"
              }, {
                code: "VE-E",
                name: "Barinas"
              }, {
                code: "VE-F",
                name: "Bolívar"
              }, {
                code: "VE-G",
                name: "Carabobo"
              }, {
                code: "VE-H",
                name: "Cojedes"
              }, {
                code: "VE-Y",
                name: "Delta Amacuro"
              }, {
                code: "VE-W",
                name: "Federal Dependencies"
              }, {
                code: "VE-A",
                name: "Capital"
              }, {
                code: "VE-I",
                name: "Falcón"
              }, {
                code: "VE-J",
                name: "Guárico"
              }, {
                code: "VE-X",
                name: "Vargas"
              }, {
                code: "VE-K",
                name: "Lara"
              }, {
                code: "VE-L",
                name: "Mérida"
              }, {
                code: "VE-M",
                name: "Miranda"
              }, {
                code: "VE-N",
                name: "Monagas"
              }, {
                code: "VE-O",
                name: "Nueva Esparta"
              }, {
                code: "VE-P",
                name: "Portuguesa"
              }, {
                code: "VE-R",
                name: "Sucre"
              }, {
                code: "VE-S",
                name: "Táchira"
              }, {
                code: "VE-T",
                name: "Trujillo"
              }, {
                code: "VE-U",
                name: "Yaracuy"
              }, {
                code: "VE-V",
                name: "Zulia"
              }]
              }, {
                autocompletionField: "address1",
                code: "VN",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Vietnam",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 84,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "WF",
                continent: "Oceania",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Wallis &amp; Futuna",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 681,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "EH",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Western Sahara",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 212,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "YE",
                continent: "Asia",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Yemen",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 967,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "ZM",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Zambia",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 260,
                provinceKey: "REGION",
                zones: []
              }, {
                autocompletionField: "address1",
                code: "ZW",
                continent: "Africa",
                formatting: {
                  edit: "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{phone}",
                  show: "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country}_{phone}"
                },
                labels: {
                  address1: "Address",
                  address2: "Apartment, suite, etc.",
                  city: "City",
                  company: "Company",
                  country: "Country/region",
                  firstName: "First name",
                  lastName: "Last name",
                  phone: "Phone",
                  postalCode: "Postal code",
                  zone: "Region"
                },
                name: "Zimbabwe",
                optionalLabels: {
                  address2: "Apartment, suite, etc. (optional)"
                },
                phoneNumberPrefix: 263,
                provinceKey: "REGION",
                zones: []
              }]
        }
    }else{
        if(arrayDefault?.length > 0){
            arrayDefault?.forEach(element => {
                    const dObj = {"name": element?.continent, countries: [element]}
                    finalArray.push(dObj);
            });
            const result = finalArray.reduce((acc, {name, countries}) => {
                acc[name] = acc[name] ? acc[name] : {name: name, countries: []};
                if(Array.isArray(countries)) // if it's array type then concat 
                  acc[name].countries = acc[name].countries.concat(countries);
                else
                  acc[name].value.push(countries);
                return acc;
              }, {})
              finalArray = Object.values(result)
        }else{
            finalArray =  [
            {
                "name": "Asia",
                "countries": [
                    {
                        "name": "Afghanistan",
                        "code": "AF",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Azerbaijan",
                        "code": "AZ",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Bahrain",
                        "code": "BH",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Bangladesh",
                        "code": "BD",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Bhutan",
                        "code": "BT",
                        "continent": "Asia",
                        "phoneNumberPrefix": 975,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "British Indian Ocean Territory",
                        "code": "IO",
                        "continent": "Asia",
                        "phoneNumberPrefix": 246,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Brunei",
                        "code": "BN",
                        "continent": "Asia",
                        "phoneNumberPrefix": 673,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Cambodia",
                        "code": "KH",
                        "continent": "Asia",
                        "phoneNumberPrefix": 855,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "China",
                        "code": "CN",
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
                        },
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
                        ]
                    },
                    {
                        "name": "Christmas Island",
                        "code": "CX",
                        "continent": "Asia",
                        "phoneNumberPrefix": 61,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Cocos (Keeling) Islands",
                        "code": "CC",
                        "continent": "Asia",
                        "phoneNumberPrefix": 891,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                        },
                        "zones": []
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
                            },
                            {
                                "name": "New Territories",
                                "code": "NT"
                            }
                        ]
                    },
                    {
                        "name": "India",
                        "code": "IN",
                        "continent": "Asia",
                        "phoneNumberPrefix": 91,
                        "autocompletionField": "address1",
                        "provinceKey": "STATE",
                        "labels": {
                            "address1": "Address",
                            "address2": "Apartment, suite, etc.",
                            "city": "City",
                            "company": "Company",
                            "country": "Country/region",
                            "firstName": "First name",
                            "lastName": "Last name",
                            "phone": "Phone",
                            "postalCode": "PIN code",
                            "zone": "State"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Andaman and Nicobar Islands",
                                "code": "AN"
                            },
                            {
                                "name": "Andhra Pradesh",
                                "code": "AP"
                            },
                            {
                                "name": "Arunachal Pradesh",
                                "code": "AR"
                            },
                            {
                                "name": "Assam",
                                "code": "AS"
                            },
                            {
                                "name": "Bihar",
                                "code": "BR"
                            },
                            {
                                "name": "Chandigarh",
                                "code": "CH"
                            },
                            {
                                "name": "Chhattisgarh",
                                "code": "CG"
                            },
                            {
                                "name": "Dadra and Nagar Haveli",
                                "code": "DN"
                            },
                            {
                                "name": "Daman and Diu",
                                "code": "DD"
                            },
                            {
                                "name": "Delhi",
                                "code": "DL"
                            },
                            {
                                "name": "Goa",
                                "code": "GA"
                            },
                            {
                                "name": "Gujarat",
                                "code": "GJ"
                            },
                            {
                                "name": "Haryana",
                                "code": "HR"
                            },
                            {
                                "name": "Himachal Pradesh",
                                "code": "HP"
                            },
                            {
                                "name": "Jammu and Kashmir",
                                "code": "JK"
                            },
                            {
                                "name": "Jharkhand",
                                "code": "JH"
                            },
                            {
                                "name": "Karnataka",
                                "code": "KA"
                            },
                            {
                                "name": "Kerala",
                                "code": "KL"
                            },
                            {
                                "name": "Ladakh",
                                "code": "LA"
                            },
                            {
                                "name": "Lakshadweep",
                                "code": "LD"
                            },
                            {
                                "name": "Madhya Pradesh",
                                "code": "MP"
                            },
                            {
                                "name": "Maharashtra",
                                "code": "MH"
                            },
                            {
                                "name": "Manipur",
                                "code": "MN"
                            },
                            {
                                "name": "Meghalaya",
                                "code": "ML"
                            },
                            {
                                "name": "Mizoram",
                                "code": "MZ"
                            },
                            {
                                "name": "Nagaland",
                                "code": "NL"
                            },
                            {
                                "name": "Odisha",
                                "code": "OR"
                            },
                            {
                                "name": "Puducherry",
                                "code": "PY"
                            },
                            {
                                "name": "Punjab",
                                "code": "PB"
                            },
                            {
                                "name": "Rajasthan",
                                "code": "RJ"
                            },
                            {
                                "name": "Sikkim",
                                "code": "SK"
                            },
                            {
                                "name": "Tamil Nadu",
                                "code": "TN"
                            },
                            {
                                "name": "Telangana",
                                "code": "TS"
                            },
                            {
                                "name": "Tripura",
                                "code": "TR"
                            },
                            {
                                "name": "Uttar Pradesh",
                                "code": "UP"
                            },
                            {
                                "name": "Uttarakhand",
                                "code": "UK"
                            },
                            {
                                "name": "West Bengal",
                                "code": "WB"
                            }
                        ]
                    },
                    {
                        "name": "Indonesia",
                        "code": "ID",
                        "continent": "Asia",
                        "phoneNumberPrefix": 62,
                        "autocompletionField": "address1",
                        "provinceKey": "PROVINCE",
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
                            "zone": "Province"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province} {zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Aceh",
                                "code": "AC"
                            },
                            {
                                "name": "Bali",
                                "code": "BA"
                            },
                            {
                                "name": "Bangka–Belitung Islands",
                                "code": "BB"
                            },
                            {
                                "name": "Banten",
                                "code": "BT"
                            },
                            {
                                "name": "Bengkulu",
                                "code": "BE"
                            },
                            {
                                "name": "Gorontalo",
                                "code": "GO"
                            },
                            {
                                "name": "Jakarta",
                                "code": "JK"
                            },
                            {
                                "name": "Jambi",
                                "code": "JA"
                            },
                            {
                                "name": "West Java",
                                "code": "JB"
                            },
                            {
                                "name": "Central Java",
                                "code": "JT"
                            },
                            {
                                "name": "East Java",
                                "code": "JI"
                            },
                            {
                                "name": "West Kalimantan",
                                "code": "KB"
                            },
                            {
                                "name": "South Kalimantan",
                                "code": "KS"
                            },
                            {
                                "name": "Central Kalimantan",
                                "code": "KT"
                            },
                            {
                                "name": "East Kalimantan",
                                "code": "KI"
                            },
                            {
                                "name": "North Kalimantan",
                                "code": "KU"
                            },
                            {
                                "name": "Riau Islands",
                                "code": "KR"
                            },
                            {
                                "name": "Lampung",
                                "code": "LA"
                            },
                            {
                                "name": "Maluku",
                                "code": "MA"
                            },
                            {
                                "name": "North Maluku",
                                "code": "MU"
                            },
                            {
                                "name": "North Sumatra",
                                "code": "SU"
                            },
                            {
                                "name": "West Nusa Tenggara",
                                "code": "NB"
                            },
                            {
                                "name": "East Nusa Tenggara",
                                "code": "NT"
                            },
                            {
                                "name": "Papua",
                                "code": "PA"
                            },
                            {
                                "name": "West Papua",
                                "code": "PB"
                            },
                            {
                                "name": "Riau",
                                "code": "RI"
                            },
                            {
                                "name": "South Sumatra",
                                "code": "SS"
                            },
                            {
                                "name": "West Sulawesi",
                                "code": "SR"
                            },
                            {
                                "name": "South Sulawesi",
                                "code": "SN"
                            },
                            {
                                "name": "Central Sulawesi",
                                "code": "ST"
                            },
                            {
                                "name": "Southeast Sulawesi",
                                "code": "SG"
                            },
                            {
                                "name": "North Sulawesi",
                                "code": "SA"
                            },
                            {
                                "name": "West Sumatra",
                                "code": "SB"
                            },
                            {
                                "name": "Yogyakarta",
                                "code": "YO"
                            }
                        ]
                    },
                    {
                        "name": "Iraq",
                        "code": "IQ",
                        "continent": "Asia",
                        "phoneNumberPrefix": 964,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Israel",
                        "code": "IL",
                        "continent": "Asia",
                        "phoneNumberPrefix": 972,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Japan",
                        "code": "JP",
                        "continent": "Asia",
                        "phoneNumberPrefix": 81,
                        "autocompletionField": "zip",
                        "provinceKey": "PREFECTURE",
                        "labels": {
                            "address1": "Address",
                            "address2": "Apartment, suite, etc.",
                            "city": "City/ward/town/village",
                            "company": "Company",
                            "country": "Country/region",
                            "firstName": "First name",
                            "lastName": "Last name",
                            "phone": "Phone",
                            "postalCode": "Postal code",
                            "zone": "Prefecture"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{lastName}{firstName}_{company}_{zip}{province}_{city}_{address1}_{address2}_{phone}",
                            "show": "{country} 〒{zip}_{province} {city}_{address1}_{address2}_{company}_{lastName} {firstName}様_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Hokkaido",
                                "code": "JP-01"
                            },
                            {
                                "name": "Aomori",
                                "code": "JP-02"
                            },
                            {
                                "name": "Iwate",
                                "code": "JP-03"
                            },
                            {
                                "name": "Miyagi",
                                "code": "JP-04"
                            },
                            {
                                "name": "Akita",
                                "code": "JP-05"
                            },
                            {
                                "name": "Yamagata",
                                "code": "JP-06"
                            },
                            {
                                "name": "Fukushima",
                                "code": "JP-07"
                            },
                            {
                                "name": "Ibaraki",
                                "code": "JP-08"
                            },
                            {
                                "name": "Tochigi",
                                "code": "JP-09"
                            },
                            {
                                "name": "Gunma",
                                "code": "JP-10"
                            },
                            {
                                "name": "Saitama",
                                "code": "JP-11"
                            },
                            {
                                "name": "Chiba",
                                "code": "JP-12"
                            },
                            {
                                "name": "Tokyo",
                                "code": "JP-13"
                            },
                            {
                                "name": "Kanagawa",
                                "code": "JP-14"
                            },
                            {
                                "name": "Niigata",
                                "code": "JP-15"
                            },
                            {
                                "name": "Toyama",
                                "code": "JP-16"
                            },
                            {
                                "name": "Ishikawa",
                                "code": "JP-17"
                            },
                            {
                                "name": "Fukui",
                                "code": "JP-18"
                            },
                            {
                                "name": "Yamanashi",
                                "code": "JP-19"
                            },
                            {
                                "name": "Nagano",
                                "code": "JP-20"
                            },
                            {
                                "name": "Gifu",
                                "code": "JP-21"
                            },
                            {
                                "name": "Shizuoka",
                                "code": "JP-22"
                            },
                            {
                                "name": "Aichi",
                                "code": "JP-23"
                            },
                            {
                                "name": "Mie",
                                "code": "JP-24"
                            },
                            {
                                "name": "Shiga",
                                "code": "JP-25"
                            },
                            {
                                "name": "Kyoto",
                                "code": "JP-26"
                            },
                            {
                                "name": "Osaka",
                                "code": "JP-27"
                            },
                            {
                                "name": "Hyogo",
                                "code": "JP-28"
                            },
                            {
                                "name": "Nara",
                                "code": "JP-29"
                            },
                            {
                                "name": "Wakayama",
                                "code": "JP-30"
                            },
                            {
                                "name": "Tottori",
                                "code": "JP-31"
                            },
                            {
                                "name": "Shimane",
                                "code": "JP-32"
                            },
                            {
                                "name": "Okayama",
                                "code": "JP-33"
                            },
                            {
                                "name": "Hiroshima",
                                "code": "JP-34"
                            },
                            {
                                "name": "Yamaguchi",
                                "code": "JP-35"
                            },
                            {
                                "name": "Tokushima",
                                "code": "JP-36"
                            },
                            {
                                "name": "Kagawa",
                                "code": "JP-37"
                            },
                            {
                                "name": "Ehime",
                                "code": "JP-38"
                            },
                            {
                                "name": "Kochi",
                                "code": "JP-39"
                            },
                            {
                                "name": "Fukuoka",
                                "code": "JP-40"
                            },
                            {
                                "name": "Saga",
                                "code": "JP-41"
                            },
                            {
                                "name": "Nagasaki",
                                "code": "JP-42"
                            },
                            {
                                "name": "Kumamoto",
                                "code": "JP-43"
                            },
                            {
                                "name": "Oita",
                                "code": "JP-44"
                            },
                            {
                                "name": "Miyazaki",
                                "code": "JP-45"
                            },
                            {
                                "name": "Kagoshima",
                                "code": "JP-46"
                            },
                            {
                                "name": "Okinawa",
                                "code": "JP-47"
                            }
                        ]
                    },
                    {
                        "name": "Jordan",
                        "code": "JO",
                        "continent": "Asia",
                        "phoneNumberPrefix": 962,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Kazakhstan",
                        "code": "KZ",
                        "continent": "Asia",
                        "phoneNumberPrefix": 7,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Kuwait",
                        "code": "KW",
                        "continent": "Asia",
                        "phoneNumberPrefix": 965,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Kyrgyzstan",
                        "code": "KG",
                        "continent": "Asia",
                        "phoneNumberPrefix": 996,
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
                            "edit": "{country}_{zip}{city}_{address2}_{address1}_{company}_{firstName}{lastName}_{phone}",
                            "show": "{zip} {city}_{address2}_{address1}_{company}_{firstName} {lastName}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Laos",
                        "code": "LA",
                        "continent": "Asia",
                        "phoneNumberPrefix": 856,
                        "autocompletionField": "address1",
                        "provinceKey": "PROVINCE",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Lebanon",
                        "code": "LB",
                        "continent": "Asia",
                        "phoneNumberPrefix": 961,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Macao SAR",
                        "code": "MO",
                        "continent": "Asia",
                        "phoneNumberPrefix": 853,
                        "autocompletionField": "address1",
                        "provinceKey": "REGION",
                        "labels": {
                            "address1": "Address",
                            "address2": "Apartment, suite, etc.",
                            "city": "Area",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Malaysia",
                        "code": "MY",
                        "continent": "Asia",
                        "phoneNumberPrefix": 60,
                        "autocompletionField": "address1",
                        "provinceKey": "STATE_AND_TERRITORY",
                        "labels": {
                            "address1": "Address",
                            "address2": "Apartment, suite, etc.",
                            "city": "City",
                            "company": "Company",
                            "country": "Country/region",
                            "firstName": "First name",
                            "lastName": "Last name",
                            "phone": "Phone",
                            "postalCode": "Postcode",
                            "zone": "State/territory"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Johor",
                                "code": "JHR"
                            },
                            {
                                "name": "Kedah",
                                "code": "KDH"
                            },
                            {
                                "name": "Kelantan",
                                "code": "KTN"
                            },
                            {
                                "name": "Kuala Lumpur",
                                "code": "KUL"
                            },
                            {
                                "name": "Labuan",
                                "code": "LBN"
                            },
                            {
                                "name": "Malacca",
                                "code": "MLK"
                            },
                            {
                                "name": "Negeri Sembilan",
                                "code": "NSN"
                            },
                            {
                                "name": "Pahang",
                                "code": "PHG"
                            },
                            {
                                "name": "Penang",
                                "code": "PNG"
                            },
                            {
                                "name": "Perak",
                                "code": "PRK"
                            },
                            {
                                "name": "Perlis",
                                "code": "PLS"
                            },
                            {
                                "name": "Putrajaya",
                                "code": "PJY"
                            },
                            {
                                "name": "Sabah",
                                "code": "SBH"
                            },
                            {
                                "name": "Sarawak",
                                "code": "SWK"
                            },
                            {
                                "name": "Selangor",
                                "code": "SGR"
                            },
                            {
                                "name": "Terengganu",
                                "code": "TRG"
                            }
                        ]
                    },
                    {
                        "name": "Maldives",
                        "code": "MV",
                        "continent": "Asia",
                        "phoneNumberPrefix": 960,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Mongolia",
                        "code": "MN",
                        "continent": "Asia",
                        "phoneNumberPrefix": 976,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Myanmar (Burma)",
                        "code": "MM",
                        "continent": "Asia",
                        "phoneNumberPrefix": 95,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Nepal",
                        "code": "NP",
                        "continent": "Asia",
                        "phoneNumberPrefix": 977,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Oman",
                        "code": "OM",
                        "continent": "Asia",
                        "phoneNumberPrefix": 968,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Pakistan",
                        "code": "PK",
                        "continent": "Asia",
                        "phoneNumberPrefix": 92,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Palestinian Territories",
                        "code": "PS",
                        "continent": "Asia",
                        "phoneNumberPrefix": 970,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Philippines",
                        "code": "PH",
                        "continent": "Asia",
                        "phoneNumberPrefix": 63,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Abra",
                                "code": "PH-ABR"
                            },
                            {
                                "name": "Agusan del Norte",
                                "code": "PH-AGN"
                            },
                            {
                                "name": "Agusan del Sur",
                                "code": "PH-AGS"
                            },
                            {
                                "name": "Aklan",
                                "code": "PH-AKL"
                            },
                            {
                                "name": "Albay",
                                "code": "PH-ALB"
                            },
                            {
                                "name": "Antique",
                                "code": "PH-ANT"
                            },
                            {
                                "name": "Apayao",
                                "code": "PH-APA"
                            },
                            {
                                "name": "Aurora",
                                "code": "PH-AUR"
                            },
                            {
                                "name": "Basilan",
                                "code": "PH-BAS"
                            },
                            {
                                "name": "Bataan",
                                "code": "PH-BAN"
                            },
                            {
                                "name": "Batanes",
                                "code": "PH-BTN"
                            },
                            {
                                "name": "Batangas",
                                "code": "PH-BTG"
                            },
                            {
                                "name": "Benguet",
                                "code": "PH-BEN"
                            },
                            {
                                "name": "Biliran",
                                "code": "PH-BIL"
                            },
                            {
                                "name": "Bohol",
                                "code": "PH-BOH"
                            },
                            {
                                "name": "Bukidnon",
                                "code": "PH-BUK"
                            },
                            {
                                "name": "Bulacan",
                                "code": "PH-BUL"
                            },
                            {
                                "name": "Cagayan",
                                "code": "PH-CAG"
                            },
                            {
                                "name": "Camarines Norte",
                                "code": "PH-CAN"
                            },
                            {
                                "name": "Camarines Sur",
                                "code": "PH-CAS"
                            },
                            {
                                "name": "Camiguin",
                                "code": "PH-CAM"
                            },
                            {
                                "name": "Capiz",
                                "code": "PH-CAP"
                            },
                            {
                                "name": "Catanduanes",
                                "code": "PH-CAT"
                            },
                            {
                                "name": "Cavite",
                                "code": "PH-CAV"
                            },
                            {
                                "name": "Cebu",
                                "code": "PH-CEB"
                            },
                            {
                                "name": "Cotabato",
                                "code": "PH-NCO"
                            },
                            {
                                "name": "Davao Occidental",
                                "code": "PH-DVO"
                            },
                            {
                                "name": "Davao Oriental",
                                "code": "PH-DAO"
                            },
                            {
                                "name": "Compostela Valley",
                                "code": "PH-COM"
                            },
                            {
                                "name": "Davao del Norte",
                                "code": "PH-DAV"
                            },
                            {
                                "name": "Davao del Sur",
                                "code": "PH-DAS"
                            },
                            {
                                "name": "Dinagat Islands",
                                "code": "PH-DIN"
                            },
                            {
                                "name": "Eastern Samar",
                                "code": "PH-EAS"
                            },
                            {
                                "name": "Guimaras",
                                "code": "PH-GUI"
                            },
                            {
                                "name": "Ifugao",
                                "code": "PH-IFU"
                            },
                            {
                                "name": "Ilocos Norte",
                                "code": "PH-ILN"
                            },
                            {
                                "name": "Ilocos Sur",
                                "code": "PH-ILS"
                            },
                            {
                                "name": "Iloilo",
                                "code": "PH-ILI"
                            },
                            {
                                "name": "Isabela",
                                "code": "PH-ISA"
                            },
                            {
                                "name": "Kalinga",
                                "code": "PH-KAL"
                            },
                            {
                                "name": "La Union",
                                "code": "PH-LUN"
                            },
                            {
                                "name": "Laguna",
                                "code": "PH-LAG"
                            },
                            {
                                "name": "Lanao del Norte",
                                "code": "PH-LAN"
                            },
                            {
                                "name": "Lanao del Sur",
                                "code": "PH-LAS"
                            },
                            {
                                "name": "Leyte",
                                "code": "PH-LEY"
                            },
                            {
                                "name": "Maguindanao",
                                "code": "PH-MAG"
                            },
                            {
                                "name": "Marinduque",
                                "code": "PH-MAD"
                            },
                            {
                                "name": "Masbate",
                                "code": "PH-MAS"
                            },
                            {
                                "name": "Metro Manila",
                                "code": "PH-00"
                            },
                            {
                                "name": "Misamis Occidental",
                                "code": "PH-MSC"
                            },
                            {
                                "name": "Misamis Oriental",
                                "code": "PH-MSR"
                            },
                            {
                                "name": "Mountain",
                                "code": "PH-MOU"
                            },
                            {
                                "name": "Negros Occidental",
                                "code": "PH-NEC"
                            },
                            {
                                "name": "Negros Oriental",
                                "code": "PH-NER"
                            },
                            {
                                "name": "Northern Samar",
                                "code": "PH-NSA"
                            },
                            {
                                "name": "Nueva Ecija",
                                "code": "PH-NUE"
                            },
                            {
                                "name": "Nueva Vizcaya",
                                "code": "PH-NUV"
                            },
                            {
                                "name": "Occidental Mindoro",
                                "code": "PH-MDC"
                            },
                            {
                                "name": "Oriental Mindoro",
                                "code": "PH-MDR"
                            },
                            {
                                "name": "Palawan",
                                "code": "PH-PLW"
                            },
                            {
                                "name": "Pampanga",
                                "code": "PH-PAM"
                            },
                            {
                                "name": "Pangasinan",
                                "code": "PH-PAN"
                            },
                            {
                                "name": "Quezon",
                                "code": "PH-QUE"
                            },
                            {
                                "name": "Quirino",
                                "code": "PH-QUI"
                            },
                            {
                                "name": "Rizal",
                                "code": "PH-RIZ"
                            },
                            {
                                "name": "Romblon",
                                "code": "PH-ROM"
                            },
                            {
                                "name": "Samar",
                                "code": "PH-WSA"
                            },
                            {
                                "name": "Sarangani",
                                "code": "PH-SAR"
                            },
                            {
                                "name": "Siquijor",
                                "code": "PH-SIG"
                            },
                            {
                                "name": "Sorsogon",
                                "code": "PH-SOR"
                            },
                            {
                                "name": "South Cotabato",
                                "code": "PH-SCO"
                            },
                            {
                                "name": "Southern Leyte",
                                "code": "PH-SLE"
                            },
                            {
                                "name": "Sultan Kudarat",
                                "code": "PH-SUK"
                            },
                            {
                                "name": "Sulu",
                                "code": "PH-SLU"
                            },
                            {
                                "name": "Surigao del Norte",
                                "code": "PH-SUN"
                            },
                            {
                                "name": "Surigao del Sur",
                                "code": "PH-SUR"
                            },
                            {
                                "name": "Tarlac",
                                "code": "PH-TAR"
                            },
                            {
                                "name": "Tawi-Tawi",
                                "code": "PH-TAW"
                            },
                            {
                                "name": "Zambales",
                                "code": "PH-ZMB"
                            },
                            {
                                "name": "Zamboanga Sibugay",
                                "code": "PH-ZSI"
                            },
                            {
                                "name": "Zamboanga del Norte",
                                "code": "PH-ZAN"
                            },
                            {
                                "name": "Zamboanga del Sur",
                                "code": "PH-ZAS"
                            }
                        ]
                    },
                    {
                        "name": "Qatar",
                        "code": "QA",
                        "continent": "Asia",
                        "phoneNumberPrefix": 974,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Russia",
                        "code": "RU",
                        "continent": "Asia",
                        "phoneNumberPrefix": 7,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province}_{zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Altai Krai",
                                "code": "ALT"
                            },
                            {
                                "name": "Altai",
                                "code": "AL"
                            },
                            {
                                "name": "Amur",
                                "code": "AMU"
                            },
                            {
                                "name": "Arkhangelsk",
                                "code": "ARK"
                            },
                            {
                                "name": "Astrakhan",
                                "code": "AST"
                            },
                            {
                                "name": "Belgorod",
                                "code": "BEL"
                            },
                            {
                                "name": "Bryansk",
                                "code": "BRY"
                            },
                            {
                                "name": "Chechen",
                                "code": "CE"
                            },
                            {
                                "name": "Chelyabinsk",
                                "code": "CHE"
                            },
                            {
                                "name": "Chukotka Okrug",
                                "code": "CHU"
                            },
                            {
                                "name": "Chuvash",
                                "code": "CU"
                            },
                            {
                                "name": "Irkutsk",
                                "code": "IRK"
                            },
                            {
                                "name": "Ivanovo",
                                "code": "IVA"
                            },
                            {
                                "name": "Jewish",
                                "code": "YEV"
                            },
                            {
                                "name": "Kabardino-Balkar",
                                "code": "KB"
                            },
                            {
                                "name": "Kaliningrad",
                                "code": "KGD"
                            },
                            {
                                "name": "Kaluga",
                                "code": "KLU"
                            },
                            {
                                "name": "Kamchatka Krai",
                                "code": "KAM"
                            },
                            {
                                "name": "Karachay-Cherkess",
                                "code": "KC"
                            },
                            {
                                "name": "Kemerovo",
                                "code": "KEM"
                            },
                            {
                                "name": "Khabarovsk Krai",
                                "code": "KHA"
                            },
                            {
                                "name": "Khanty-Mansi",
                                "code": "KHM"
                            },
                            {
                                "name": "Kirov",
                                "code": "KIR"
                            },
                            {
                                "name": "Komi",
                                "code": "KO"
                            },
                            {
                                "name": "Kostroma",
                                "code": "KOS"
                            },
                            {
                                "name": "Krasnodar Krai",
                                "code": "KDA"
                            },
                            {
                                "name": "Krasnoyarsk Krai",
                                "code": "KYA"
                            },
                            {
                                "name": "Kurgan",
                                "code": "KGN"
                            },
                            {
                                "name": "Kursk",
                                "code": "KRS"
                            },
                            {
                                "name": "Leningrad",
                                "code": "LEN"
                            },
                            {
                                "name": "Lipetsk",
                                "code": "LIP"
                            },
                            {
                                "name": "Magadan",
                                "code": "MAG"
                            },
                            {
                                "name": "Mari El",
                                "code": "ME"
                            },
                            {
                                "name": "Moscow",
                                "code": "MOW"
                            },
                            {
                                "name": "Moscow Province",
                                "code": "MOS"
                            },
                            {
                                "name": "Murmansk",
                                "code": "MUR"
                            },
                            {
                                "name": "Nizhny Novgorod",
                                "code": "NIZ"
                            },
                            {
                                "name": "Novgorod",
                                "code": "NGR"
                            },
                            {
                                "name": "Novosibirsk",
                                "code": "NVS"
                            },
                            {
                                "name": "Omsk",
                                "code": "OMS"
                            },
                            {
                                "name": "Orenburg",
                                "code": "ORE"
                            },
                            {
                                "name": "Oryol",
                                "code": "ORL"
                            },
                            {
                                "name": "Penza",
                                "code": "PNZ"
                            },
                            {
                                "name": "Perm Krai",
                                "code": "PER"
                            },
                            {
                                "name": "Primorsky Krai",
                                "code": "PRI"
                            },
                            {
                                "name": "Pskov",
                                "code": "PSK"
                            },
                            {
                                "name": "Adygea",
                                "code": "AD"
                            },
                            {
                                "name": "Bashkortostan",
                                "code": "BA"
                            },
                            {
                                "name": "Buryat",
                                "code": "BU"
                            },
                            {
                                "name": "Dagestan",
                                "code": "DA"
                            },
                            {
                                "name": "Ingushetia",
                                "code": "IN"
                            },
                            {
                                "name": "Kalmykia",
                                "code": "KL"
                            },
                            {
                                "name": "Karelia",
                                "code": "KR"
                            },
                            {
                                "name": "Khakassia",
                                "code": "KK"
                            },
                            {
                                "name": "Mordovia",
                                "code": "MO"
                            },
                            {
                                "name": "North Ossetia-Alania",
                                "code": "SE"
                            },
                            {
                                "name": "Tatarstan",
                                "code": "TA"
                            },
                            {
                                "name": "Rostov",
                                "code": "ROS"
                            },
                            {
                                "name": "Ryazan",
                                "code": "RYA"
                            },
                            {
                                "name": "Saint Petersburg",
                                "code": "SPE"
                            },
                            {
                                "name": "Sakha",
                                "code": "SA"
                            },
                            {
                                "name": "Sakhalin",
                                "code": "SAK"
                            },
                            {
                                "name": "Samara",
                                "code": "SAM"
                            },
                            {
                                "name": "Saratov",
                                "code": "SAR"
                            },
                            {
                                "name": "Smolensk",
                                "code": "SMO"
                            },
                            {
                                "name": "Stavropol Krai",
                                "code": "STA"
                            },
                            {
                                "name": "Sverdlovsk",
                                "code": "SVE"
                            },
                            {
                                "name": "Tambov",
                                "code": "TAM"
                            },
                            {
                                "name": "Tomsk",
                                "code": "TOM"
                            },
                            {
                                "name": "Tula",
                                "code": "TUL"
                            },
                            {
                                "name": "Tver",
                                "code": "TVE"
                            },
                            {
                                "name": "Tyumen",
                                "code": "TYU"
                            },
                            {
                                "name": "Tuva",
                                "code": "TY"
                            },
                            {
                                "name": "Udmurt",
                                "code": "UD"
                            },
                            {
                                "name": "Ulyanovsk",
                                "code": "ULY"
                            },
                            {
                                "name": "Vladimir",
                                "code": "VLA"
                            },
                            {
                                "name": "Volgograd",
                                "code": "VGG"
                            },
                            {
                                "name": "Vologda",
                                "code": "VLG"
                            },
                            {
                                "name": "Voronezh",
                                "code": "VOR"
                            },
                            {
                                "name": "Yamalo-Nenets Okrug",
                                "code": "YAN"
                            },
                            {
                                "name": "Yaroslavl",
                                "code": "YAR"
                            },
                            {
                                "name": "Zabaykalsky Krai",
                                "code": "ZAB"
                            }
                        ]
                    },
                    {
                        "name": "Saudi Arabia",
                        "code": "SA",
                        "continent": "Asia",
                        "phoneNumberPrefix": 966,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Singapore",
                        "code": "SG",
                        "continent": "Asia",
                        "phoneNumberPrefix": 65,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{country} {zip}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "South Korea",
                        "code": "KR",
                        "continent": "Asia",
                        "phoneNumberPrefix": 82,
                        "autocompletionField": "zip",
                        "provinceKey": "PROVINCE",
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
                            "zone": "Province"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{company}_{lastName}{firstName}_{zip}_{province}{city}_{address1}_{address2}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Busan",
                                "code": "KR-26"
                            },
                            {
                                "name": "North Chungcheong",
                                "code": "KR-43"
                            },
                            {
                                "name": "South Chungcheong",
                                "code": "KR-44"
                            },
                            {
                                "name": "Daegu",
                                "code": "KR-27"
                            },
                            {
                                "name": "Daejeon",
                                "code": "KR-30"
                            },
                            {
                                "name": "Gangwon",
                                "code": "KR-42"
                            },
                            {
                                "name": "Gwangju City",
                                "code": "KR-29"
                            },
                            {
                                "name": "North Gyeongsang",
                                "code": "KR-47"
                            },
                            {
                                "name": "Gyeonggi",
                                "code": "KR-41"
                            },
                            {
                                "name": "South Gyeongsang",
                                "code": "KR-48"
                            },
                            {
                                "name": "Incheon",
                                "code": "KR-28"
                            },
                            {
                                "name": "Jeju",
                                "code": "KR-49"
                            },
                            {
                                "name": "North Jeolla",
                                "code": "KR-45"
                            },
                            {
                                "name": "South Jeolla",
                                "code": "KR-46"
                            },
                            {
                                "name": "Sejong",
                                "code": "KR-50"
                            },
                            {
                                "name": "Seoul",
                                "code": "KR-11"
                            },
                            {
                                "name": "Ulsan",
                                "code": "KR-31"
                            }
                        ]
                    },
                    {
                        "name": "Sri Lanka",
                        "code": "LK",
                        "continent": "Asia",
                        "phoneNumberPrefix": 94,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Taiwan",
                        "code": "TW",
                        "continent": "Asia",
                        "phoneNumberPrefix": 886,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Tajikistan",
                        "code": "TJ",
                        "continent": "Asia",
                        "phoneNumberPrefix": 992,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Thailand",
                        "code": "TH",
                        "continent": "Asia",
                        "phoneNumberPrefix": 66,
                        "autocompletionField": "address1",
                        "provinceKey": "PROVINCE",
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
                            "zone": "Province"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province} {zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Amnat Charoen",
                                "code": "TH-37"
                            },
                            {
                                "name": "Ang Thong",
                                "code": "TH-15"
                            },
                            {
                                "name": "Bangkok",
                                "code": "TH-10"
                            },
                            {
                                "name": "Bueng Kan",
                                "code": "TH-38"
                            },
                            {
                                "name": "Buri Ram",
                                "code": "TH-31"
                            },
                            {
                                "name": "Chachoengsao",
                                "code": "TH-24"
                            },
                            {
                                "name": "Chai Nat",
                                "code": "TH-18"
                            },
                            {
                                "name": "Chaiyaphum",
                                "code": "TH-36"
                            },
                            {
                                "name": "Chanthaburi",
                                "code": "TH-22"
                            },
                            {
                                "name": "Chiang Mai",
                                "code": "TH-50"
                            },
                            {
                                "name": "Chiang Rai",
                                "code": "TH-57"
                            },
                            {
                                "name": "Chon Buri",
                                "code": "TH-20"
                            },
                            {
                                "name": "Chumphon",
                                "code": "TH-86"
                            },
                            {
                                "name": "Kalasin",
                                "code": "TH-46"
                            },
                            {
                                "name": "Kamphaeng Phet",
                                "code": "TH-62"
                            },
                            {
                                "name": "Kanchanaburi",
                                "code": "TH-71"
                            },
                            {
                                "name": "Khon Kaen",
                                "code": "TH-40"
                            },
                            {
                                "name": "Krabi",
                                "code": "TH-81"
                            },
                            {
                                "name": "Lampang",
                                "code": "TH-52"
                            },
                            {
                                "name": "Lamphun",
                                "code": "TH-51"
                            },
                            {
                                "name": "Loei",
                                "code": "TH-42"
                            },
                            {
                                "name": "Lopburi",
                                "code": "TH-16"
                            },
                            {
                                "name": "Mae Hong Son",
                                "code": "TH-58"
                            },
                            {
                                "name": "Maha Sarakham",
                                "code": "TH-44"
                            },
                            {
                                "name": "Mukdahan",
                                "code": "TH-49"
                            },
                            {
                                "name": "Nakhon Nayok",
                                "code": "TH-26"
                            },
                            {
                                "name": "Nakhon Pathom",
                                "code": "TH-73"
                            },
                            {
                                "name": "Nakhon Phanom",
                                "code": "TH-48"
                            },
                            {
                                "name": "Nakhon Ratchasima",
                                "code": "TH-30"
                            },
                            {
                                "name": "Nakhon Sawan",
                                "code": "TH-60"
                            },
                            {
                                "name": "Nakhon Si Thammarat",
                                "code": "TH-80"
                            },
                            {
                                "name": "Nan",
                                "code": "TH-55"
                            },
                            {
                                "name": "Narathiwat",
                                "code": "TH-96"
                            },
                            {
                                "name": "Nong Bua Lam Phu",
                                "code": "TH-39"
                            },
                            {
                                "name": "Nong Khai",
                                "code": "TH-43"
                            },
                            {
                                "name": "Nonthaburi",
                                "code": "TH-12"
                            },
                            {
                                "name": "Pathum Thani",
                                "code": "TH-13"
                            },
                            {
                                "name": "Pattani",
                                "code": "TH-94"
                            },
                            {
                                "name": "Pattaya",
                                "code": "TH-S"
                            },
                            {
                                "name": "Phang Nga",
                                "code": "TH-82"
                            },
                            {
                                "name": "Phatthalung",
                                "code": "TH-93"
                            },
                            {
                                "name": "Phayao",
                                "code": "TH-56"
                            },
                            {
                                "name": "Phetchabun",
                                "code": "TH-67"
                            },
                            {
                                "name": "Phetchaburi",
                                "code": "TH-76"
                            },
                            {
                                "name": "Phichit",
                                "code": "TH-66"
                            },
                            {
                                "name": "Phitsanulok",
                                "code": "TH-65"
                            },
                            {
                                "name": "Phra Nakhon Si Ayutthaya",
                                "code": "TH-14"
                            },
                            {
                                "name": "Phrae",
                                "code": "TH-54"
                            },
                            {
                                "name": "Phuket",
                                "code": "TH-83"
                            },
                            {
                                "name": "Prachin Buri",
                                "code": "TH-25"
                            },
                            {
                                "name": "Prachuap Khiri Khan",
                                "code": "TH-77"
                            },
                            {
                                "name": "Ranong",
                                "code": "TH-85"
                            },
                            {
                                "name": "Ratchaburi",
                                "code": "TH-70"
                            },
                            {
                                "name": "Rayong",
                                "code": "TH-21"
                            },
                            {
                                "name": "Roi Et",
                                "code": "TH-45"
                            },
                            {
                                "name": "Sa Kaeo",
                                "code": "TH-27"
                            },
                            {
                                "name": "Sakon Nakhon",
                                "code": "TH-47"
                            },
                            {
                                "name": "Samut Prakan",
                                "code": "TH-11"
                            },
                            {
                                "name": "Samut Sakhon",
                                "code": "TH-74"
                            },
                            {
                                "name": "Samut Songkhram",
                                "code": "TH-75"
                            },
                            {
                                "name": "Saraburi",
                                "code": "TH-19"
                            },
                            {
                                "name": "Satun",
                                "code": "TH-91"
                            },
                            {
                                "name": "Sing Buri",
                                "code": "TH-17"
                            },
                            {
                                "name": "Si Sa Ket",
                                "code": "TH-33"
                            },
                            {
                                "name": "Songkhla",
                                "code": "TH-90"
                            },
                            {
                                "name": "Sukhothai",
                                "code": "TH-64"
                            },
                            {
                                "name": "Suphanburi",
                                "code": "TH-72"
                            },
                            {
                                "name": "Surat Thani",
                                "code": "TH-84"
                            },
                            {
                                "name": "Surin",
                                "code": "TH-32"
                            },
                            {
                                "name": "Tak",
                                "code": "TH-63"
                            },
                            {
                                "name": "Trang",
                                "code": "TH-92"
                            },
                            {
                                "name": "Trat",
                                "code": "TH-23"
                            },
                            {
                                "name": "Ubon Ratchathani",
                                "code": "TH-34"
                            },
                            {
                                "name": "Udon Thani",
                                "code": "TH-41"
                            },
                            {
                                "name": "Uthai Thani",
                                "code": "TH-61"
                            },
                            {
                                "name": "Uttaradit",
                                "code": "TH-53"
                            },
                            {
                                "name": "Yala",
                                "code": "TH-95"
                            },
                            {
                                "name": "Yasothon",
                                "code": "TH-35"
                            }
                        ]
                    },
                    {
                        "name": "Turkmenistan",
                        "code": "TM",
                        "continent": "Asia",
                        "phoneNumberPrefix": 993,
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
                            "edit": "{country}_{zip}{city}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                            "show": "{zip} {city}_{country}_{firstName} {lastName}_{company}_{address1}_{address2}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "United Arab Emirates",
                        "code": "AE",
                        "continent": "Asia",
                        "phoneNumberPrefix": 971,
                        "autocompletionField": "address1",
                        "provinceKey": "EMIRATE",
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
                            "zone": "Emirate"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Abu Dhabi",
                                "code": "AZ"
                            },
                            {
                                "name": "Ajman",
                                "code": "AJ"
                            },
                            {
                                "name": "Dubai",
                                "code": "DU"
                            },
                            {
                                "name": "Fujairah",
                                "code": "FU"
                            },
                            {
                                "name": "Ras al-Khaimah",
                                "code": "RK"
                            },
                            {
                                "name": "Sharjah",
                                "code": "SH"
                            },
                            {
                                "name": "Umm al-Quwain",
                                "code": "UQ"
                            }
                        ]
                    },
                    {
                        "name": "Uzbekistan",
                        "code": "UZ",
                        "continent": "Asia",
                        "phoneNumberPrefix": 998,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Vietnam",
                        "code": "VN",
                        "continent": "Asia",
                        "phoneNumberPrefix": 84,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Yemen",
                        "code": "YE",
                        "continent": "Asia",
                        "phoneNumberPrefix": 967,
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
                        },
                        "zones": []
                    }
                ]
            },
            {
                "name": "Europe",
                "countries": [
                    {
                        "name": "Åland Islands",
                        "code": "AX",
                        "continent": "Europe",
                        "phoneNumberPrefix": 358,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Albania",
                        "code": "AL",
                        "continent": "Europe",
                        "phoneNumberPrefix": 355,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Andorra",
                        "code": "AD",
                        "continent": "Europe",
                        "phoneNumberPrefix": 376,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Armenia",
                        "code": "AM",
                        "continent": "Europe",
                        "phoneNumberPrefix": 374,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Austria",
                        "code": "AT",
                        "continent": "Europe",
                        "phoneNumberPrefix": 43,
                        "autocompletionField": "address1",
                        "provinceKey": "REGION",
                        "labels": {
                            "address1": "Street and house number",
                            "address2": "Additional address",
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
                            "address2": "Additional address (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Belarus",
                        "code": "BY",
                        "continent": "Europe",
                        "phoneNumberPrefix": 375,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Belgium",
                        "code": "BE",
                        "continent": "Europe",
                        "phoneNumberPrefix": 32,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Bosnia & Herzegovina",
                        "code": "BA",
                        "continent": "Europe",
                        "phoneNumberPrefix": 387,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Bulgaria",
                        "code": "BG",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Croatia",
                        "code": "HR",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Cyprus",
                        "code": "CY",
                        "continent": "Europe",
                        "phoneNumberPrefix": 357,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Czechia",
                        "code": "CZ",
                        "continent": "Europe",
                        "phoneNumberPrefix": 420,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Denmark",
                        "code": "DK",
                        "continent": "Europe",
                        "phoneNumberPrefix": 45,
                        "autocompletionField": "address1",
                        "provinceKey": "REGION",
                        "labels": {
                            "address1": "Street and house number",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Estonia",
                        "code": "EE",
                        "continent": "Europe",
                        "phoneNumberPrefix": 372,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Faroe Islands",
                        "code": "FO",
                        "continent": "Europe",
                        "phoneNumberPrefix": 298,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Finland",
                        "code": "FI",
                        "continent": "Europe",
                        "phoneNumberPrefix": 358,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "France",
                        "code": "FR",
                        "continent": "Europe",
                        "phoneNumberPrefix": 33,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Georgia",
                        "code": "GE",
                        "continent": "Europe",
                        "phoneNumberPrefix": 995,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Germany",
                        "code": "DE",
                        "continent": "Europe",
                        "phoneNumberPrefix": 49,
                        "autocompletionField": "address1",
                        "provinceKey": "REGION",
                        "labels": {
                            "address1": "Street and house number",
                            "address2": "Additional address",
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
                            "address2": "Additional address (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Gibraltar",
                        "code": "GI",
                        "continent": "Europe",
                        "phoneNumberPrefix": 350,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Greece",
                        "code": "GR",
                        "continent": "Europe",
                        "phoneNumberPrefix": 30,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Greenland",
                        "code": "GL",
                        "continent": "Europe",
                        "phoneNumberPrefix": 299,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Guadeloupe",
                        "code": "GP",
                        "continent": "Europe",
                        "phoneNumberPrefix": 590,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Guernsey",
                        "code": "GG",
                        "continent": "Europe",
                        "phoneNumberPrefix": 44,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Hungary",
                        "code": "HU",
                        "continent": "Europe",
                        "phoneNumberPrefix": 36,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{zip}{city}_{address1}_{address2}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{zip} {city}_{address1}_{address2}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Iceland",
                        "code": "IS",
                        "continent": "Europe",
                        "phoneNumberPrefix": 354,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Ireland",
                        "code": "IE",
                        "continent": "Europe",
                        "phoneNumberPrefix": 353,
                        "autocompletionField": "address1",
                        "provinceKey": "COUNTY",
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
                            "zone": "County"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province}_{zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Carlow",
                                "code": "CW"
                            },
                            {
                                "name": "Cavan",
                                "code": "CN"
                            },
                            {
                                "name": "Clare",
                                "code": "CE"
                            },
                            {
                                "name": "Cork",
                                "code": "CO"
                            },
                            {
                                "name": "Donegal",
                                "code": "DL"
                            },
                            {
                                "name": "Dublin",
                                "code": "D"
                            },
                            {
                                "name": "Galway",
                                "code": "G"
                            },
                            {
                                "name": "Kerry",
                                "code": "KY"
                            },
                            {
                                "name": "Kildare",
                                "code": "KE"
                            },
                            {
                                "name": "Kilkenny",
                                "code": "KK"
                            },
                            {
                                "name": "Laois",
                                "code": "LS"
                            },
                            {
                                "name": "Leitrim",
                                "code": "LM"
                            },
                            {
                                "name": "Limerick",
                                "code": "LK"
                            },
                            {
                                "name": "Longford",
                                "code": "LD"
                            },
                            {
                                "name": "Louth",
                                "code": "LH"
                            },
                            {
                                "name": "Mayo",
                                "code": "MO"
                            },
                            {
                                "name": "Meath",
                                "code": "MH"
                            },
                            {
                                "name": "Monaghan",
                                "code": "MN"
                            },
                            {
                                "name": "Offaly",
                                "code": "OY"
                            },
                            {
                                "name": "Roscommon",
                                "code": "RN"
                            },
                            {
                                "name": "Sligo",
                                "code": "SO"
                            },
                            {
                                "name": "Tipperary",
                                "code": "TA"
                            },
                            {
                                "name": "Waterford",
                                "code": "WD"
                            },
                            {
                                "name": "Westmeath",
                                "code": "WH"
                            },
                            {
                                "name": "Wexford",
                                "code": "WX"
                            },
                            {
                                "name": "Wicklow",
                                "code": "WW"
                            }
                        ]
                    },
                    {
                        "name": "Isle of Man",
                        "code": "IM",
                        "continent": "Europe",
                        "phoneNumberPrefix": 44,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Italy",
                        "code": "IT",
                        "continent": "Europe",
                        "phoneNumberPrefix": 39,
                        "autocompletionField": "address1",
                        "provinceKey": "PROVINCE",
                        "labels": {
                            "address1": "Street and house number",
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Agrigento",
                                "code": "AG"
                            },
                            {
                                "name": "Alessandria",
                                "code": "AL"
                            },
                            {
                                "name": "Ancona",
                                "code": "AN"
                            },
                            {
                                "name": "Aosta Valley",
                                "code": "AO"
                            },
                            {
                                "name": "Arezzo",
                                "code": "AR"
                            },
                            {
                                "name": "Ascoli Piceno",
                                "code": "AP"
                            },
                            {
                                "name": "Asti",
                                "code": "AT"
                            },
                            {
                                "name": "Avellino",
                                "code": "AV"
                            },
                            {
                                "name": "Bari",
                                "code": "BA"
                            },
                            {
                                "name": "Barletta-Andria-Trani",
                                "code": "BT"
                            },
                            {
                                "name": "Belluno",
                                "code": "BL"
                            },
                            {
                                "name": "Benevento",
                                "code": "BN"
                            },
                            {
                                "name": "Bergamo",
                                "code": "BG"
                            },
                            {
                                "name": "Biella",
                                "code": "BI"
                            },
                            {
                                "name": "Bologna",
                                "code": "BO"
                            },
                            {
                                "name": "South Tyrol",
                                "code": "BZ"
                            },
                            {
                                "name": "Brescia",
                                "code": "BS"
                            },
                            {
                                "name": "Brindisi",
                                "code": "BR"
                            },
                            {
                                "name": "Cagliari",
                                "code": "CA"
                            },
                            {
                                "name": "Caltanissetta",
                                "code": "CL"
                            },
                            {
                                "name": "Campobasso",
                                "code": "CB"
                            },
                            {
                                "name": "Carbonia-Iglesias",
                                "code": "CI"
                            },
                            {
                                "name": "Caserta",
                                "code": "CE"
                            },
                            {
                                "name": "Catania",
                                "code": "CT"
                            },
                            {
                                "name": "Catanzaro",
                                "code": "CZ"
                            },
                            {
                                "name": "Chieti",
                                "code": "CH"
                            },
                            {
                                "name": "Como",
                                "code": "CO"
                            },
                            {
                                "name": "Cosenza",
                                "code": "CS"
                            },
                            {
                                "name": "Cremona",
                                "code": "CR"
                            },
                            {
                                "name": "Crotone",
                                "code": "KR"
                            },
                            {
                                "name": "Cuneo",
                                "code": "CN"
                            },
                            {
                                "name": "Enna",
                                "code": "EN"
                            },
                            {
                                "name": "Fermo",
                                "code": "FM"
                            },
                            {
                                "name": "Ferrara",
                                "code": "FE"
                            },
                            {
                                "name": "Florence",
                                "code": "FI"
                            },
                            {
                                "name": "Foggia",
                                "code": "FG"
                            },
                            {
                                "name": "Forlì-Cesena",
                                "code": "FC"
                            },
                            {
                                "name": "Frosinone",
                                "code": "FR"
                            },
                            {
                                "name": "Genoa",
                                "code": "GE"
                            },
                            {
                                "name": "Gorizia",
                                "code": "GO"
                            },
                            {
                                "name": "Grosseto",
                                "code": "GR"
                            },
                            {
                                "name": "Imperia",
                                "code": "IM"
                            },
                            {
                                "name": "Isernia",
                                "code": "IS"
                            },
                            {
                                "name": "L'Aquila",
                                "code": "AQ"
                            },
                            {
                                "name": "La Spezia",
                                "code": "SP"
                            },
                            {
                                "name": "Latina",
                                "code": "LT"
                            },
                            {
                                "name": "Lecce",
                                "code": "LE"
                            },
                            {
                                "name": "Lecco",
                                "code": "LC"
                            },
                            {
                                "name": "Livorno",
                                "code": "LI"
                            },
                            {
                                "name": "Lodi",
                                "code": "LO"
                            },
                            {
                                "name": "Lucca",
                                "code": "LU"
                            },
                            {
                                "name": "Macerata",
                                "code": "MC"
                            },
                            {
                                "name": "Mantua",
                                "code": "MN"
                            },
                            {
                                "name": "Massa and Carrara",
                                "code": "MS"
                            },
                            {
                                "name": "Matera",
                                "code": "MT"
                            },
                            {
                                "name": "Medio Campidano",
                                "code": "VS"
                            },
                            {
                                "name": "Messina",
                                "code": "ME"
                            },
                            {
                                "name": "Milan",
                                "code": "MI"
                            },
                            {
                                "name": "Modena",
                                "code": "MO"
                            },
                            {
                                "name": "Monza and Brianza",
                                "code": "MB"
                            },
                            {
                                "name": "Naples",
                                "code": "NA"
                            },
                            {
                                "name": "Novara",
                                "code": "NO"
                            },
                            {
                                "name": "Nuoro",
                                "code": "NU"
                            },
                            {
                                "name": "Ogliastra",
                                "code": "OG"
                            },
                            {
                                "name": "Olbia-Tempio",
                                "code": "OT"
                            },
                            {
                                "name": "Oristano",
                                "code": "OR"
                            },
                            {
                                "name": "Padua",
                                "code": "PD"
                            },
                            {
                                "name": "Palermo",
                                "code": "PA"
                            },
                            {
                                "name": "Parma",
                                "code": "PR"
                            },
                            {
                                "name": "Pavia",
                                "code": "PV"
                            },
                            {
                                "name": "Perugia",
                                "code": "PG"
                            },
                            {
                                "name": "Pesaro and Urbino",
                                "code": "PU"
                            },
                            {
                                "name": "Pescara",
                                "code": "PE"
                            },
                            {
                                "name": "Piacenza",
                                "code": "PC"
                            },
                            {
                                "name": "Pisa",
                                "code": "PI"
                            },
                            {
                                "name": "Pistoia",
                                "code": "PT"
                            },
                            {
                                "name": "Pordenone",
                                "code": "PN"
                            },
                            {
                                "name": "Potenza",
                                "code": "PZ"
                            },
                            {
                                "name": "Prato",
                                "code": "PO"
                            },
                            {
                                "name": "Ragusa",
                                "code": "RG"
                            },
                            {
                                "name": "Ravenna",
                                "code": "RA"
                            },
                            {
                                "name": "Reggio Calabria",
                                "code": "RC"
                            },
                            {
                                "name": "Reggio Emilia",
                                "code": "RE"
                            },
                            {
                                "name": "Rieti",
                                "code": "RI"
                            },
                            {
                                "name": "Rimini",
                                "code": "RN"
                            },
                            {
                                "name": "Rome",
                                "code": "RM"
                            },
                            {
                                "name": "Rovigo",
                                "code": "RO"
                            },
                            {
                                "name": "Salerno",
                                "code": "SA"
                            },
                            {
                                "name": "Sassari",
                                "code": "SS"
                            },
                            {
                                "name": "Savona",
                                "code": "SV"
                            },
                            {
                                "name": "Siena",
                                "code": "SI"
                            },
                            {
                                "name": "Syracuse",
                                "code": "SR"
                            },
                            {
                                "name": "Sondrio",
                                "code": "SO"
                            },
                            {
                                "name": "Taranto",
                                "code": "TA"
                            },
                            {
                                "name": "Teramo",
                                "code": "TE"
                            },
                            {
                                "name": "Terni",
                                "code": "TR"
                            },
                            {
                                "name": "Turin",
                                "code": "TO"
                            },
                            {
                                "name": "Trapani",
                                "code": "TP"
                            },
                            {
                                "name": "Trentino",
                                "code": "TN"
                            },
                            {
                                "name": "Treviso",
                                "code": "TV"
                            },
                            {
                                "name": "Trieste",
                                "code": "TS"
                            },
                            {
                                "name": "Udine",
                                "code": "UD"
                            },
                            {
                                "name": "Varese",
                                "code": "VA"
                            },
                            {
                                "name": "Venice",
                                "code": "VE"
                            },
                            {
                                "name": "Verbano-Cusio-Ossola",
                                "code": "VB"
                            },
                            {
                                "name": "Vercelli",
                                "code": "VC"
                            },
                            {
                                "name": "Verona",
                                "code": "VR"
                            },
                            {
                                "name": "Vibo Valentia",
                                "code": "VV"
                            },
                            {
                                "name": "Vicenza",
                                "code": "VI"
                            },
                            {
                                "name": "Viterbo",
                                "code": "VT"
                            }
                        ]
                    },
                    {
                        "name": "Jersey",
                        "code": "JE",
                        "continent": "Europe",
                        "phoneNumberPrefix": 44,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Kosovo",
                        "code": "XK",
                        "continent": "Europe",
                        "phoneNumberPrefix": 383,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Latvia",
                        "code": "LV",
                        "continent": "Europe",
                        "phoneNumberPrefix": 371,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Liechtenstein",
                        "code": "LI",
                        "continent": "Europe",
                        "phoneNumberPrefix": 423,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Lithuania",
                        "code": "LT",
                        "continent": "Europe",
                        "phoneNumberPrefix": 370,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Luxembourg",
                        "code": "LU",
                        "continent": "Europe",
                        "phoneNumberPrefix": 352,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Malta",
                        "code": "MT",
                        "continent": "Europe",
                        "phoneNumberPrefix": 356,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Mayotte",
                        "code": "YT",
                        "continent": "Europe",
                        "phoneNumberPrefix": 262,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Moldova",
                        "code": "MD",
                        "continent": "Europe",
                        "phoneNumberPrefix": 373,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Monaco",
                        "code": "MC",
                        "continent": "Europe",
                        "phoneNumberPrefix": 377,
                        "autocompletionField": "address1",
                        "provinceKey": "REGION",
                        "labels": {
                            "address1": "Address",
                            "address2": "Apartment, suite, etc.",
                            "city": "Ward",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Montenegro",
                        "code": "ME",
                        "continent": "Europe",
                        "phoneNumberPrefix": 382,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Netherlands",
                        "code": "NL",
                        "continent": "Europe",
                        "phoneNumberPrefix": 31,
                        "autocompletionField": "address1",
                        "provinceKey": "REGION",
                        "labels": {
                            "address1": "Street and house number",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "North Macedonia",
                        "code": "MK",
                        "continent": "Europe",
                        "phoneNumberPrefix": 389,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Norway",
                        "code": "NO",
                        "continent": "Europe",
                        "phoneNumberPrefix": 47,
                        "autocompletionField": "address1",
                        "provinceKey": "REGION",
                        "labels": {
                            "address1": "Street and house number",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Poland",
                        "code": "PL",
                        "continent": "Europe",
                        "phoneNumberPrefix": 48,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Portugal",
                        "code": "PT",
                        "continent": "Europe",
                        "phoneNumberPrefix": 351,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Azores",
                                "code": "PT-20"
                            },
                            {
                                "name": "Aveiro",
                                "code": "PT-01"
                            },
                            {
                                "name": "Beja",
                                "code": "PT-02"
                            },
                            {
                                "name": "Braga",
                                "code": "PT-03"
                            },
                            {
                                "name": "Bragança",
                                "code": "PT-04"
                            },
                            {
                                "name": "Castelo Branco",
                                "code": "PT-05"
                            },
                            {
                                "name": "Coimbra",
                                "code": "PT-06"
                            },
                            {
                                "name": "Évora",
                                "code": "PT-07"
                            },
                            {
                                "name": "Faro",
                                "code": "PT-08"
                            },
                            {
                                "name": "Guarda",
                                "code": "PT-09"
                            },
                            {
                                "name": "Leiria",
                                "code": "PT-10"
                            },
                            {
                                "name": "Lisbon",
                                "code": "PT-11"
                            },
                            {
                                "name": "Madeira",
                                "code": "PT-30"
                            },
                            {
                                "name": "Portalegre",
                                "code": "PT-12"
                            },
                            {
                                "name": "Porto",
                                "code": "PT-13"
                            },
                            {
                                "name": "Santarém",
                                "code": "PT-14"
                            },
                            {
                                "name": "Setúbal",
                                "code": "PT-15"
                            },
                            {
                                "name": "Viana do Castelo",
                                "code": "PT-16"
                            },
                            {
                                "name": "Vila Real",
                                "code": "PT-17"
                            },
                            {
                                "name": "Viseu",
                                "code": "PT-18"
                            }
                        ]
                    },
                    {
                        "name": "Réunion",
                        "code": "RE",
                        "continent": "Europe",
                        "phoneNumberPrefix": 262,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Romania",
                        "code": "RO",
                        "continent": "Europe",
                        "phoneNumberPrefix": 40,
                        "autocompletionField": "address1",
                        "provinceKey": "COUNTY",
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
                            "zone": "County"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Alba",
                                "code": "AB"
                            },
                            {
                                "name": "Arad",
                                "code": "AR"
                            },
                            {
                                "name": "Argeș",
                                "code": "AG"
                            },
                            {
                                "name": "Bacău",
                                "code": "BC"
                            },
                            {
                                "name": "Bihor",
                                "code": "BH"
                            },
                            {
                                "name": "Bistriţa-Năsăud",
                                "code": "BN"
                            },
                            {
                                "name": "Botoşani",
                                "code": "BT"
                            },
                            {
                                "name": "Brăila",
                                "code": "BR"
                            },
                            {
                                "name": "Braşov",
                                "code": "BV"
                            },
                            {
                                "name": "Bucharest",
                                "code": "B"
                            },
                            {
                                "name": "Buzău",
                                "code": "BZ"
                            },
                            {
                                "name": "Caraș-Severin",
                                "code": "CS"
                            },
                            {
                                "name": "Cluj",
                                "code": "CJ"
                            },
                            {
                                "name": "Constanța",
                                "code": "CT"
                            },
                            {
                                "name": "Covasna",
                                "code": "CV"
                            },
                            {
                                "name": "Călărași",
                                "code": "CL"
                            },
                            {
                                "name": "Dolj",
                                "code": "DJ"
                            },
                            {
                                "name": "Dâmbovița",
                                "code": "DB"
                            },
                            {
                                "name": "Galați",
                                "code": "GL"
                            },
                            {
                                "name": "Giurgiu",
                                "code": "GR"
                            },
                            {
                                "name": "Gorj",
                                "code": "GJ"
                            },
                            {
                                "name": "Harghita",
                                "code": "HR"
                            },
                            {
                                "name": "Hunedoara",
                                "code": "HD"
                            },
                            {
                                "name": "Ialomița",
                                "code": "IL"
                            },
                            {
                                "name": "Iași",
                                "code": "IS"
                            },
                            {
                                "name": "Ilfov",
                                "code": "IF"
                            },
                            {
                                "name": "Maramureş",
                                "code": "MM"
                            },
                            {
                                "name": "Mehedinți",
                                "code": "MH"
                            },
                            {
                                "name": "Mureş",
                                "code": "MS"
                            },
                            {
                                "name": "Neamţ",
                                "code": "NT"
                            },
                            {
                                "name": "Olt",
                                "code": "OT"
                            },
                            {
                                "name": "Prahova",
                                "code": "PH"
                            },
                            {
                                "name": "Sălaj",
                                "code": "SJ"
                            },
                            {
                                "name": "Satu Mare",
                                "code": "SM"
                            },
                            {
                                "name": "Sibiu",
                                "code": "SB"
                            },
                            {
                                "name": "Suceava",
                                "code": "SV"
                            },
                            {
                                "name": "Teleorman",
                                "code": "TR"
                            },
                            {
                                "name": "Timiș",
                                "code": "TM"
                            },
                            {
                                "name": "Tulcea",
                                "code": "TL"
                            },
                            {
                                "name": "Vâlcea",
                                "code": "VL"
                            },
                            {
                                "name": "Vaslui",
                                "code": "VS"
                            },
                            {
                                "name": "Vrancea",
                                "code": "VN"
                            }
                        ]
                    },
                    {
                        "name": "San Marino",
                        "code": "SM",
                        "continent": "Europe",
                        "phoneNumberPrefix": 378,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Serbia",
                        "code": "RS",
                        "continent": "Europe",
                        "phoneNumberPrefix": 381,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Slovakia",
                        "code": "SK",
                        "continent": "Europe",
                        "phoneNumberPrefix": 421,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Slovenia",
                        "code": "SI",
                        "continent": "Europe",
                        "phoneNumberPrefix": 386,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Spain",
                        "code": "ES",
                        "continent": "Europe",
                        "phoneNumberPrefix": 34,
                        "autocompletionField": "address1",
                        "provinceKey": "PROVINCE",
                        "labels": {
                            "address1": "Street and house number",
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "A Coruña",
                                "code": "C"
                            },
                            {
                                "name": "Álava",
                                "code": "VI"
                            },
                            {
                                "name": "Albacete",
                                "code": "AB"
                            },
                            {
                                "name": "Alicante",
                                "code": "A"
                            },
                            {
                                "name": "Almería",
                                "code": "AL"
                            },
                            {
                                "name": "Asturias Province",
                                "code": "O"
                            },
                            {
                                "name": "Ávila",
                                "code": "AV"
                            },
                            {
                                "name": "Badajoz",
                                "code": "BA"
                            },
                            {
                                "name": "Balears Province",
                                "code": "PM"
                            },
                            {
                                "name": "Barcelona",
                                "code": "B"
                            },
                            {
                                "name": "Burgos",
                                "code": "BU"
                            },
                            {
                                "name": "Cáceres",
                                "code": "CC"
                            },
                            {
                                "name": "Cádiz",
                                "code": "CA"
                            },
                            {
                                "name": "Cantabria Province",
                                "code": "S"
                            },
                            {
                                "name": "Castellón",
                                "code": "CS"
                            },
                            {
                                "name": "Ceuta",
                                "code": "CE"
                            },
                            {
                                "name": "Ciudad Real",
                                "code": "CR"
                            },
                            {
                                "name": "Córdoba",
                                "code": "CO"
                            },
                            {
                                "name": "Cuenca",
                                "code": "CU"
                            },
                            {
                                "name": "Girona",
                                "code": "GI"
                            },
                            {
                                "name": "Granada",
                                "code": "GR"
                            },
                            {
                                "name": "Guadalajara",
                                "code": "GU"
                            },
                            {
                                "name": "Gipuzkoa",
                                "code": "SS"
                            },
                            {
                                "name": "Huelva",
                                "code": "H"
                            },
                            {
                                "name": "Huesca",
                                "code": "HU"
                            },
                            {
                                "name": "Jaén",
                                "code": "J"
                            },
                            {
                                "name": "La Rioja Province",
                                "code": "LO"
                            },
                            {
                                "name": "Las Palmas",
                                "code": "GC"
                            },
                            {
                                "name": "León",
                                "code": "LE"
                            },
                            {
                                "name": "Lleida",
                                "code": "L"
                            },
                            {
                                "name": "Lugo",
                                "code": "LU"
                            },
                            {
                                "name": "Madrid Province",
                                "code": "M"
                            },
                            {
                                "name": "Málaga",
                                "code": "MA"
                            },
                            {
                                "name": "Melilla",
                                "code": "ML"
                            },
                            {
                                "name": "Murcia",
                                "code": "MU"
                            },
                            {
                                "name": "Navarra",
                                "code": "NA"
                            },
                            {
                                "name": "Ourense",
                                "code": "OR"
                            },
                            {
                                "name": "Palencia",
                                "code": "P"
                            },
                            {
                                "name": "Pontevedra",
                                "code": "PO"
                            },
                            {
                                "name": "Salamanca",
                                "code": "SA"
                            },
                            {
                                "name": "Santa Cruz de Tenerife",
                                "code": "TF"
                            },
                            {
                                "name": "Segovia",
                                "code": "SG"
                            },
                            {
                                "name": "Seville",
                                "code": "SE"
                            },
                            {
                                "name": "Soria",
                                "code": "SO"
                            },
                            {
                                "name": "Tarragona",
                                "code": "T"
                            },
                            {
                                "name": "Teruel",
                                "code": "TE"
                            },
                            {
                                "name": "Toledo",
                                "code": "TO"
                            },
                            {
                                "name": "Valencia",
                                "code": "V"
                            },
                            {
                                "name": "Valladolid",
                                "code": "VA"
                            },
                            {
                                "name": "Biscay",
                                "code": "BI"
                            },
                            {
                                "name": "Zamora",
                                "code": "ZA"
                            },
                            {
                                "name": "Zaragoza",
                                "code": "Z"
                            }
                        ]
                    },
                    {
                        "name": "Svalbard & Jan Mayen",
                        "code": "SJ",
                        "continent": "Europe",
                        "phoneNumberPrefix": 47,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Sweden",
                        "code": "SE",
                        "continent": "Europe",
                        "phoneNumberPrefix": 46,
                        "autocompletionField": "address1",
                        "provinceKey": "REGION",
                        "labels": {
                            "address1": "Street and house number",
                            "address2": "Apartment, suite, etc.",
                            "city": "City/town",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Switzerland",
                        "code": "CH",
                        "continent": "Europe",
                        "phoneNumberPrefix": 41,
                        "autocompletionField": "address1",
                        "provinceKey": "REGION",
                        "labels": {
                            "address1": "Street and house number",
                            "address2": "Additional address",
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
                            "address2": "Additional address (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Turkey",
                        "code": "TR",
                        "continent": "Europe",
                        "phoneNumberPrefix": 90,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Ukraine",
                        "code": "UA",
                        "continent": "Europe",
                        "phoneNumberPrefix": 380,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "United Kingdom",
                        "code": "GB",
                        "continent": "Europe",
                        "phoneNumberPrefix": 44,
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
                            "postalCode": "Postcode",
                            "zone": "Region"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "British Forces",
                                "code": "BFP"
                            },
                            {
                                "name": "England",
                                "code": "ENG"
                            },
                            {
                                "name": "Northern Ireland",
                                "code": "NIR"
                            },
                            {
                                "name": "Scotland",
                                "code": "SCT"
                            },
                            {
                                "name": "Wales",
                                "code": "WLS"
                            }
                        ]
                    },
                    {
                        "name": "Vatican City",
                        "code": "VA",
                        "continent": "Europe",
                        "phoneNumberPrefix": 39,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {country}_{phone}"
                        },
                        "zones": []
                    }
                ]
            },
            {
                "name": "Africa",
                "countries": [
                    {
                        "name": "Algeria",
                        "code": "DZ",
                        "continent": "Africa",
                        "phoneNumberPrefix": 213,
                        "autocompletionField": "address1",
                        "provinceKey": "PROVINCE",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Angola",
                        "code": "AO",
                        "continent": "Africa",
                        "phoneNumberPrefix": 244,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Ascension Island",
                        "code": "AC",
                        "continent": "Africa",
                        "phoneNumberPrefix": 247,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Benin",
                        "code": "BJ",
                        "continent": "Africa",
                        "phoneNumberPrefix": 229,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Botswana",
                        "code": "BW",
                        "continent": "Africa",
                        "phoneNumberPrefix": 267,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Burkina Faso",
                        "code": "BF",
                        "continent": "Africa",
                        "phoneNumberPrefix": 226,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Burundi",
                        "code": "BI",
                        "continent": "Africa",
                        "phoneNumberPrefix": 257,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Cameroon",
                        "code": "CM",
                        "continent": "Africa",
                        "phoneNumberPrefix": 237,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Cape Verde",
                        "code": "CV",
                        "continent": "Africa",
                        "phoneNumberPrefix": 238,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Central African Republic",
                        "code": "CF",
                        "continent": "Africa",
                        "phoneNumberPrefix": 236,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Chad",
                        "code": "TD",
                        "continent": "Africa",
                        "phoneNumberPrefix": 235,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Comoros",
                        "code": "KM",
                        "continent": "Africa",
                        "phoneNumberPrefix": 269,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Congo - Brazzaville",
                        "code": "CG",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Congo - Kinshasa",
                        "code": "CD",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Côte d'Ivoire",
                        "code": "CI",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Djibouti",
                        "code": "DJ",
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Egypt",
                        "code": "EG",
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
                        },
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
                        ]
                    },
                    {
                        "name": "Equatorial Guinea",
                        "code": "GQ",
                        "continent": "Africa",
                        "phoneNumberPrefix": 240,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Eritrea",
                        "code": "ER",
                        "continent": "Africa",
                        "phoneNumberPrefix": 291,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Eswatini",
                        "code": "SZ",
                        "continent": "Africa",
                        "phoneNumberPrefix": 268,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Ethiopia",
                        "code": "ET",
                        "continent": "Africa",
                        "phoneNumberPrefix": 251,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Gabon",
                        "code": "GA",
                        "continent": "Africa",
                        "phoneNumberPrefix": 241,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Gambia",
                        "code": "GM",
                        "continent": "Africa",
                        "phoneNumberPrefix": 220,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Ghana",
                        "code": "GH",
                        "continent": "Africa",
                        "phoneNumberPrefix": 233,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Guinea",
                        "code": "GN",
                        "continent": "Africa",
                        "phoneNumberPrefix": 224,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Guinea-Bissau",
                        "code": "GW",
                        "continent": "Africa",
                        "phoneNumberPrefix": 245,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Kenya",
                        "code": "KE",
                        "continent": "Africa",
                        "phoneNumberPrefix": 254,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Lesotho",
                        "code": "LS",
                        "continent": "Africa",
                        "phoneNumberPrefix": 266,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Liberia",
                        "code": "LR",
                        "continent": "Africa",
                        "phoneNumberPrefix": 231,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Libya",
                        "code": "LY",
                        "continent": "Africa",
                        "phoneNumberPrefix": 218,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Madagascar",
                        "code": "MG",
                        "continent": "Africa",
                        "phoneNumberPrefix": 261,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Malawi",
                        "code": "MW",
                        "continent": "Africa",
                        "phoneNumberPrefix": 265,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Mali",
                        "code": "ML",
                        "continent": "Africa",
                        "phoneNumberPrefix": 223,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Mauritania",
                        "code": "MR",
                        "continent": "Africa",
                        "phoneNumberPrefix": 222,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Mauritius",
                        "code": "MU",
                        "continent": "Africa",
                        "phoneNumberPrefix": 230,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Morocco",
                        "code": "MA",
                        "continent": "Africa",
                        "phoneNumberPrefix": 212,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Mozambique",
                        "code": "MZ",
                        "continent": "Africa",
                        "phoneNumberPrefix": 258,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Namibia",
                        "code": "NA",
                        "continent": "Africa",
                        "phoneNumberPrefix": 264,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Niger",
                        "code": "NE",
                        "continent": "Africa",
                        "phoneNumberPrefix": 227,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Nigeria",
                        "code": "NG",
                        "continent": "Africa",
                        "phoneNumberPrefix": 234,
                        "autocompletionField": "address1",
                        "provinceKey": "STATE",
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
                            "zone": "State"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Abia",
                                "code": "AB"
                            },
                            {
                                "name": "Federal Capital Territory",
                                "code": "FC"
                            },
                            {
                                "name": "Adamawa",
                                "code": "AD"
                            },
                            {
                                "name": "Akwa Ibom",
                                "code": "AK"
                            },
                            {
                                "name": "Anambra",
                                "code": "AN"
                            },
                            {
                                "name": "Bauchi",
                                "code": "BA"
                            },
                            {
                                "name": "Bayelsa",
                                "code": "BY"
                            },
                            {
                                "name": "Benue",
                                "code": "BE"
                            },
                            {
                                "name": "Borno",
                                "code": "BO"
                            },
                            {
                                "name": "Cross River",
                                "code": "CR"
                            },
                            {
                                "name": "Delta",
                                "code": "DE"
                            },
                            {
                                "name": "Ebonyi",
                                "code": "EB"
                            },
                            {
                                "name": "Edo",
                                "code": "ED"
                            },
                            {
                                "name": "Ekiti",
                                "code": "EK"
                            },
                            {
                                "name": "Enugu",
                                "code": "EN"
                            },
                            {
                                "name": "Gombe",
                                "code": "GO"
                            },
                            {
                                "name": "Imo",
                                "code": "IM"
                            },
                            {
                                "name": "Jigawa",
                                "code": "JI"
                            },
                            {
                                "name": "Kaduna",
                                "code": "KD"
                            },
                            {
                                "name": "Kano",
                                "code": "KN"
                            },
                            {
                                "name": "Katsina",
                                "code": "KT"
                            },
                            {
                                "name": "Kebbi",
                                "code": "KE"
                            },
                            {
                                "name": "Kogi",
                                "code": "KO"
                            },
                            {
                                "name": "Kwara",
                                "code": "KW"
                            },
                            {
                                "name": "Lagos",
                                "code": "LA"
                            },
                            {
                                "name": "Nasarawa",
                                "code": "NA"
                            },
                            {
                                "name": "Niger",
                                "code": "NI"
                            },
                            {
                                "name": "Ogun",
                                "code": "OG"
                            },
                            {
                                "name": "Ondo",
                                "code": "ON"
                            },
                            {
                                "name": "Osun",
                                "code": "OS"
                            },
                            {
                                "name": "Oyo",
                                "code": "OY"
                            },
                            {
                                "name": "Plateau",
                                "code": "PL"
                            },
                            {
                                "name": "Rivers",
                                "code": "RI"
                            },
                            {
                                "name": "Sokoto",
                                "code": "SO"
                            },
                            {
                                "name": "Taraba",
                                "code": "TA"
                            },
                            {
                                "name": "Yobe",
                                "code": "YO"
                            },
                            {
                                "name": "Zamfara",
                                "code": "ZA"
                            }
                        ]
                    },
                    {
                        "name": "Rwanda",
                        "code": "RW",
                        "continent": "Africa",
                        "phoneNumberPrefix": 250,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "São Tomé & Príncipe",
                        "code": "ST",
                        "continent": "Africa",
                        "phoneNumberPrefix": 239,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Senegal",
                        "code": "SN",
                        "continent": "Africa",
                        "phoneNumberPrefix": 221,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Seychelles",
                        "code": "SC",
                        "continent": "Africa",
                        "phoneNumberPrefix": 248,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Sierra Leone",
                        "code": "SL",
                        "continent": "Africa",
                        "phoneNumberPrefix": 232,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Somalia",
                        "code": "SO",
                        "continent": "Africa",
                        "phoneNumberPrefix": 252,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "South Africa",
                        "code": "ZA",
                        "continent": "Africa",
                        "phoneNumberPrefix": 27,
                        "autocompletionField": "address1",
                        "provinceKey": "PROVINCE",
                        "labels": {
                            "address1": "Address",
                            "address2": "Suburb",
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
                            "address2": "Suburb (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{province}_{zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Eastern Cape",
                                "code": "EC"
                            },
                            {
                                "name": "Free State",
                                "code": "FS"
                            },
                            {
                                "name": "Gauteng",
                                "code": "GP"
                            },
                            {
                                "name": "KwaZulu-Natal",
                                "code": "NL"
                            },
                            {
                                "name": "Limpopo",
                                "code": "LP"
                            },
                            {
                                "name": "Mpumalanga",
                                "code": "MP"
                            },
                            {
                                "name": "North West",
                                "code": "NW"
                            },
                            {
                                "name": "Northern Cape",
                                "code": "NC"
                            },
                            {
                                "name": "Western Cape",
                                "code": "WC"
                            }
                        ]
                    },
                    {
                        "name": "South Sudan",
                        "code": "SS",
                        "continent": "Africa",
                        "phoneNumberPrefix": 211,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "St. Helena",
                        "code": "SH",
                        "continent": "Africa",
                        "phoneNumberPrefix": 290,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Sudan",
                        "code": "SD",
                        "continent": "Africa",
                        "phoneNumberPrefix": 249,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Tanzania",
                        "code": "TZ",
                        "continent": "Africa",
                        "phoneNumberPrefix": 255,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Togo",
                        "code": "TG",
                        "continent": "Africa",
                        "phoneNumberPrefix": 228,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Tristan da Cunha",
                        "code": "TA",
                        "continent": "Africa",
                        "phoneNumberPrefix": 2908,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Tunisia",
                        "code": "TN",
                        "continent": "Africa",
                        "phoneNumberPrefix": 216,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Uganda",
                        "code": "UG",
                        "continent": "Africa",
                        "phoneNumberPrefix": 256,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Western Sahara",
                        "code": "EH",
                        "continent": "Africa",
                        "phoneNumberPrefix": 212,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Zambia",
                        "code": "ZM",
                        "continent": "Africa",
                        "phoneNumberPrefix": 260,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Zimbabwe",
                        "code": "ZW",
                        "continent": "Africa",
                        "phoneNumberPrefix": 263,
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
                        },
                        "zones": []
                    }
                ]
            },
            {
                "name": "Central America",
                "countries": [
                    {
                        "name": "Anguilla",
                        "code": "AI",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{country} {zip}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Antigua & Barbuda",
                        "code": "AG",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Aruba",
                        "code": "AW",
                        "continent": "Central America",
                        "phoneNumberPrefix": 297,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Bahamas",
                        "code": "BS",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Barbados",
                        "code": "BB",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Belize",
                        "code": "BZ",
                        "continent": "Central America",
                        "phoneNumberPrefix": 501,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Bermuda",
                        "code": "BM",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "British Virgin Islands",
                        "code": "VG",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Cayman Islands",
                        "code": "KY",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Costa Rica",
                        "code": "CR",
                        "continent": "Central America",
                        "phoneNumberPrefix": 506,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Curaçao",
                        "code": "CW",
                        "continent": "Central America",
                        "phoneNumberPrefix": 599,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Dominica",
                        "code": "DM",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Dominican Republic",
                        "code": "DO",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "El Salvador",
                        "code": "SV",
                        "continent": "Central America",
                        "phoneNumberPrefix": 503,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Grenada",
                        "code": "GD",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Guatemala",
                        "code": "GT",
                        "continent": "Central America",
                        "phoneNumberPrefix": 502,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province}_{zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Alta Verapaz",
                                "code": "AVE"
                            },
                            {
                                "name": "Baja Verapaz",
                                "code": "BVE"
                            },
                            {
                                "name": "Chimaltenango",
                                "code": "CMT"
                            },
                            {
                                "name": "Chiquimula",
                                "code": "CQM"
                            },
                            {
                                "name": "El Progreso",
                                "code": "EPR"
                            },
                            {
                                "name": "Escuintla",
                                "code": "ESC"
                            },
                            {
                                "name": "Guatemala",
                                "code": "GUA"
                            },
                            {
                                "name": "Huehuetenango",
                                "code": "HUE"
                            },
                            {
                                "name": "Izabal",
                                "code": "IZA"
                            },
                            {
                                "name": "Jalapa",
                                "code": "JAL"
                            },
                            {
                                "name": "Jutiapa",
                                "code": "JUT"
                            },
                            {
                                "name": "Petén",
                                "code": "PET"
                            },
                            {
                                "name": "Quetzaltenango",
                                "code": "QUE"
                            },
                            {
                                "name": "Quiché",
                                "code": "QUI"
                            },
                            {
                                "name": "Retalhuleu",
                                "code": "RET"
                            },
                            {
                                "name": "Sacatepéquez",
                                "code": "SAC"
                            },
                            {
                                "name": "San Marcos",
                                "code": "SMA"
                            },
                            {
                                "name": "Santa Rosa",
                                "code": "SRO"
                            },
                            {
                                "name": "Sololá",
                                "code": "SOL"
                            },
                            {
                                "name": "Suchitepéquez",
                                "code": "SUC"
                            },
                            {
                                "name": "Totonicapán",
                                "code": "TOT"
                            },
                            {
                                "name": "Zacapa",
                                "code": "ZAC"
                            }
                        ]
                    },
                    {
                        "name": "Haiti",
                        "code": "HT",
                        "continent": "Central America",
                        "phoneNumberPrefix": 509,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Honduras",
                        "code": "HN",
                        "continent": "Central America",
                        "phoneNumberPrefix": 504,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Jamaica",
                        "code": "JM",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Martinique",
                        "code": "MQ",
                        "continent": "Central America",
                        "phoneNumberPrefix": 596,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Montserrat",
                        "code": "MS",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Nicaragua",
                        "code": "NI",
                        "continent": "Central America",
                        "phoneNumberPrefix": 505,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}_{city}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Panama",
                        "code": "PA",
                        "continent": "Central America",
                        "phoneNumberPrefix": 507,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Bocas del Toro",
                                "code": "PA-1"
                            },
                            {
                                "name": "Chiriquí",
                                "code": "PA-4"
                            },
                            {
                                "name": "Coclé",
                                "code": "PA-2"
                            },
                            {
                                "name": "Colón",
                                "code": "PA-3"
                            },
                            {
                                "name": "Darién",
                                "code": "PA-5"
                            },
                            {
                                "name": "Emberá",
                                "code": "PA-EM"
                            },
                            {
                                "name": "Herrera",
                                "code": "PA-6"
                            },
                            {
                                "name": "Guna Yala",
                                "code": "PA-KY"
                            },
                            {
                                "name": "Los Santos",
                                "code": "PA-7"
                            },
                            {
                                "name": "Ngöbe-Buglé",
                                "code": "PA-NB"
                            },
                            {
                                "name": "Panamá",
                                "code": "PA-8"
                            },
                            {
                                "name": "West Panamá",
                                "code": "PA-10"
                            },
                            {
                                "name": "Veraguas",
                                "code": "PA-9"
                            }
                        ]
                    },
                    {
                        "name": "Sint Maarten",
                        "code": "SX",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "St. Barthélemy",
                        "code": "BL",
                        "continent": "Central America",
                        "phoneNumberPrefix": 590,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "St. Kitts & Nevis",
                        "code": "KN",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "St. Lucia",
                        "code": "LC",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "St. Martin",
                        "code": "MF",
                        "continent": "Central America",
                        "phoneNumberPrefix": 590,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "St. Pierre & Miquelon",
                        "code": "PM",
                        "continent": "Central America",
                        "phoneNumberPrefix": 508,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "St. Vincent & Grenadines",
                        "code": "VC",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Trinidad & Tobago",
                        "code": "TT",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Turks & Caicos Islands",
                        "code": "TC",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "U.S. Outlying Islands",
                        "code": "UM",
                        "continent": "Central America",
                        "phoneNumberPrefix": 1,
                        "autocompletionField": "address1",
                        "provinceKey": "STATE",
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
                        },
                        "zones": []
                    }
                ]
            },
            {
                "name": "South America",
                "countries": [
                    {
                        "name": "Argentina",
                        "code": "AR",
                        "continent": "South America",
                        "phoneNumberPrefix": 54,
                        "autocompletionField": "address1",
                        "provinceKey": "PROVINCE",
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
                            "zone": "Province"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Buenos Aires Province",
                                "code": "B"
                            },
                            {
                                "name": "Catamarca",
                                "code": "K"
                            },
                            {
                                "name": "Chaco",
                                "code": "H"
                            },
                            {
                                "name": "Chubut",
                                "code": "U"
                            },
                            {
                                "name": "Buenos Aires (Autonomous City)",
                                "code": "C"
                            },
                            {
                                "name": "Córdoba",
                                "code": "X"
                            },
                            {
                                "name": "Corrientes",
                                "code": "W"
                            },
                            {
                                "name": "Entre Ríos",
                                "code": "E"
                            },
                            {
                                "name": "Formosa",
                                "code": "P"
                            },
                            {
                                "name": "Jujuy",
                                "code": "Y"
                            },
                            {
                                "name": "La Pampa",
                                "code": "L"
                            },
                            {
                                "name": "La Rioja",
                                "code": "F"
                            },
                            {
                                "name": "Mendoza",
                                "code": "M"
                            },
                            {
                                "name": "Misiones",
                                "code": "N"
                            },
                            {
                                "name": "Neuquén",
                                "code": "Q"
                            },
                            {
                                "name": "Río Negro",
                                "code": "R"
                            },
                            {
                                "name": "Salta",
                                "code": "A"
                            },
                            {
                                "name": "San Juan",
                                "code": "J"
                            },
                            {
                                "name": "San Luis",
                                "code": "D"
                            },
                            {
                                "name": "Santa Cruz",
                                "code": "Z"
                            },
                            {
                                "name": "Santa Fe",
                                "code": "S"
                            },
                            {
                                "name": "Santiago del Estero",
                                "code": "G"
                            },
                            {
                                "name": "Tierra del Fuego",
                                "code": "V"
                            },
                            {
                                "name": "Tucumán",
                                "code": "T"
                            }
                        ]
                    },
                    {
                        "name": "Bolivia",
                        "code": "BO",
                        "continent": "South America",
                        "phoneNumberPrefix": 591,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Brazil",
                        "code": "BR",
                        "continent": "South America",
                        "phoneNumberPrefix": 55,
                        "autocompletionField": "address1",
                        "provinceKey": "STATE",
                        "labels": {
                            "address1": "Street and house number",
                            "address2": "Apartment, suite, etc.",
                            "city": "City",
                            "company": "Company",
                            "country": "Country/region",
                            "firstName": "First name",
                            "lastName": "Last name",
                            "phone": "Phone",
                            "postalCode": "Postal code",
                            "zone": "State"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province}_{zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Acre",
                                "code": "AC"
                            },
                            {
                                "name": "Alagoas",
                                "code": "AL"
                            },
                            {
                                "name": "Amapá",
                                "code": "AP"
                            },
                            {
                                "name": "Amazonas",
                                "code": "AM"
                            },
                            {
                                "name": "Bahia",
                                "code": "BA"
                            },
                            {
                                "name": "Ceará",
                                "code": "CE"
                            },
                            {
                                "name": "Federal District",
                                "code": "DF"
                            },
                            {
                                "name": "Espírito Santo",
                                "code": "ES"
                            },
                            {
                                "name": "Goiás",
                                "code": "GO"
                            },
                            {
                                "name": "Maranhão",
                                "code": "MA"
                            },
                            {
                                "name": "Mato Grosso",
                                "code": "MT"
                            },
                            {
                                "name": "Mato Grosso do Sul",
                                "code": "MS"
                            },
                            {
                                "name": "Minas Gerais",
                                "code": "MG"
                            },
                            {
                                "name": "Pará",
                                "code": "PA"
                            },
                            {
                                "name": "Paraíba",
                                "code": "PB"
                            },
                            {
                                "name": "Paraná",
                                "code": "PR"
                            },
                            {
                                "name": "Pernambuco",
                                "code": "PE"
                            },
                            {
                                "name": "Piauí",
                                "code": "PI"
                            },
                            {
                                "name": "Rio Grande do Norte",
                                "code": "RN"
                            },
                            {
                                "name": "Rio Grande do Sul",
                                "code": "RS"
                            },
                            {
                                "name": "Rio de Janeiro",
                                "code": "RJ"
                            },
                            {
                                "name": "Rondônia",
                                "code": "RO"
                            },
                            {
                                "name": "Roraima",
                                "code": "RR"
                            },
                            {
                                "name": "Santa Catarina",
                                "code": "SC"
                            },
                            {
                                "name": "São Paulo",
                                "code": "SP"
                            },
                            {
                                "name": "Sergipe",
                                "code": "SE"
                            },
                            {
                                "name": "Tocantins",
                                "code": "TO"
                            }
                        ]
                    },
                    {
                        "name": "Caribbean Netherlands",
                        "code": "BQ",
                        "continent": "South America",
                        "phoneNumberPrefix": 599,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Chile",
                        "code": "CL",
                        "continent": "South America",
                        "phoneNumberPrefix": 56,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}_{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Arica y Parinacota",
                                "code": "AP"
                            },
                            {
                                "name": "Tarapacá",
                                "code": "TA"
                            },
                            {
                                "name": "Antofagasta",
                                "code": "AN"
                            },
                            {
                                "name": "Atacama",
                                "code": "AT"
                            },
                            {
                                "name": "Coquimbo",
                                "code": "CO"
                            },
                            {
                                "name": "Valparaíso",
                                "code": "VS"
                            },
                            {
                                "name": "Santiago Metropolitan",
                                "code": "RM"
                            },
                            {
                                "name": "Libertador General Bernardo O'Higgins",
                                "code": "LI"
                            },
                            {
                                "name": "Maule",
                                "code": "ML"
                            },
                            {
                                "name": "Ñuble",
                                "code": "NB"
                            },
                            {
                                "name": "Bío Bío",
                                "code": "BI"
                            },
                            {
                                "name": "Araucanía",
                                "code": "AR"
                            },
                            {
                                "name": "Los Ríos",
                                "code": "LR"
                            },
                            {
                                "name": "Los Lagos",
                                "code": "LL"
                            },
                            {
                                "name": "Aysén",
                                "code": "AI"
                            },
                            {
                                "name": "Magallanes Region",
                                "code": "MA"
                            }
                        ]
                    },
                    {
                        "name": "Colombia",
                        "code": "CO",
                        "continent": "South America",
                        "phoneNumberPrefix": 57,
                        "autocompletionField": "address1",
                        "provinceKey": "PROVINCE",
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
                            "zone": "Province"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Capital District",
                                "code": "DC"
                            },
                            {
                                "name": "Amazonas",
                                "code": "AMA"
                            },
                            {
                                "name": "Antioquia",
                                "code": "ANT"
                            },
                            {
                                "name": "Arauca",
                                "code": "ARA"
                            },
                            {
                                "name": "Atlántico",
                                "code": "ATL"
                            },
                            {
                                "name": "Bolívar",
                                "code": "BOL"
                            },
                            {
                                "name": "Boyacá",
                                "code": "BOY"
                            },
                            {
                                "name": "Caldas",
                                "code": "CAL"
                            },
                            {
                                "name": "Caquetá",
                                "code": "CAQ"
                            },
                            {
                                "name": "Casanare",
                                "code": "CAS"
                            },
                            {
                                "name": "Cauca",
                                "code": "CAU"
                            },
                            {
                                "name": "Cesar",
                                "code": "CES"
                            },
                            {
                                "name": "Chocó",
                                "code": "CHO"
                            },
                            {
                                "name": "Córdoba",
                                "code": "COR"
                            },
                            {
                                "name": "Cundinamarca",
                                "code": "CUN"
                            },
                            {
                                "name": "Guainía",
                                "code": "GUA"
                            },
                            {
                                "name": "Guaviare",
                                "code": "GUV"
                            },
                            {
                                "name": "Huila",
                                "code": "HUI"
                            },
                            {
                                "name": "La Guajira",
                                "code": "LAG"
                            },
                            {
                                "name": "Magdalena",
                                "code": "MAG"
                            },
                            {
                                "name": "Meta",
                                "code": "MET"
                            },
                            {
                                "name": "Nariño",
                                "code": "NAR"
                            },
                            {
                                "name": "Norte de Santander",
                                "code": "NSA"
                            },
                            {
                                "name": "Putumayo",
                                "code": "PUT"
                            },
                            {
                                "name": "Quindío",
                                "code": "QUI"
                            },
                            {
                                "name": "Risaralda",
                                "code": "RIS"
                            },
                            {
                                "name": "San Andrés & Providencia",
                                "code": "SAP"
                            },
                            {
                                "name": "Santander",
                                "code": "SAN"
                            },
                            {
                                "name": "Sucre",
                                "code": "SUC"
                            },
                            {
                                "name": "Tolima",
                                "code": "TOL"
                            },
                            {
                                "name": "Valle del Cauca",
                                "code": "VAC"
                            },
                            {
                                "name": "Vaupés",
                                "code": "VAU"
                            },
                            {
                                "name": "Vichada",
                                "code": "VID"
                            }
                        ]
                    },
                    {
                        "name": "Ecuador",
                        "code": "EC",
                        "continent": "South America",
                        "phoneNumberPrefix": 593,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Falkland Islands",
                        "code": "FK",
                        "continent": "South America",
                        "phoneNumberPrefix": 500,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "French Guiana",
                        "code": "GF",
                        "continent": "South America",
                        "phoneNumberPrefix": 594,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Guyana",
                        "code": "GY",
                        "continent": "South America",
                        "phoneNumberPrefix": 592,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Paraguay",
                        "code": "PY",
                        "continent": "South America",
                        "phoneNumberPrefix": 595,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Peru",
                        "code": "PE",
                        "continent": "South America",
                        "phoneNumberPrefix": 51,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip}_{province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Amazonas",
                                "code": "PE-AMA"
                            },
                            {
                                "name": "Ancash",
                                "code": "PE-ANC"
                            },
                            {
                                "name": "Apurímac",
                                "code": "PE-APU"
                            },
                            {
                                "name": "Arequipa",
                                "code": "PE-ARE"
                            },
                            {
                                "name": "Ayacucho",
                                "code": "PE-AYA"
                            },
                            {
                                "name": "Cajamarca",
                                "code": "PE-CAJ"
                            },
                            {
                                "name": "El Callao",
                                "code": "PE-CAL"
                            },
                            {
                                "name": "Cusco",
                                "code": "PE-CUS"
                            },
                            {
                                "name": "Huancavelica",
                                "code": "PE-HUV"
                            },
                            {
                                "name": "Huánuco",
                                "code": "PE-HUC"
                            },
                            {
                                "name": "Ica",
                                "code": "PE-ICA"
                            },
                            {
                                "name": "Junín",
                                "code": "PE-JUN"
                            },
                            {
                                "name": "La Libertad",
                                "code": "PE-LAL"
                            },
                            {
                                "name": "Lambayeque",
                                "code": "PE-LAM"
                            },
                            {
                                "name": "Lima (Department)",
                                "code": "PE-LIM"
                            },
                            {
                                "name": "Lima (Metropolitan)",
                                "code": "PE-LMA"
                            },
                            {
                                "name": "Loreto",
                                "code": "PE-LOR"
                            },
                            {
                                "name": "Madre de Dios",
                                "code": "PE-MDD"
                            },
                            {
                                "name": "Moquegua",
                                "code": "PE-MOQ"
                            },
                            {
                                "name": "Pasco",
                                "code": "PE-PAS"
                            },
                            {
                                "name": "Piura",
                                "code": "PE-PIU"
                            },
                            {
                                "name": "Puno",
                                "code": "PE-PUN"
                            },
                            {
                                "name": "San Martín",
                                "code": "PE-SAM"
                            },
                            {
                                "name": "Tacna",
                                "code": "PE-TAC"
                            },
                            {
                                "name": "Tumbes",
                                "code": "PE-TUM"
                            },
                            {
                                "name": "Ucayali",
                                "code": "PE-UCA"
                            }
                        ]
                    },
                    {
                        "name": "Suriname",
                        "code": "SR",
                        "continent": "South America",
                        "phoneNumberPrefix": 597,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Uruguay",
                        "code": "UY",
                        "continent": "South America",
                        "phoneNumberPrefix": 598,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Venezuela",
                        "code": "VE",
                        "continent": "South America",
                        "phoneNumberPrefix": 58,
                        "autocompletionField": "address1",
                        "provinceKey": "STATE",
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {zip} {province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Amazonas",
                                "code": "VE-Z"
                            },
                            {
                                "name": "Anzoátegui",
                                "code": "VE-B"
                            },
                            {
                                "name": "Apure",
                                "code": "VE-C"
                            },
                            {
                                "name": "Aragua",
                                "code": "VE-D"
                            },
                            {
                                "name": "Barinas",
                                "code": "VE-E"
                            },
                            {
                                "name": "Bolívar",
                                "code": "VE-F"
                            },
                            {
                                "name": "Carabobo",
                                "code": "VE-G"
                            },
                            {
                                "name": "Cojedes",
                                "code": "VE-H"
                            },
                            {
                                "name": "Delta Amacuro",
                                "code": "VE-Y"
                            },
                            {
                                "name": "Federal Dependencies",
                                "code": "VE-W"
                            },
                            {
                                "name": "Capital",
                                "code": "VE-A"
                            },
                            {
                                "name": "Falcón",
                                "code": "VE-I"
                            },
                            {
                                "name": "Guárico",
                                "code": "VE-J"
                            },
                            {
                                "name": "Vargas",
                                "code": "VE-X"
                            },
                            {
                                "name": "Lara",
                                "code": "VE-K"
                            },
                            {
                                "name": "Mérida",
                                "code": "VE-L"
                            },
                            {
                                "name": "Miranda",
                                "code": "VE-M"
                            },
                            {
                                "name": "Monagas",
                                "code": "VE-N"
                            },
                            {
                                "name": "Nueva Esparta",
                                "code": "VE-O"
                            },
                            {
                                "name": "Portuguesa",
                                "code": "VE-P"
                            },
                            {
                                "name": "Sucre",
                                "code": "VE-R"
                            },
                            {
                                "name": "Táchira",
                                "code": "VE-S"
                            },
                            {
                                "name": "Trujillo",
                                "code": "VE-T"
                            },
                            {
                                "name": "Yaracuy",
                                "code": "VE-U"
                            },
                            {
                                "name": "Zulia",
                                "code": "VE-V"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Oceania",
                "countries": [
                    {
                        "name": "Australia",
                        "code": "AU",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 61,
                        "autocompletionField": "address1",
                        "provinceKey": "STATE_AND_TERRITORY",
                        "labels": {
                            "address1": "Address",
                            "address2": "Apartment, suite, etc.",
                            "city": "Suburb",
                            "company": "Company",
                            "country": "Country/region",
                            "firstName": "First name",
                            "lastName": "Last name",
                            "phone": "Phone",
                            "postalCode": "Postcode",
                            "zone": "State/territory"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province} {zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Australian Capital Territory",
                                "code": "ACT"
                            },
                            {
                                "name": "New South Wales",
                                "code": "NSW"
                            },
                            {
                                "name": "Northern Territory",
                                "code": "NT"
                            },
                            {
                                "name": "Queensland",
                                "code": "QLD"
                            },
                            {
                                "name": "South Australia",
                                "code": "SA"
                            },
                            {
                                "name": "Tasmania",
                                "code": "TAS"
                            },
                            {
                                "name": "Victoria",
                                "code": "VIC"
                            },
                            {
                                "name": "Western Australia",
                                "code": "WA"
                            }
                        ]
                    },
                    {
                        "name": "Cook Islands",
                        "code": "CK",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 682,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Fiji",
                        "code": "FJ",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 679,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "French Polynesia",
                        "code": "PF",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 689,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Kiribati",
                        "code": "KI",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 686,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Nauru",
                        "code": "NR",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 674,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "New Caledonia",
                        "code": "NC",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 687,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "New Zealand",
                        "code": "NZ",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 64,
                        "autocompletionField": "address1",
                        "provinceKey": "REGION",
                        "labels": {
                            "address1": "Address",
                            "address2": "Suburb",
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
                            "address2": "Suburb (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{province}_{city} {zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Auckland",
                                "code": "AUK"
                            },
                            {
                                "name": "Bay of Plenty",
                                "code": "BOP"
                            },
                            {
                                "name": "Canterbury",
                                "code": "CAN"
                            },
                            {
                                "name": "Chatham Islands",
                                "code": "CIT"
                            },
                            {
                                "name": "Gisborne",
                                "code": "GIS"
                            },
                            {
                                "name": "Hawke's Bay",
                                "code": "HKB"
                            },
                            {
                                "name": "Manawatū-Whanganui",
                                "code": "MWT"
                            },
                            {
                                "name": "Marlborough",
                                "code": "MBH"
                            },
                            {
                                "name": "Nelson",
                                "code": "NSN"
                            },
                            {
                                "name": "Northland",
                                "code": "NTL"
                            },
                            {
                                "name": "Otago",
                                "code": "OTA"
                            },
                            {
                                "name": "Southland",
                                "code": "STL"
                            },
                            {
                                "name": "Taranaki",
                                "code": "TKI"
                            },
                            {
                                "name": "Tasman",
                                "code": "TAS"
                            },
                            {
                                "name": "Waikato",
                                "code": "WKO"
                            },
                            {
                                "name": "Wellington",
                                "code": "WGN"
                            },
                            {
                                "name": "West Coast",
                                "code": "WTC"
                            }
                        ]
                    },
                    {
                        "name": "Niue",
                        "code": "NU",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 683,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Norfolk Island",
                        "code": "NF",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 672,
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
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Papua New Guinea",
                        "code": "PG",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 675,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Pitcairn Islands",
                        "code": "PN",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 64,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    },
                    {
                        "name": "Samoa",
                        "code": "WS",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 685,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Solomon Islands",
                        "code": "SB",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 677,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Timor-Leste",
                        "code": "TL",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 670,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Tokelau",
                        "code": "TK",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 690,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Tonga",
                        "code": "TO",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 676,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Tuvalu",
                        "code": "TV",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 688,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Vanuatu",
                        "code": "VU",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 678,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "Wallis & Futuna",
                        "code": "WF",
                        "continent": "Oceania",
                        "phoneNumberPrefix": 681,
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
                        },
                        "zones": []
                    }
                ]
            },
            {
                "name": "North America",
                "countries": [
                    {
                        "name": "Canada",
                        "code": "CA",
                        "continent": "North America",
                        "phoneNumberPrefix": 1,
                        "autocompletionField": "address1",
                        "provinceKey": "PROVINCE",
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
                            "zone": "Province"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province} {zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Alberta",
                                "code": "AB"
                            },
                            {
                                "name": "British Columbia",
                                "code": "BC"
                            },
                            {
                                "name": "Manitoba",
                                "code": "MB"
                            },
                            {
                                "name": "New Brunswick",
                                "code": "NB"
                            },
                            {
                                "name": "Newfoundland and Labrador",
                                "code": "NL"
                            },
                            {
                                "name": "Northwest Territories",
                                "code": "NT"
                            },
                            {
                                "name": "Nova Scotia",
                                "code": "NS"
                            },
                            {
                                "name": "Nunavut",
                                "code": "NU"
                            },
                            {
                                "name": "Ontario",
                                "code": "ON"
                            },
                            {
                                "name": "Prince Edward Island",
                                "code": "PE"
                            },
                            {
                                "name": "Quebec",
                                "code": "QC"
                            },
                            {
                                "name": "Saskatchewan",
                                "code": "SK"
                            },
                            {
                                "name": "Yukon",
                                "code": "YT"
                            }
                        ]
                    },
                    {
                        "name": "Mexico",
                        "code": "MX",
                        "continent": "North America",
                        "phoneNumberPrefix": 52,
                        "autocompletionField": "address1",
                        "provinceKey": "STATE",
                        "labels": {
                            "address1": "Street and house number",
                            "address2": "Apartment, suite, etc.",
                            "city": "City",
                            "company": "Company",
                            "country": "Country/region",
                            "firstName": "First name",
                            "lastName": "Last name",
                            "phone": "Phone",
                            "postalCode": "Postal code",
                            "zone": "State"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{zip}{city}{province}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip} {city} {province}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Aguascalientes",
                                "code": "AGS"
                            },
                            {
                                "name": "Baja California",
                                "code": "BC"
                            },
                            {
                                "name": "Baja California Sur",
                                "code": "BCS"
                            },
                            {
                                "name": "Campeche",
                                "code": "CAMP"
                            },
                            {
                                "name": "Chiapas",
                                "code": "CHIS"
                            },
                            {
                                "name": "Chihuahua",
                                "code": "CHIH"
                            },
                            {
                                "name": "Ciudad de Mexico",
                                "code": "DF"
                            },
                            {
                                "name": "Coahuila",
                                "code": "COAH"
                            },
                            {
                                "name": "Colima",
                                "code": "COL"
                            },
                            {
                                "name": "Durango",
                                "code": "DGO"
                            },
                            {
                                "name": "Guanajuato",
                                "code": "GTO"
                            },
                            {
                                "name": "Guerrero",
                                "code": "GRO"
                            },
                            {
                                "name": "Hidalgo",
                                "code": "HGO"
                            },
                            {
                                "name": "Jalisco",
                                "code": "JAL"
                            },
                            {
                                "name": "Mexico State",
                                "code": "MEX"
                            },
                            {
                                "name": "Michoacán",
                                "code": "MICH"
                            },
                            {
                                "name": "Morelos",
                                "code": "MOR"
                            },
                            {
                                "name": "Nayarit",
                                "code": "NAY"
                            },
                            {
                                "name": "Nuevo León",
                                "code": "NL"
                            },
                            {
                                "name": "Oaxaca",
                                "code": "OAX"
                            },
                            {
                                "name": "Puebla",
                                "code": "PUE"
                            },
                            {
                                "name": "Querétaro",
                                "code": "QRO"
                            },
                            {
                                "name": "Quintana Roo",
                                "code": "Q ROO"
                            },
                            {
                                "name": "San Luis Potosí",
                                "code": "SLP"
                            },
                            {
                                "name": "Sinaloa",
                                "code": "SIN"
                            },
                            {
                                "name": "Sonora",
                                "code": "SON"
                            },
                            {
                                "name": "Tabasco",
                                "code": "TAB"
                            },
                            {
                                "name": "Tamaulipas",
                                "code": "TAMPS"
                            },
                            {
                                "name": "Tlaxcala",
                                "code": "TLAX"
                            },
                            {
                                "name": "Veracruz",
                                "code": "VER"
                            },
                            {
                                "name": "Yucatán",
                                "code": "YUC"
                            },
                            {
                                "name": "Zacatecas",
                                "code": "ZAC"
                            }
                        ]
                    },
                    {
                        "name": "United States",
                        "code": "US",
                        "continent": "North America",
                        "phoneNumberPrefix": 1,
                        "autocompletionField": "address1",
                        "provinceKey": "STATE",
                        "labels": {
                            "address1": "Address",
                            "address2": "Apartment, suite, etc.",
                            "city": "City",
                            "company": "Company",
                            "country": "Country/region",
                            "firstName": "First name",
                            "lastName": "Last name",
                            "phone": "Phone",
                            "postalCode": "ZIP code",
                            "zone": "State"
                        },
                        "optionalLabels": {
                            "address2": "Apartment, suite, etc. (optional)"
                        },
                        "formatting": {
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province} {zip}_{country}_{phone}"
                        },
                        "zones": [
                            {
                                "name": "Alabama",
                                "code": "AL"
                            },
                            {
                                "name": "Alaska",
                                "code": "AK"
                            },
                            {
                                "name": "American Samoa",
                                "code": "AS"
                            },
                            {
                                "name": "Arizona",
                                "code": "AZ"
                            },
                            {
                                "name": "Arkansas",
                                "code": "AR"
                            },
                            {
                                "name": "California",
                                "code": "CA"
                            },
                            {
                                "name": "Colorado",
                                "code": "CO"
                            },
                            {
                                "name": "Connecticut",
                                "code": "CT"
                            },
                            {
                                "name": "Delaware",
                                "code": "DE"
                            },
                            {
                                "name": "Washington DC",
                                "code": "DC"
                            },
                            {
                                "name": "Micronesia",
                                "code": "FM"
                            },
                            {
                                "name": "Florida",
                                "code": "FL"
                            },
                            {
                                "name": "Georgia",
                                "code": "GA"
                            },
                            {
                                "name": "Guam",
                                "code": "GU"
                            },
                            {
                                "name": "Hawaii",
                                "code": "HI"
                            },
                            {
                                "name": "Idaho",
                                "code": "ID"
                            },
                            {
                                "name": "Illinois",
                                "code": "IL"
                            },
                            {
                                "name": "Indiana",
                                "code": "IN"
                            },
                            {
                                "name": "Iowa",
                                "code": "IA"
                            },
                            {
                                "name": "Kansas",
                                "code": "KS"
                            },
                            {
                                "name": "Kentucky",
                                "code": "KY"
                            },
                            {
                                "name": "Louisiana",
                                "code": "LA"
                            },
                            {
                                "name": "Maine",
                                "code": "ME"
                            },
                            {
                                "name": "Marshall Islands",
                                "code": "MH"
                            },
                            {
                                "name": "Maryland",
                                "code": "MD"
                            },
                            {
                                "name": "Massachusetts",
                                "code": "MA"
                            },
                            {
                                "name": "Michigan",
                                "code": "MI"
                            },
                            {
                                "name": "Minnesota",
                                "code": "MN"
                            },
                            {
                                "name": "Mississippi",
                                "code": "MS"
                            },
                            {
                                "name": "Missouri",
                                "code": "MO"
                            },
                            {
                                "name": "Montana",
                                "code": "MT"
                            },
                            {
                                "name": "Nebraska",
                                "code": "NE"
                            },
                            {
                                "name": "Nevada",
                                "code": "NV"
                            },
                            {
                                "name": "New Hampshire",
                                "code": "NH"
                            },
                            {
                                "name": "New Jersey",
                                "code": "NJ"
                            },
                            {
                                "name": "New Mexico",
                                "code": "NM"
                            },
                            {
                                "name": "New York",
                                "code": "NY"
                            },
                            {
                                "name": "North Carolina",
                                "code": "NC"
                            },
                            {
                                "name": "North Dakota",
                                "code": "ND"
                            },
                            {
                                "name": "Northern Mariana Islands",
                                "code": "MP"
                            },
                            {
                                "name": "Ohio",
                                "code": "OH"
                            },
                            {
                                "name": "Oklahoma",
                                "code": "OK"
                            },
                            {
                                "name": "Oregon",
                                "code": "OR"
                            },
                            {
                                "name": "Palau",
                                "code": "PW"
                            },
                            {
                                "name": "Pennsylvania",
                                "code": "PA"
                            },
                            {
                                "name": "Puerto Rico",
                                "code": "PR"
                            },
                            {
                                "name": "Rhode Island",
                                "code": "RI"
                            },
                            {
                                "name": "South Carolina",
                                "code": "SC"
                            },
                            {
                                "name": "South Dakota",
                                "code": "SD"
                            },
                            {
                                "name": "Tennessee",
                                "code": "TN"
                            },
                            {
                                "name": "Texas",
                                "code": "TX"
                            },
                            {
                                "name": "Utah",
                                "code": "UT"
                            },
                            {
                                "name": "Vermont",
                                "code": "VT"
                            },
                            {
                                "name": "U.S. Virgin Islands",
                                "code": "VI"
                            },
                            {
                                "name": "Virginia",
                                "code": "VA"
                            },
                            {
                                "name": "Washington",
                                "code": "WA"
                            },
                            {
                                "name": "West Virginia",
                                "code": "WV"
                            },
                            {
                                "name": "Wisconsin",
                                "code": "WI"
                            },
                            {
                                "name": "Wyoming",
                                "code": "WY"
                            },
                            {
                                "name": "Armed Forces Americas",
                                "code": "AA"
                            },
                            {
                                "name": "Armed Forces Europe",
                                "code": "AE"
                            },
                            {
                                "name": "Armed Forces Pacific",
                                "code": "AP"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Other",
                "countries": [
                    {
                        "name": "French Southern Territories",
                        "code": "TF",
                        "continent": "Other",
                        "phoneNumberPrefix": 262,
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
                        },
                        "zones": []
                    },
                    {
                        "name": "South Georgia & South Sandwich Islands",
                        "code": "GS",
                        "continent": "Other",
                        "phoneNumberPrefix": 500,
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
                            "edit": "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{phone}",
                            "show": "{firstName} {lastName}_{company}_{address1}_{address2}_{zip}_{country}_{phone}"
                        },
                        "zones": []
                    }
                ]
            }
           ];
        }
    }
    return finalArray;
}