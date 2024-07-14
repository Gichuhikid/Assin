import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Notification Messages' }).click();
  await page.getByText('Action unsuccesful, please').click();
  await expect(page.getByRole('link', { name: 'Click here' })).toBeVisible();
  await page.getByRole('link', { name: 'Click here' }).click();
  await page.getByText('Action unsuccesful, please').click();
  await expect
  
});