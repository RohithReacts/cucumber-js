import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Given("I am on the portfolio homepage", async function (this: CustomWorld) {
  await this.page.goto("https://rohithreacts.vercel.app/");
});

When(
  "I click on the {string} link",
  async function (this: CustomWorld, name: string) {
    await this.page.getByRole("link", { name: name, exact: true }).click();
  }
);

Then(
  "I should see the {string} heading",
  async function (this: CustomWorld, name: string) {
    await expect(this.page.getByRole("heading", { name: name })).toBeVisible();
  }
);

When(
  "I click on the {string} button",
  async function (this: CustomWorld, name: string) {
    await this.page.getByRole("button", { name: name }).click();
  }
);

When(
  "I click on the {string} menu item",
  async function (this: CustomWorld, name: string) {
    await this.page.getByRole("menuitem", { name: name }).click();
  }
);
