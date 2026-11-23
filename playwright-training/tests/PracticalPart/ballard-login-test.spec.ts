import { test, expect } from "@playwright/test";

test("Login with invalid credentials", async ({ page }) => {
  await page.goto(
    "https://certwcs.ballarddesigns.com/?aka_bypass=5C73514EE7A609054D81DE61DD9CA3D6",
    { waitUntil: "domcontentloaded" },
  );
  await page.getByRole("link", { name: "Account" }).click();
  await page.getByRole("button", { name: "Sign In" }).click();

  await page
    .getByRole("textbox", { name: "Email", exact: true })
    .fill("wrong@example.com");

  await page
    .getByRole("textbox", { name: "Password" })
    .fill("WrongPassword123");

  await page.getByRole("button", { name: "Sign In" }).click();

  await expect(page.getByText("Email/Password you entered is")).toBeVisible();
});
