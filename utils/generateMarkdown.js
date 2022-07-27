// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None'){
    return ""
  }else{
    switch (license){
      case 'Apache License 2.0':
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break;
      case 'GNU General Public License v3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        break;
      case 'MIT License':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        break; 
      case 'BSD 2-Clause \"Simplified\" license':
        return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
        break; 
      case 'BSD 3-Clause \"New\" or \"Revised\" License':
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        break; 
      case 'Boost Software License 1.0':
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        break;
      case 'Creative Commons Zero v1.0 Universal':
        return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
        break;
      case 'Eclipse Public License 2.0':
        return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        break;
      case 'GNU Affero General Public License v3.0':
        return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
        break;
      case 'GNU General Public License v2.0':
        return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        break;
      case 'GNU Lesser General Public License v2.1':
        return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
        break;
      case 'Mozilla Public License':
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        break;
      case 'The Unlicense':
        return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        break;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return ""
  }else{
    switch (license){
      case 'Apache License 2.0':
        return `[${license}](https://opensource.org/licenses/Apache-2.0)`
        break;
      case 'GNU General Public License v3.0':
        return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`
        break;
      case 'MIT License':
        return `[${license}](https://opensource.org/licenses/MIT)`
        break; 
      case 'BSD 2-Clause \"Simplified\" license':
        return `[${license}](https://opensource.org/licenses/BSD-2-Clause)`
        break; 
      case 'BSD 3-Clause \"New\" or \"Revised\" License':
        return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`
        break; 
      case 'Boost Software License 1.0':
        return `[${license}](https://www.boost.org/LICENSE_1_0.txt)`
        break;
      case 'Creative Commons Zero v1.0 Universal':
        return `[${license}](http://creativecommons.org/publicdomain/zero/1.0/)`
        break;
      case 'Eclipse Public License 2.0':
        return `[${license}](https://opensource.org/licenses/EPL-1.0)`
        break;
      case 'GNU Affero General Public License v3.0':
        return `[${license}](https://www.gnu.org/licenses/agpl-3.0)`
        break;
      case 'GNU General Public License v2.0':
        return `[${license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
        break;
      case 'GNU Lesser General Public License v2.1':
        return `[${license}](https://www.gnu.org/licenses/lgpl-3.0)`
        break;
      case 'Mozilla Public License':
        return `[${license}](https://opensource.org/licenses/MPL-2.0)`
        break;
      case 'The Unlicense':
        return `[${license}](http://unlicense.org/)`
        break;
    }
  }
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Generate string to be returned for readme file
  let readmeString = '';

  // String for table of contents to be added
  let tableOfContents = '';
  if (data){
    tableOfContents += '## Table of Contents\n\n'
  }
  if (data.description){
    tableOfContents += `[Description](#description)\n\n`
  }
  if (data.installation){
    tableOfContents += `[Installation Instructions](#installation-instructions)\n\n`
  }
  if (data.usage){
    tableOfContents += `[Usage Instructions](#usage-instructions)\n\n`
  }
  if (data.license !== 'None'){
    tableOfContents += `[License](#license)\n\n`
  }
  if (data.github){
    tableOfContents += `[Github](#github)\n\n`
  }
  if (data.contribution){
    tableOfContents += `[Contribution](#contribution)\n\n`
  }
  if (data.tests){
    tableOfContents += `[Tests](#tests)\n\n`
  }
  if (data.emails){
    tableOfContents += `[Questions](#questions)\n\n`
  }



  // Generate project title data.title
  if (data.title){
    readmeString += `# ${data.title}\n\n`
  };
  
  // add license badge
  if(data.license !== 'None'){
    readmeString += `${renderLicenseBadge(data.license)}\n\n`
  }

  // add table of contents
  if (tableOfContents !== ''){
    readmeString += `${tableOfContents}`
  }
  // generate description data.description
  if (data.description){
    readmeString += `## Description\n\n${data.description}\n\n[Screenrecording](./screenrecording.mp4)\n\n`
  }
  // generate installation instructions
  if (data.installation){
    readmeString += `## Installation Instructions\n\n${data.installation}\n\n`
  }

  // generate usage instructions and screenshot
  if (data.usage){
    readmeString += `## Usage Instructions\n\n${data.usage}\n\n![Result](screenshots/scr1.png)\n\n`
  }


  // License
  if (data.license){
    readmeString += `## License\n\n${renderLicenseLink(data.license)}\n\n`
  }

  //Generate github account
  if (data.github){
    readmeString += `## Github\n\n[${data.github}](https://github.com/${data.github})\n\n`
  }

  // contribution
  if (data.contributing){
    readmeString += `## Contributing\n\n${data.contributing}\n\n`;
  }

  // tests
  if (data.tests){
    readmeString += `## Tests\n\n${data.tests}\n\n`;
  }

  // questions
  if (data.emails){
    readmeString += `## Questions\n\n${data.emails}`;
  }

  // console.log(readmeString);
  return readmeString
}

module.exports = generateMarkdown;

