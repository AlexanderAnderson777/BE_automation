import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  await page.goto('https://examd.ai/bsecure/config/');
  await page.getByRole('link', { name: 'Don\'t have an account?' }).click();
  await page.getByLabel('School Name').click();
  await page.getByText('Western Kentucky').click();

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill(firstName);
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill(lastName);

  const email = faker.internet.email(); // Generate a random email
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(email); // Use random email
  
  const username = faker.internet.userName(); // Generate a random username
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(username); // Use random username

  const password = faker.internet.password(12, true);
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill(password); // Use random password

  await page.getByPlaceholder('Re-type password').click();
  await page.getByPlaceholder('Re-type password').fill(password); // Use the same password

  await page.getByRole('button', { name: 'Register' }).click();

  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByPlaceholder('Enter your username').click();
  await page.getByLabel('Username').fill(username); // Use random username
  await page.getByRole('button', { name: 'Send OTP' }).click();
});