# NodeJS implementation that transforms DCAT-US JSON "file" for data-sets to Collibra Import-API formatted JSON file.
#
# Usage: 
1. download files
2. run in terminal: npm init
3. run in terminal: npm install jsonata --save
4. node transformer.js
#
# Testing:
This test uses "DEFENSE" for the communitie name and "DEFENSE-Domain" for the domain. The transformer.js script uses these to build the final JSON file. Replace these in both files. Hope to automate this soon...sorry.

Step 1. Use the Import-communities-domains.json via the Import-API 
Step 2. Download and import dataset.cma via the Collibra Migration Import/Export feature
Step 3. Run the transformer script in the terminal with "node transformer.js"
Step 4. The script will generate a new JSON file for use in the Collibra Import-API

(optional: replace community and domain names - but those names should be also changed in the transformer.js file. Otherwise the import will fail since the communities and domains do not exist!
You can always do a global find-n-replace)


