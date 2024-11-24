const { test, expect } = require('@playwright/test');
test.setTimeout(150000); 
test.describe('Instructor', () => {
  let randomShortName, randomLongName, randomExamLongName, randomExamName;

  test.beforeEach(async ({ page }) => {
    // Step 1: Open URL
    await page.goto('https://examd.ai/bsecure/config/');
    
  });

  test('Instructor', async ({ page }) => {
    // Step 3–7: Login
    await page.fill('#login_username', 'tabatha');
    await page.fill('#login_password', 'Password1');
    await page.click('.ant-btn > span');

    // Step 8–9: Mouse over and click radio button

    
    await page.waitForTimeout(1000); // Waits for N second


    await page.getByLabel('', { exact: true }).check();

    // Step 10–11: Navigate to Data Entry tab
    await page.waitForSelector('#rc-tabs-1-tab-dataentry', { state: 'visible' });
    await page.click('#rc-tabs-1-tab-dataentry');

    // Step 12–13: Add course
    await page.waitForSelector("//div[@id='rc-tabs-1-panel-dataentry']//button/span[2]", { state: 'visible' });
    await page.click("//div[@id='rc-tabs-1-panel-dataentry']//button/span[2]");

    // Step 14–16: Enter course short name
    randomShortName = Math.random().toString(36).substring(2, 7);
    await page.fill('#courseDetails_shortName', randomShortName);

    // Step 17–20: Enter course long name
    randomLongName = Math.random().toString(36).substring(2, 7);
    await page.fill('#courseDetails_longName', randomLongName);

    // Step 21–24: Select start and end dates
    await page.click('#courseDetails_startDate');
    await page.click('text=Today');
    await page.click('#courseDetails_endDate');
    await page.getByText('Today').nth(1).click();

    // Step 25: Save course
    await page.click('.ant-modal-footer span');

    // Step 26–27: Verify course added
    const successMessage = await page.locator("//span[normalize-space()='Added course successfully']").innerText();
    expect(successMessage).toBe('Added course successfully');

    // Step 28–32: Search and select course
    await page.click('.inline-block:nth-child(2)');
    await page.fill('#rc_select_7', randomLongName);
    await page.waitForSelector('.ant-select-item-option-content', { state: 'visible' });
    await page.click('.ant-select-item-option-content');
    await page.click('.ant-btn > span:nth-child(2)');

    await page.waitForTimeout(1000); // Waits for N second

    // Step 33–40: Configure quiz
    await page.fill('#quizDetails_numberOfQuestions', '200');
    await page.fill('#quizDetails_allowedAttempts', '300');
    randomExamLongName = Math.random().toString(36).substring(2, 7);
    await page.fill('#quizDetails_longName', randomExamLongName);
    randomExamName = Math.random().toString(36).substring(2, 7);
    await page.fill('#quizDetails_shortName', randomExamName);

    await page.waitForTimeout(1000); // Waits for N second

    // Click by id
    await page.click('#quizDetails_courseId');

    await page.waitForTimeout(1000); // Waits for N second

    // Click by XPath
    await page.locator("(//div[@class='ant-select-item-option-content'])[11]").click();

    await page.waitForTimeout(1000); // Waits for N second

    // Click by CSS
    await page.click('.ant-modal-footer span');
    await page.click('.ant-btn:nth-child(2) > span');

    // Configure a quiz
    await page.getByLabel('Close', { exact: true }).click();



    await page.getByRole('button', { name: 'Enrollment' }).click();
    await page.getByRole('row', { name: '10400 Dev Student hvczt qwert' }).getByRole('button').click();
    await page.getByRole('row', { name: 'Expand row 10359165 jrmrd' }).getByLabel('Expand row').click();
    await page.getByRole('button', { name: 'Enroll', exact: true }).click();
    await page.getByLabel('Close', { exact: true }).click();
    await page.getByRole('tab', { name: 'Reports' }).click();
    await page.getByText('Select course', { exact: true }).click();
    await page.getByRole('main').click();
    await page.getByTitle('Select Exam').click();
    await page.getByRole('main').click();
    await page.getByRole('tab', { name: 'Data Entry' }).click();
    await page.getByRole('button', { name: 'user-add New Enrollment' }).click();
    await page.locator('.ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    await page.getByLabel('Close', { exact: true }).click();

    await page.getByRole('button', { name: 'user-add New Enrollment' }).click();


// // Click on the dropdown element
// await page.click('.ant-select-in-form-item .ant-select-selection-item');

// // Click on the specific element using XPath
// await page.click("(//div[@class='ant-select-item-option-content'])[11]");

//     // Click on element with id "addUserForm_exam"
// await page.click('#addUserForm_exam');

// // Click on the specific xpath element
// await page.click('//div[9]/div/div/div[2]/div/div/div/div/div');

// Click on element with id "addUserForm_fname"
await page.click('#addUserForm_fname');

// Generate random first name
const rendomFirstName = await page.evaluate(() => Math.random().toString(36).substring(2, 7));

// Type the random first name into the input field
await page.fill('#addUserForm_fname', rendomFirstName);

// Click on element with id "addUserForm_lname"
await page.click('#addUserForm_lname');

// Generate random last name
const rendomLastName = await page.evaluate(() => Math.random().toString(36).substring(2, 7));

// Type the random last name into the input field
await page.fill('#addUserForm_lname', rendomLastName);

// Click on element with id "addUserForm_email"
await page.click('#addUserForm_email');

// Type a static email into the input field
await page.fill('#addUserForm_email', 'rtyuio@gmail.com');

// Click on the specific button in the modal footer
await page.click('.ant-modal-footer > .ant-btn:nth-child(2) > span:nth-child(2)');

// Click on the close icon
await page.click('.anticon-close path');

// Click on the user icon
await page.click('.anticon-user > svg');

// Click on the element with text color red
await page.click('.text-red-400');
// hello
    // await page.pause();
  });
});
