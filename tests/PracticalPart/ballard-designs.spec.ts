import { test, expect } from "@playwright/test";

test("Ballard Designs test", async ({ page }) => {
  await page.goto(
    "https://certwcs.ballarddesigns.com/?aka_bypass=5C73514EE7A609054D81DE61DD9CA3D6",
  );

  await expect(page).toHaveTitle(/Ballard Designs/i);
  await expect(
    page.getByRole("button", { name: "Ballard designs logo" }),
  ).toBeVisible();
});
