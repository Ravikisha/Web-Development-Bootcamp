const fs = require('fs');
const path = require('path');
const axios = require('axios');
const glob = require('glob');

const rootDirectory = './Resource/'; // Replace with the root directory of your project
const duplicateLinks = new Set();

async function findLinksInFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    // const links = fileContents.match(/https?:\/\/[^\s]+/g) || [];
    const links = fileContents.match(/\bhttps?:\/\/[^\s"']+\b/g) || [];

    for (const link of links) {
      if (duplicateLinks.has(link)) {
        console.error(`Duplicate link found: ${link}`);
        process.exit(1);
      }
      duplicateLinks.add(link);

      try {
        const response = await axios.head(link);
        if (response.status >= 400) {
          console.error(`Invalid link: ${link}`);
          continue; // Continue checking other links
        }
        console.log(`Valid link: ${link}`);
      } catch (error) {
        console.error(`Error checking link: ${link}, error: ${error.message}`);
        continue; // Continue checking other links
      }
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error}`);
  }
}

function findAndProcessMarkdownFiles(rootDir) {
  const markdownFiles = glob.sync('**/*.md', { cwd: rootDir, absolute: true });

  for (const file of markdownFiles) {
    findLinksInFile(file);
  }
}

// Start the search in the root directory
findAndProcessMarkdownFiles(rootDirectory);

console.log('No duplicate links found. Merge action can proceed.');
