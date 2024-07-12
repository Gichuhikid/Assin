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
test ('Add/Remove Elements', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/add_remove_elements/');
  });

  test('should add a new element', async ({ page }) => {
    await page.click('button[onclick="addElement()"]');
    const deleteButton = await page.$('.added-manually');
    expect(deleteButton).not.toBeNull();
  });

  test('should delete an element', async ({ page }) => {
    await page.click('button[onclick="addElement()"]');
    await page.click('.added-manually');
    const deleteButton = await page.$('.added-manually');
    expect(deleteButton).toBeNull();
  });

  test('should add multiple elements and delete them', async ({ page }) => {
    await page.click('button[onclick="addElement()"]');
    await page.click('button[onclick="addElement()"]');
    let deleteButtons = await page.$$('.added-manually');
    expect(deleteButtons.length).toBe(2);

    await deleteButtons[0].click();
    deleteButtons = await page.$$('.added-manually');
    expect(deleteButtons.length).toBe(1);

    await deleteButtons[0].click();
    deleteButtons = await page.$$('.added-manually');
    expect(deleteButtons.length).toBe(0);
  });
});