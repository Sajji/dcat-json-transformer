# NodeJS implementation that transforms DCAT-US JSON file for data-sets to Collibra Import-API formatted JSON file.
#
Prerequisite: Node.js (https://nodejs.org/) Tested on version 17.6.0 "Current"
# Usage: 
1. download files
2. run in terminal: npm init
3. run in terminal: npm install jsonata --save
4. node transformer.js
#
# Testing:

1. In transformer.js file, MUST ADD community variable and source JSON file name
2. Download and import dataset.cma via the Collibra Migration Import/Export feature
3. Run the transformer script in the terminal with "node transformer.js"
4. The script will generate a new JSON file for use in the Collibra Import-API
