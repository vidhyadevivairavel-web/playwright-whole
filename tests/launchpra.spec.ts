import {
  test,
  chromium,
  Browser,
  BrowserContext,
  Page,
} from "@playwright/test";

test("Creating first test", async ({ browser, context }) => {

  const page: Page = await context.newPage();

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

});