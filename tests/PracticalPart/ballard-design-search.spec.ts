import { test, expect } from "@playwright/test";

test("Ballard Designs search test2", async ({ page }) => {
  await page.goto(
    "https://certwcs.ballarddesigns.com/?aka_bypass=5C73514EE7A609054D81DE61DD9CA3D6",
    { waitUntil: "domcontentloaded" },
  );

  const searchBox = page.getByRole("searchbox", {
    name: "Search Ballard Designs",
  });

  await searchBox.fill("Mirror");
  await page.getByRole("button", { name: "Search" }).click();

  await expect(page).toHaveURL(/searchTerm=Mirror/);

  await expect(
    page.locator(".c-product-list-products__product-card").first(),
  ).toBeVisible();
});
