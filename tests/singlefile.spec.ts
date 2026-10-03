
import { test, expect } from '@playwright/test';
test('Upload a single file and verify filename', async ({ page }) => {
  await page.goto('https://qaplayground.com/practice/file-upload');
 
  await  page.getByTestId('fu-single-input').setInputFiles("C:/Users/Vidhyadv/Desktop/sample/sample-local-pdf.pdf");
  await expect(page.locator("#result-s01")).toContainText("sample-local-pdf");
  




//   const fileInput = page.getByTestId('fu-multi-input');

//   await fileInput.setInputFiles([
// "C:/Users/Vidhyadv/Desktop/sample/sample-local-pdf -1.pdf",
// "C:/Users/Vidhyadv/Desktop/sample/sample-local-pdf -2.pdf",
// "C:/Users/Vidhyadv/Desktop/sample/sample-local-pdf.pdf"

//   ]);
//   await expect(page.locator("#result-s02")).toContainText("3 file(s) selected:");
const fileInput = page.getByTestId('fu-multi-input'); 
const [fileChooser] = await Promise.all([ page.waitForEvent('filechooser'), fileInput.click(), ]); 
await fileChooser.setFiles([ 'C:/Users/Vidhyadv/Desktop/sample/sample-local-pdf -1.pdf', 
  'C:/Users/Vidhyadv/Desktop/sample/sample-local-pdf -2.pdf', 
  'C:/Users/Vidhyadv/Desktop/sample/sample-local-pdf.pdf', ]);
   await expect(page.locator('#result-s02')) .toContainText('3 file(s) selected:');


   //await page.dragAndDrop()
    const dragdrop = page.getByTestId('fu-drop-input');

  await dragdrop.setInputFiles(
    'C:/Users/Vidhyadv/Desktop/sample/sample-local-pdf.pdf'
  );

  await expect(page.locator('#result-s04'))
    .toContainText('sample-local-pdf.pdf');

});