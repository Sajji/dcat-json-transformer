# NodeJS implementation that transforms DCAT-US JSON file for data-sets to Collibra Import-API formatted JSON file.
#
Prerequisite: Node.js (https://nodejs.org/) Tested on version 17.6.0 "Current"
# Usage: 
1. download files
2. run in terminal: npm install
3. node transformer.js
#
# Testing:

1. In transformer.js file, replace community variable and source JSON file name (default values will run as-is).
2. Download and import dataset.cma via the Collibra Migration Import/Export feature.
3. Run the transformer script in the terminal with "node transformer.js".
4. The script will generate a new JSON file for use in the Collibra Import-API - filename will be based on the community variable. eg. "myCommunity--IMPORT.json".
