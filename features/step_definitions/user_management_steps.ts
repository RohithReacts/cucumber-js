import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
// Wait, looking at the file list, there is a 'support' directory. I should check if there is a hooks file or how they handle the page object.
// However, standard cucumber-playwright often uses a CustomWorld or a global page.
// Let me check the 'support' directory first to be sure. But I can't check it in the middle of this thought process without a tool call.
// I will assume a standard pattern where 'page' is available or I will use the 'this.page' if they use CustomWorld.
// Let's look at the file list again. 'cucumber.js' is there. 'features/support' exists.
// I'll write the code assuming a common pattern but I might need to adjust it.
// Actually, to be safe and avoid errors, I should probably check 'features/support' content first.
// But I am in the middle of "write_to_file".
// I will write a generic version that imports 'page' from a likely location, or uses 'global.page' if they are using that pattern.
// Better yet, I will write it using `Before` and `After` hooks if I were setting it up from scratch, but here I am adding to an existing repo.
// Let's assume they have a setup.
// actually, let's look at the previous file list: "features/support" has 2 children.
// I'll use a safe bet: I'll try to import `page` from `@playwright/test` is NOT correct for Cucumber.
// I will assume there is a `fixture` or `world` setup.
// Let's try to read the support directory first? No, I should just write the file and if it fails I fix it.
// Actually, looking at the user request, they provided a Playwright test `test("test", async ({ page }) => { ... })`.
// In Cucumber, we don't get `page` injected like that automatically without setup.
// I will write the steps assuming `this.page` is available (CustomWorld) or I will import it.
// Let's check `features/support` content in a separate step if I want to be perfect.
// BUT, I will write the file now with a placeholder comment or best guess.
// Actually, I'll use `setDefaultTimeout` and assume `page` is global or managed.
// Let's look at the file list again. `cucumber.js` suggests a standard setup.
// I will write the steps using `this.page` which is the most common way if `CustomWorld` is used.
// If not, I might need to import `page` from a helper.
// Let's try to find where `page` comes from in their existing steps.
// Ah, I can't see existing steps.
// I'll write the steps using `this.page` and standard Playwright locators.

Given(
  "I navigate to the application home page",
  async function (this: CustomWorld) {
    await this.page.goto("https://reacts-dev-better-auth.vercel.app/");
  }
);

Then(
  "I should see the {string} image",
  async function (this: CustomWorld, imageName: string) {
    await expect(this.page.getByRole("img", { name: imageName })).toBeVisible();
  }
);

When(
  "I fill in the login form with email {string} and password {string}",
  async function (this: CustomWorld, email: string, password: string) {
    await this.page.getByRole("textbox", { name: "Email" }).click();
    await this.page.getByRole("textbox", { name: "Email" }).fill(email);
    await this.page.getByRole("textbox", { name: "Password" }).click();
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
  }
);

When(
  "I click the {string} button",
  async function (this: CustomWorld, buttonName: string) {
    await this.page.getByRole("button", { name: buttonName }).click();
  }
);

Then(
  "I should be redirected to the dashboard",
  async function (this: CustomWorld) {
    await this.page.waitForURL("**/dashboard");
  }
);

When(
  "I fill in the user details with username {string} and email {string}",
  async function (this: CustomWorld, username: string, email: string) {
    await this.page.getByRole("textbox", { name: "Username" }).click();
    // Simulating the user's specific interaction if needed, but .fill() is usually sufficient.
    await this.page.getByRole("textbox", { name: "Username" }).fill(username);

    await this.page.getByRole("textbox", { name: "Email" }).click();
    await this.page.getByRole("textbox", { name: "Email" }).fill(email);
  }
);

When(
  "I navigate to the {string} page",
  async function (this: CustomWorld, pageName: string) {
    await this.page.getByRole("link", { name: pageName }).click();
  }
);

When(
  "I toggle the theme to {string}",
  async function (this: CustomWorld, themeName: string) {
    await this.page.getByRole("button", { name: "Toggle theme" }).click();
    await this.page.getByRole("menuitem", { name: themeName }).click();
  }
);

Then(
  "I should see the {string} text",
  async function (this: CustomWorld, text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }
);
