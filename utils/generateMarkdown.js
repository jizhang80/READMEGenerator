// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// use shields.io license badge service
function renderLicenseBadge(license) {
  if (!license) return '';
  switch(license) {
    case 'Apache 2.0 License': 
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    case 'Boost Software License 1.0': 
      return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
    case 'BSD 3-Clause License': 
      return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
    case 'BSD 2-Clause License': 
      return "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg";
    case 'GNU GPL v3': 
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case 'GNU GPL v2': 
      return "https://img.shields.io/badge/License-GPL_v2-blue.svg";
    case 'GNU AGPL v3': 
      return "https://img.shields.io/badge/License-AGPL_v3-blue.svg";
    case 'GNU LGPL v3': 
      return "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
    case 'GNU FDL v1.3': 
      return "https://img.shields.io/badge/License-FDL_v1.3-blue.svg";
    case 'IBM Public License Version 1.0':  
      return "https://img.shields.io/badge/License-IPL_1.0-blue.svg";
    case 'ISC': 
      return "https://img.shields.io/badge/License-ISC-blue.svg";
    case 'MIT': 
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    default:
      return "the license badge is not included currently..."
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  switch(license) {
    case 'Apache 2.0 License':
      return "https://opensource.org/licenses/Apache-2.0";
    case 'Boost Software License 1.0':
      return "https://www.boost.org/LICENSE_1_0.txt";
    case 'BSD 3-Clause License':
      return "https://opensource.org/licenses/BSD-3-Clause";
    case 'BSD 2-Clause License':
      return "https://opensource.org/licenses/BSD-2-Clause";
    case 'GNU GPL v3':
      return "https://www.gnu.org/licenses/gpl-3.0";
    case 'GNU GPL v2':
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case 'GNU AGPL v3':
      return "https://www.gnu.org/licenses/agpl-3.0";
    case 'GNU LGPL v3':
      return "https://www.gnu.org/licenses/lgpl-3.0";
    case 'GNU FDL v1.3':
      return "https://www.gnu.org/licenses/fdl-1.3";
    case 'IBM Public License Version 1.0':
      return "https://opensource.org/licenses/IPL-1.0";
    case 'ISC':
      return "https://opensource.org/licenses/ISC";
    case 'MIT':
      return "https://opensource.org/licenses/MIT";
    default:
      return "the license badge is not included currently..."
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

// TODO: create a function that returns the repos section of README by github username
// if there is no github username, return an empty string
function renderReposLinkSection(username) {
  if (!username) return '';
  return `### ${username} Repositories
  [${username} repos link](https://github.com/${username}?tab=repositories)  
  `
}

// TODO: create a function that returns the how to reach me section by email address
// if there is no email, return an empty string
function renderReachmeSection(email) {
  if (!email) return '';
  return `### Reach me
  You may reach me by email: <${email}> if there is any more question.
  `
}

// TODO: Create a function to generate markdown for README
/*
README sections:
1. title
2. Description
3. Table of Contents
4. Installation
5. Usage
6. license
7. Contributing
8. Tests
9. Questions
    github username & repos link
    reach me by email address
*/
function generateMarkdown(data) {
  return `# ${data.title}  

  ## Description  
  ${data.description}  
  
  ## Table of Contents  
  - [Description](#description)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [License](#license)  
  - [Contributing](#contributing)  
  - [Tests](#tests)  
  - [Questions](#questions)  

  ## Installation  
  ${data.installation}  

  ## Usage  
  ${data.usage}  

  ## License
  ${renderLicenseSection(data.license)}  

  ## Contributing  
  ${data.contribution}  

  ## Tests  
  ${data.tests}  

  ## Questions
  ${renderReposLinkSection(data.username)}  
  ${renderReachmeSection(data.email)}  
  
`;
}

module.exports = generateMarkdown;
