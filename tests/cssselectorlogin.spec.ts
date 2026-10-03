import {
  test,
  chromium,
  Browser,
  BrowserContext,
  Page,
} from "@playwright/test";

 

test("launch and detail filling", async ({ page }) => {
 await page.goto("https://testautomationpractice.blogspot.com/");

// await page.locator("#name").fill("Vidhya");
// await page.locator("#email").fill("Vidhyadevi@gmail.com");
// await page.locator("#phone").fill("9985885230");
// await page.locator("#textarea").fill("104,ponnaiyarajapuram,cbe-1");
await page.locator(".form-control").nth(0).fill("Vidhya");
await page.locator(".form-control").nth(1).fill("Vidhyadevi@gmail.com")
await page.locator(".form-control").nth(2).fill("9985885230");
await page.locator(".form-control").nth(3).fill("104,ponnaiyarajapuram,cbe-1");


});