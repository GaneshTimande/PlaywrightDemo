const{test,expect}=require("@playwright/test");
test("verify error Message", async function({page}){
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
console.log(await page.viewportSize().width);
console.log(await page.viewportSize().height);
await page.getByPlaceholder('Username').type("Admin",{delay:200});
await page.locator("//input[@placeholder='Password']").type("admin1233",{delay:200});
await page.locator("button[type='submit']").click();
await page.waitForTimeout(5000)
const text=await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent();

  await expect(text).toContain("Invalid credentials");
});