import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Given("I am on the Slay Coffee home page", async function (this: CustomWorld) {
  await this.page.goto("https://www.slaycoffee.in/");
});

When(
  "I navigate to {string}",
  async function (this: CustomWorld, linkName: string) {
    if (linkName === "All products") {
      await this.page.getByRole("heading", { name: "Products" }).click();
      await this.page.getByRole("link", { name: "All products" }).click();
      await expect(
        this.page.getByRole("heading", { name: "All Products" })
      ).toBeVisible();
    } else if (
      [
        "Coffee Beans",
        "Coffee Grounds (Powder)",
        "Kombuchas",
        "Coffee Protine Bars",
        "Barrel Aged Coffee",
        "Slay Gift Packs",
        "Instant Coffee",
        "Gourmet Chocolates",
        "Slay Deals",
        "Slay Cafes",
      ].includes(linkName)
    ) {
      // Navigate back to Products menu if needed or just click if visible?
      // The original test clicks "Products" heading before clicking sub-links often.
      // We'll assume we need to open the menu first.
      await this.page
        .getByRole("navigation")
        .getByRole("heading", { name: "Products" })
        .click();
      await this.page.getByRole("link", { name: linkName }).click();
    } else {
      // Fallback for direct links if any
      await this.page.getByRole("link", { name: linkName }).click();
    }
  }
);

When(
  "I select the {string} and {string} and {string} products",
  async function (this: CustomWorld, p1: string, p2: string, p3: string) {
    await this.page
      .locator("#slay-freeze-dried-instant-coffee-combo-pack-of-3")
      .click();
    await this.page
      .locator("#caramel-and-almonds-premium-choco-delight")
      .click();
    await this.page.locator("#slay-now-artisan-luxe-instant-coffee").click();
  }
);

Then("I should see the cart drawer", async function (this: CustomWorld) {
  await expect(this.page.locator(".xl\\:w-\\[100\\%\\]")).toBeVisible();
});

When(
  "I select {string}, {string}, {string}, and {string} beans",
  async function (
    this: CustomWorld,
    p1: string,
    p2: string,
    p3: string,
    p4: string
  ) {
    await this.page
      .locator("#rum-barrel-aged-coffee-beans-100gms-pack-of-1")
      .click();
    await this.page
      .locator("#rum-barrel-aged-coffee-beans-250gms-pack-of-1")
      .click();
    await this.page
      .locator(
        "#slay-signature-100-superior-arabica-ground-coffee-beans-single-origin-medium-roast-not-an-instant-coffee-250g-pack-of-1"
      )
      .click();
    await this.page
      .locator(
        "#slay-x-100-premium-robusta-coffee-beans-indias-strongest-coffee-freshly-roasted-medium-to-dark-roast-smooth-taste-250g-pack-of-1"
      )
      .click();
  }
);

When(
  "I select {string} and add to cart",
  async function (this: CustomWorld, productName: string) {
    if (productName === "Variety Pack") {
      await this.page
        .locator(
          "#slay-coffee-variety-pack-robusta-coffee-powder-signature-arabica-coffee-powder-madras-mud-coffee-powder-250g-each"
        )
        .click();
    } else if (productName === "Orange and Cranberry Bar") {
      await this.page
        .locator("#orange-and-cranberry-coffee-protein-bar-40gm")
        .click();
    }

    await this.page
      .getByRole("button", { name: "ADD TO CART" })
      .first()
      .click();
  }
);

Then("I should see {string}", async function (this: CustomWorld, text: string) {
  await expect(this.page.getByRole("heading", { name: text })).toBeVisible();
});

When(
  "I select {string}",
  async function (this: CustomWorld, productName: string) {
    if (productName === "Blueberry Lemonade Kombucha") {
      await this.page.locator("#blueberry-lemonade-kombucha").click();
    } else if (productName === "Artisan Luxe Instant Coffee") {
      await this.page.locator("#slay-now-artisan-luxe-instant-coffee").click();
    } else if (productName === "Hazelnut Semi Dark Chocolate") {
      await this.page.locator("#hazelnut-semi-dark-chocolate").click();
    }
  }
);

When(
  "I select {string}, {string}, {string}, and {string}",
  async function (
    this: CustomWorld,
    p1: string,
    p2: string,
    p3: string,
    p4: string
  ) {
    await this.page.locator("#slay-rum-barrel-cold-brew-250ml").click();
    await this.page
      .locator("#whiskey-barrel-aged-coffee-pack-of-10-bags")
      .click();
    await this.page.locator("#whisky-barrel-cold-brew").click();
    await this.page.locator("#slay-x-cold-brew-250ml").click();
  }
);

When("I add the gift pack to cart", async function (this: CustomWorld) {
  await this.page.getByRole("button", { name: "ADD TO CART" }).click();
});

When("I open the cart", async function (this: CustomWorld) {
  await this.page.getByRole("link", { name: "2" }).click();
});

Then(
  "I should see the total price {string}",
  async function (this: CustomWorld, price: string) {
    await expect(this.page.getByRole("heading", { name: price })).toBeVisible();
  }
);
