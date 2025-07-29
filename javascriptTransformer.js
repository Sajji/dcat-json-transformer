const fs = require("fs");

//**********CONFIGURATION************
const comName = "Dept of Defense"; // Community Name
const data = require("./data.json");
//***********************************

// Build base community and domain objects
const domainStructure = [
  {
    resourceType: "Community",
    identifier: {
      name: comName,
    },
  },
  {
    resourceType: "Domain",
    identifier: {
      name: `${comName}-Domain`,
      community: {
        name: comName,
      },
    },
    type: {
      name: "Data Usage Registry",
    },
  },
];

// Transform each dataset to Collibra-friendly assets
const datasets = data.dataset || [];
const transformedAssets = datasets.map((d) => {
  const downloadURL =
    Array.isArray(d.distribution) && d.distribution.length > 0
      ? d.distribution[0].downloadURL || ""
      : "";

  const keywords = Array.isArray(d.keyword)
    ? `Keyword: ${d.keyword.map((k) => `"${k}"`).join(", ")}`
    : "Keyword: ";

  const contactEmail = d.contactPoint?.hasEmail?.replace("mailto:", "") || "";

  return {
    resourceType: "Asset",
    identifier: {
      name: `${d.title}---${d.identifier}`,
      domain: {
        name: `${comName}-Domain`,
        community: {
          name: comName,
        },
      },
    },
    type: {
      name: "Data Set",
    },
    attributes: {
      Description: [{ value: `Description: ${d.description}` }],
      "DCAT:title": [{ value: `Title: ${d.title}` }],
      "DCAT:landingPage": [{ value: `Landing Page: ${d.landingPage || ""}` }],
      "DCAT:description": [{ value: `Description: ${d.description}` }],
      "DCAT:accessLevel": [{ value: `Access Level: ${d.accessLevel}` }],
      "DCAT:distributionURL": [{ value: `Distribution URL: ${downloadURL}` }],
      "DCAT:contactPointFullName": [
        { value: `Contact: ${d.contactPoint?.fn || ""}` },
      ],
      "DCAT:contactPointEmail": [
        { value: `Contact Email: ${contactEmail}` },
      ],
      "DCAT:programCode": [
        {
          value: `Program Code: ${
            Array.isArray(d.programCode) ? d.programCode[0] : ""
          }`,
        },
      ],
      "DCAT:bureauCode": [
        {
          value: `Bureau Code: ${
            Array.isArray(d.bureauCode) ? d.bureauCode[0] : ""
          }`,
        },
      ],
      "DCAT:publisher": [
        { value: `Published By: ${d.publisher?.name || ""}` },
      ],
      "DCAT:keyword": [{ value: keywords }],
    },
  };
});

// Combine everything
const finalOutput = [...domainStructure, ...transformedAssets];

// Write to file
const outputPath = `./${comName}--IMPORT.json`;
fs.writeFileSync(outputPath, JSON.stringify(finalOutput, null, 2));
console.log(`✅ File written to: ${outputPath}`);
