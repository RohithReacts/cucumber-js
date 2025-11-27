import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Given("I am on the Playwright home page", async function (this: CustomWorld) {
  await this.page.goto("https://playwright.dev/");
});

Then(
  "the page title should contain {string}",
  async function (this: CustomWorld, titleSubstring: string) {
    await expect(this.page).toHaveTitle(new RegExp(titleSubstring));
  }
);

When(
  "I click the {string} link",
  async function (this: CustomWorld, linkName: string) {
    await this.page.getByRole("link", { name: linkName }).click();
  }
);

When(
  "I click the {string} link exactly",
  async function (this: CustomWorld, linkName: string) {
    await this.page.getByRole("link", { name: linkName, exact: true }).click();
  }
);

Then(
  "I should see the Playwright {string} heading",
  async function (this: CustomWorld, headingName: string) {
    await expect(
      this.page.getByRole("heading", { name: headingName })
    ).toBeVisible();
  }
);
