const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const urlModule = require('url');

// Check if the file name is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error('Usage: node urls.js FILENAME');
  process.exit(1); // Exit with error status
}

const fileName = process.argv[2];

// Read the file contents asynchronously
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    process.exit(1); // Exit with error status
  }

  // Split the file contents into lines
  const urls = data.trim().split('\n');

  urls.forEach((url, index) => {
    const parsedUrl = urlModule.parse(url);
    const outputFile = path.join(__dirname, parsedUrl.hostname + '.txt');

    // Determine which module to use based on the protocol
    const client = parsedUrl.protocol === 'https:' ? https : http;

    // Send GET request to URL
    client.get(url, (res) => {
      let html = '';

      res.on('data', (chunk) => {
        html += chunk;
      });

      res.on('end', () => {
        // Write HTML content to file
        fs.writeFile(outputFile, html, (err) => {
          if (err) {
            console.error(`Error writing file for URL ${index + 1} (${url}):`, err);
          } else {
            console.log(`File written for URL ${index + 1} (${url}): ${outputFile}`);
          }
        });
      });
    }).on('error', (err) => {
      console.error(`Error fetching URL ${index + 1} (${url}):`, err);
    });
  });
});
