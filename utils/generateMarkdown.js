const licenseData = [
  'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause \"Simplified\" license',
            'BSD 3-Clause \"New\" or \"Revised\" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License',
            'The Unlicense'
  ,
  [],
]
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
    tableOfContents += `[Description](description)\n\n`
  }
  if (data.installation){
    tableOfContents += `[Installation Instructions](installation)\n\n`
  }
  if (data.usage){
    tableOfContents += `[Usage Instructions](usage)\n\n`
  }
  if (data.license !== 'None'){
    tableOfContents += `[License](license)\n\n`
  }
  if (data.github){
    tableOfContents += `[Github](github)\n\n`
  }
  if (data.contribution){
    tableOfContents += `[Contribution](contribution)\n\n`
  }
  if (data.tests){
    tableOfContents += `[Tests](tests)\n\n`
  }
  if (data.questions){
    tableOfContents += `[Tests](tests)\n\n`
  }
  if (data.emails){
    tableOfContents += `[Questions](questions)\n\n`
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
    readmeString += `## Description\n\n${data.description}\n\n`
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

// !!!# <Your-Project-Title>
// (License badge)

// !!!## Description

// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?

// !!!## Table of Contents (Optional)

// If your README is long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// !!!## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// !!!## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```


// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them here.