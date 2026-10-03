import { test, expect, Locator } from '@playwright/test'; 
test('Rediff registration form', async ({ page }) => { 
await page.goto( 'https://register.rediff.com/register/register.php?FormName=user_details' );
await page.getByPlaceholder('Enter your full name').fill('Vidhya');
await page.getByRole('button', {name: 'Check availability',}).click();
let text=await page.getByText('/Sorry, the ID that you are looking for is taken./') ;
console.log(text);
await page.getByPlaceholder('Enter Rediffmail ID' ).fill('vidhya'); 
await page.getByRole('button', {name: 'Check availability',}).click();
await page.getByPlaceholder('Enter password').fill('Test@12345'); 
await page.getByPlaceholder('Retype password').fill('Test@12345');
await page.getByLabel('Female').click();
let alternateemail:boolean=await page.locator('.nomargin').isChecked();
console.log(alternateemail)
if (alternateemail=false){
await page.getByPlaceholder('Enter recovery email').fill('vidhya@example.com'); 
}

await page.locator('#mobno').fill('9876543210');
//await page.getByRole('radio', { name: 'Male', exact: true }).check();
await page.getByPlaceholder('Enter Captcha').click();
await page.getByRole('button', { name: 'Create my account'}).click();
let logo:boolean=await page.getByAltText('Rediffmail').isVisible();
console.log(logo)
})