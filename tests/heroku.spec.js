const { test, expect } = require('@playwright/test');

test('home page title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  const title = await page.title();
  expect(title).toBe('The Internet');
});
test('basic auth', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Basic Auth' }).click();
    await page.goto('https://the-internet.herokuapp.com/basic_auth', {
      auth: {
        username: 'user',
        password: 'admin',
      },
    });
    const content = await page.textContent('.example p');
    expect(content).toContain('Congratulations! You must have the proper credentials.');
  });
  test('Add/Remove elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
    await expect(page.getByRole('heading')).toContainText('Add/Remove Elements');
    await expect(page.getByRole('button')).toContainText('Add Element');
    await expect(page.getByRole('button', { name: 'Add Element' })).toBeVisible();
    await page.locator('html').click();
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();
  });