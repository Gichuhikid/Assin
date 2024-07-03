// Import Playwright test functions
import { test, expect } from '@playwright/test';
import fs from 'fs';

// Read test cases from the JSON file
const testCases = JSON.parse(fs.readFileSync('data/testCases.json', 'utf8'));

// Function to log in to Asana
async function loginToAsana(page) {

  await page.goto('https://app.asana.com/-/login');
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('ben+pose@workwithloop.com');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Password123');
  await page.getByRole('button', { name: 'Log in' }).click();
  //await page.goto('https://app.asana.com/0/home/1205366998147150');

}

// Function to navigate to the project page
async function navigateToProject(page, leftNav) {
  await page.getByText(leftNav).click();
  await page.waitForSelector(`text=${leftNav}`);
}

// Function to verify the card in the specified column
async function verifyCardInColumn(page, column, card_title) {
  await page.getByRole('heading', { name: column }).click();
  const card = await page.getByText(card_title).first();
  await expect(card).toBeVisible();
}

// Describe the test suite for Asana data-driven tests
test.describe('Asana Data-Driven Tests', () => {
  // Iterate over each test case in the JSON
  for (const data of testCases) {
    test(data.name, async ({ page }) => {
      await test.step('Login to Asana', async () => {
        await loginToAsana(page);
      });

      await test.step(`Navigate to ${data.leftNav}`, async () => {
        await navigateToProject(page, data.leftNav);
      });

      await test.step(`Verify the card "${data.card_title}" is within the column "${data.column}"`, async () => {
        await verifyCardInColumn(page, data.column, data.card_title);
      });
    });
  }
});
