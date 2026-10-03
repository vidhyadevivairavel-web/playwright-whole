import { test, expect } from '@playwright/test';

test('xpathprac', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    console.log(await page .locator("//input[@type='email']").isEditable())
    await page .locator('(//input[@class="selectors-input jsSelector"])[2]').fill('vfyg')
    await page .locator("(//input[@placeholder='Enter your company'])[1]").fill('cvb.pvt.ltd')
    await page .locator('(//input[@class="form-control"])[2]').fill('99008980')
      await page .locator('(//input[@type="text"])[2]').fill('india')
    
    



    
});
