import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  await expect(page.getByRole('heading')).toContainText('Add/Remove Elements');
  await expect(page.getByRole('button')).toContainText('Add Element');
  await expect(page.getByRole('button', { name: 'Add Element' })).toBeVisible();
  await page.locator('html').click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
});