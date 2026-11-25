import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login-data";
for (const data of loginData) {
  test(`Login test - ${data.description}`, async ({ page }) => {
    await page.goto("/?aka_bypass=5C73514EE7A609054D81DE61DD9CA3D6");

    await page.getByRole("link", { name: "Account" }).click();

    await page
      .getByRole("textbox", { name: "Email", exact: true })
      .fill(data.email);

    await page.getByRole("textbox", { name: "Password" }).fill(data.password);

    await page.getByRole("button", { name: "Sign In" }).click();

    if (data.expected === "success") {
      await expect(
        page.getByRole("link", { name: "Log out of My Account" }),
      ).toBeVisible();
    } else if (data.errorMessage) {
      await expect(
        page.getByText(data.errorMessage, { exact: false }),
      ).toBeVisible();
    }
  });
}
