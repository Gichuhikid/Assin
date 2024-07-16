import { test, expect } from '@playwright/test';

test.beforeEach('login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
});

  test('test visibility', async ({ page }) => {
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await expect(page.locator('#app')).toContainText('Time at Work');
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page.getByText('This Week')).toBeVisible();
  await page.getByRole('link', { name: 'Leave' }).click();
  await expect(page.getByRole('link', { name: 'Apply' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'My Leave' })).toBeVisible();
  await expect(page.getByText('Entitlements')).toBeVisible();
  await expect(page.getByText('Reports')).toBeVisible();
  await expect(page.getByText('Configure')).toBeVisible();
});
test('Leave', async ({ page }) => {
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await expect(page.locator('#app')).toContainText('Time at Work');
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page.getByText('This Week')).toBeVisible();
  await page.getByRole('link', { name: 'Leave' }).click();
  await expect(page.getByRole('link', { name: 'Apply' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'My Leave' })).toBeVisible();
  await expect(page.getByText('Entitlements')).toBeVisible();
  await expect(page.getByText('Reports')).toBeVisible();
  await expect(page.getByText('Configure')).toBeVisible();
  });
  test('test3', async ({ page }) => {
    await page.getByRole('link', { name: 'Leave' }).click();
    await expect(page.getByRole('link', { name: 'Apply' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'My Leave' })).toBeVisible();
    await expect(page.getByText('Entitlements')).toBeVisible();
    await expect(page.getByText('Reports')).toBeVisible();
    await expect(page.getByText('Configure')).toBeVisible();
  });