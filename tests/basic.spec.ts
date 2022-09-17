// @ts-check
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Navigate to Docs page", async ({ page, isMobile }) => {
  if (isMobile) {
    await page.locator('[aria-label="Open menu"]').click();
    await page.locator("text=Docs").nth(1).click();

    await expect(page).toHaveURL("./docs");

    await page.locator('[aria-label="Close menu"]').click();
    await expect(page.locator("text=👋 Welcome")).toBeVisible();
  } else {
    await page.locator("text=Docs").first().click();
    await expect(page).toHaveURL("./docs");
    await expect(page.locator("text=👋 Welcome")).toBeVisible();
  }
});

test("Navigate to Community page", async ({ page, isMobile }) => {
  if (isMobile) {
    await page.locator('[aria-label="Open menu"]').click();
    await page.locator("text=Community").nth(1).click();

    await expect(page).toHaveURL("./community");

    await page.locator('[aria-label="Close menu"]').click();
    await expect(page.locator("text=📦 Community components")).toBeVisible();
  } else {
    await page.locator("text=Community").first().click();
    await expect(page).toHaveURL("./community");
    await expect(page.locator("text=📦 Community components")).toBeVisible();
  }
});

test("Navigate to My components page", async ({ page, isMobile }) => {
  if (isMobile) {
    await page.locator('[aria-label="Open menu"]').click();
    await page.locator("text=My components").nth(1).click();

    await expect(page).toHaveURL("./auth");

    await page.locator('[aria-label="Close menu"]').click();
    await expect(page.locator('h2:has-text("Sign In")')).toBeVisible();
  } else {
    await page.locator("text=My components").first().click();
    await expect(page).toHaveURL("./auth");
    await expect(page.locator('h2:has-text("Sign In")')).toBeVisible();
  }
});
