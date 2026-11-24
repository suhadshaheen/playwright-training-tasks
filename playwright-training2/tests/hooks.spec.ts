import { test, expect } from "@playwright/test";

test.describe("Hooks", () => {
  test.beforeAll(async () => {
    console.log("Before All: Starting test setup");
  });

  test.beforeEach(async () => {
    console.log("Before Each: Starting individual test setup");
  });
  test.afterEach(async () => {
    console.log("After Each: Cleaning up after individual test");
  });
  test.afterAll(async () => {
    console.log("After All: Cleaning up after all tests");
  });
  test("First test", async ({ page }) => {
    console.log("Running First Test");

    await page.goto("https://playwright.dev/");

    await expect(page).toHaveTitle(/Playwright/);
  });

  test("Second test", async ({ page }) => {
    console.log("Running Second Test");

    await page.goto("https://playwright.dev/");

    await expect(page).toHaveTitle(/Playwright/);
  });
});
