import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  await page.waitForTimeout(10000); // Waits for N second
    await page.goto('https://examd.ai/bsecure/config/');
    // await page.getByRole('link', { name: 'Have an account? Login' }).click();
  await page.getByPlaceholder('eg. Jhon').click();
  await page.getByPlaceholder('eg. Jhon').fill('manager');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password1');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('row', { name: 'Western Kentucky wku.edu' }).getByLabel('').check();

  await page.getByRole('button', { name: 'Close' }).click();

  // await page.pause();
  await page.locator('div:nth-child(2) > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-tbody > tr > td').first().click();
  await page.getByRole('tab', { name: 'Users and Payments' }).click();
  await page.getByRole('button', { name: 'plus Register new user' }).click();

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).fill(firstName);
  await page.getByRole('textbox', { name: '* Last Name' }).click();
  await page.getByRole('textbox', { name: '* Last Name' }).fill(lastName);

  const email = faker.internet.email(); // Generate a random email
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(email); // Use random email
  await page.getByTitle('Student').click();
  await page.getByText('Teacher', { exact: true }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByLabel('Close', { exact: true }).click();
}); 