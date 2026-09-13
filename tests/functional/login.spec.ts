import { test, expect } from "@playwright/test";

test.describe("Login Functionality", () => {
  test.beforeEach("Go to the login page", async ({ page }) => {
    // 1. Go to the login page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

    // 2. Click on the Make Appoinment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.locator("#login")).toContainText(
      "Please login to make appointment."
    );
  });

  test("Should loging sussessfully", async ({ page }) => {
    // Fill in the username and password fields
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");

    //await page.fill('input[name="username"]', "John Doe");
    //await page.fill('input[name="password"]', "ThisIsNotAPassword");

    // Click the login button
    await page.getByRole("button", { name: "Login" }).click();
    //await page.click('button[type="submit"]');

    // Assert if the login was successful 
    await expect(page.locator("//h2")).toHaveText("Make Appointment");
  });

  test("Should prevent login with incorrect creadit.", async ({ page }) => {
    // Fill in the username and password fields
    await page.getByLabel("Username").fill("Warushika Dahanayake");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");

    //await page.fill('input[name="username"]', "John Doe");
    //await page.fill('input[name="password"]', "ThisIsNotAPassword");

    // Click the login button
    await page.getByRole("button", { name: "Login" }).click();
    //await page.click('button[type="submit"]');

    // Assert a Error Message
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid."
    );
  });
});
