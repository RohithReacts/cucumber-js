import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Given(
  "I am on the American Tourister home page",
  async function (this: CustomWorld) {
    await this.page.goto("https://americantourister-sepia.vercel.app/");
  }
);

Then(
  "the {string} link should be visible",
  async function (this: CustomWorld, name: string) {
    await expect(this.page.getByRole("link", { name: name })).toBeVisible();
  }
);

// "I click the {string} link" is already defined in playwright_steps.ts

Then(
  "I should see the text {string}",
  async function (this: CustomWorld, text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }
);

When(
  "I open the dialog {string} and click the button",
  async function (this: CustomWorld, dialogName: string) {
    await this.page
      .getByRole("button", { name: `Open dialog ${dialogName}` })
      .getByRole("button")
      .click();
  }
);

When(
  "I open the label dialog {string} and click the empty button",
  async function (this: CustomWorld, labelName: string) {
    await this.page
      .getByLabel(`Open dialog ${labelName}`)
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .click();
  }
);

When(
  "I click the first element with text {string}",
  async function (this: CustomWorld, text: string) {
    await this.page.getByText(text).first().click();
  }
);

When(
  "I click the {int}th button",
  async function (this: CustomWorld, index: number) {
    await this.page
      .getByRole("button")
      .nth(index - 1)
      .click();
  }
);

When(
  "I click the {int}rd button",
  async function (this: CustomWorld, index: number) {
    await this.page
      .getByRole("button")
      .nth(index - 1)
      .click();
  }
);
