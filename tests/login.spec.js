const{test,expect}=require("@playwright/test");
test("Valid Login", async function({page}){
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder('Username').type("Admin",{delay:200});
await page.locator("//input[@placeholder='Password']").type("admin1234",{delay:200});
await page.locator("button[type='submit']").click();
await page.waitForTimeout(5000)
await expect(page).toHaveURL(/dashboard/);
});