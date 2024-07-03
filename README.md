Playwright Data-Driven Tests for Asana
This repository contains automated tests using Playwright for Asana, driven by test scenarios defined in a JSON object.
Setup
Prerequisites
Make sure you have Node.js installed on your machine. You can download it from nodejs.org.
Installation
Clone the repository and install dependencies:
bash

git clone <repository-url>
cd <repository-folder>
npm install
Configuration
valid Asana account for testing purposes.

Running the Tests
To run the tests, execute the following command:
bash:
npm test
This command will execute the Playwright tests defined in the test folder.
Test Structure
testcases.json
The test scenarios are defined in a JSON file located at data/testcases.json. Each test case includes:
name: The name of the test case.
leftNav: The navigation path within Asana.
column: The column within Asana where the card should be verified.
card_title: The title of the card to be verified.
Test Script Explanation
The main test script is located in asanaTests.spec.ts and structured as follows:
Login to Asana: loginToAsana(page)
Navigates to the Asana login page and fills in the credentials.
Navigate to Project: navigateToProject(page, leftNav)
Navigates to the specified project or section (leftNav) within Asana.
Verify Card in Column: verifyCardInColumn(page, column, card_title)
Clicks on the specified column (column) and verifies the presence of the card with the title (card_title).
Data-Driven Approach
The tests are data-driven, iterating over each test case defined in testcases.json. For each test case, it performs the following steps:
Logs into Asana.
Navigates to the specified project or section.
Verifies the presence of the specified card in the designated column.

Contributing
Feel free to fork this repository, make improvements, and submit a pull request. Contributions are welcome!
Issues
If you encounter any issues or have suggestions for improvements, please open an issue on GitHub.


