var jsonata = require("jsonata");
var data = require ("./defense.json");
const fs = require("fs");

// console.log(data);

var expression = jsonata(`
dataset.{
    "resourceType": "Asset",
    "identifier": {
        "name": title & "---" & identifier,
        "domain": {
            "name": "DEFENSE-Domain",
            "community": {
                "name": "DEFENSE"
            }
        }
    },
    "type": {
        "name": "Data Set"
    },
    "attributes": {
    "Description": [{"value": "Description: "&description}],
    "DCAT:title": [{"value":  "Title: "&title}],
    "DCAT:landingPage": [{"value": "Landing Page: "&landingPage}],
    "DCAT:description": [{"value":  "Description: "&description}],
    "DCAT:accessLevel": [{"value":  "Access Level: "&accessLevel}],
    "DCAT:distributionURL": [{"value":  "Distribution URL: "&distribution.downloadURL}],
    "DCAT:contactPointFullName": [{"value":  "Contact: "&contactPoint.fn}],
    "DCAT:contactPointEmail": [{"value":  "Contact Email: "&contactPoint.hasEmail}],
    "DCAT:programCode": [{"value":  "Program Code: "&programCode[0]}],
    "DCAT:bureauCode": [{"value":  "Bureau Code: "&bureauCode[0]}],
    "DCAT:publisher": [{"value":  "Published By: "&publisher.name}]
    }
}
`);

var result = expression.evaluate(data);
//console.log(result);

var stringy = (JSON.stringify(result, null, 2));
//console.log(stringy);
fs.writeFileSync('./DEFENSEImport.json', stringy);
