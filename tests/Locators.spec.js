const {test,expect}= require('@playwright/test')


test("locator Exmaple",async({page})=>{

await page.goto("https://www.demoblaze.com/index.html")
await page.locator('id=login2').click();
await page.locator('#loginusername').fill("pavanol");
await page.locator('#loginpassword').fill("test@123");
await page.locator("button[onclick='logIn()']").click();
const logOut=await page.locator('#logout2');
await expect(logOut).toBeVisible();

const elementlink= await page.$$('//*[@id="tbodyid"]//div//h4//a');

for( const link of elementlink){
const  elementtext=await link.textContent();
console.log(elementtext);
}
});
