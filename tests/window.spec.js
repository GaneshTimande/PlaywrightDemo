const{test,expect}=require('@playwright/test');
test('working with the multiple tabs',async({browser})=>{

const context= await browser.newContext();
const page= await context.newPage();
await page.goto("https://freelance-learn-automation.vercel.app/login");

const [newPage]=await Promise.all
(
    [
        context.waitForEvent("page"),
        page.locator("(//a[contains(@href,'facebook')])[1]").click()

    ]
);
 await newPage.waitForLoadState();
await newPage.waitForTimeout(9000);
await newPage.locator("#_r_2_").fill("mukes@gmail.com");
// await newPage.locator("input[name='email']").fill("mukes@gmail.com");
await newPage.waitForTimeout(9000);
});
