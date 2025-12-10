import { test, expect } from '@playwright/test';

test('test gogle', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
 
 
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  await page.getByRole('textbox', { name: 'Password' }).fill('admin1233');
  await page.getByRole('button', { name: 'Login' }).click();
});