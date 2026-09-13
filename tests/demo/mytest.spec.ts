import { test, expect } from "@playwright/test";

test("Should load home page with correct title", async ({ page }) => {
  // Go to the home page
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // Assert if the title is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // Assert header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test.only("Should demo locators", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  let makeAppmtBtn = page.getByRole("link", { name: "Make Appointment" })
  console.log(`>>The type of locator: ${typeof makeAppmtBtn}, The value of the locator is: ${JSON.stringify(makeAppmtBtn)}`);
  //await makeAppmtBtn.click();
  /*await expect(
    page.getByText("Please login to make appointment.")
  ).toBeVisible();*/
});
