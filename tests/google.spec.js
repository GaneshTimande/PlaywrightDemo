const { test, expect } = require('@playwright/test');

test("verify Application Title", async ({ page }) => {

  // Navigate to the page
  await page.goto("https://google.com");

  // Get current URL
  const url = await page.url();
  console.log("URL is: " + url);

  // Verify URL contains google
  expect(url).toContain("google");

  // Get page title
  const title = await page.title();
  console.log("Title is: " + title);

  // Verify Title
  expect(title).toBe("Google");
});
