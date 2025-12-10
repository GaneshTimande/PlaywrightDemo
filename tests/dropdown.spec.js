const{ test,expect}=require('@playwright/test')
test("Select value from droupdown",async function({page}){
await page.goto("https://freelance-learn-automation.vercel.app/signup");
await page.locator("#state").selectOption({label:"Goa"});
await page.waitForTimeout(5000);

await page.locator("#state").selectOption({value:"Himachal Pradesh"})
await page.waitForTimeout(5000);
await page.locator("#state").selectOption({index:4})
await page.waitForTimeout(5000);
 const value= await  page.locator("#state").textContent();
 console.log("All dropdown value"+value);
 await expect(value.includes("Kerala")).toBeTruthy();
});
