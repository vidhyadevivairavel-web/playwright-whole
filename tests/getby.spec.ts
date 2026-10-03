import { test, expect } from '@playwright/test';

test('getbymethods', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');


  await page.getByLabel('email').fill('vidhya@gmail.com');

 
  await page.getByLabel(/Password:/).fill('vishjaya');


  await page.getByLabel('Your Age:').fill('23');

  await page.getByLabel('Standard').check();

  

  await page.getByPlaceholder('Enter your full name').fill('Vidhya');

  await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)')
    .fill('7890654321');

  await page.getByPlaceholder('Type your message here...')
    .fill('This is a test message');

  await page.getByPlaceholder('Search products...')
    .fill('Laptop');

 const button =await page.locator('//button[text()="Search"]').isVisible();
 console.log(button)


  const image=await page.getByAltText('logo image').isHidden();
   console.log(image)

});