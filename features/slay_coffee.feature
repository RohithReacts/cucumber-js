@SlayCoffee
Feature: Slay Coffee Shopping Flow
  As a user
  I want to browse various coffee products
  So that I can add them to my cart

  Scenario: Browse and add products to cart
    Given I am on the Slay Coffee home page
    When I navigate to "All products"
    And I select the "Freeze Dried Instant Coffee" and "Caramel Premium" and "Artisan Luxe" products
    Then I should see the cart drawer
    When I navigate to "Coffee Beans"
    And I select "Rum Barrel", "Rum Barrel 250g", "Signature Arabica", and "Premium Robusta" beans
    When I navigate to "Coffee Grounds (Powder)"
    And I select "Variety Pack" and add to cart
    Then I should see "Related Products"
    When I navigate to "Kombuchas"
    And I select "Blueberry Lemonade Kombucha"
    When I navigate to "Coffee Protine Bars"
    And I select "Orange and Cranberry Bar" and add to cart
    When I navigate to "Barrel Aged Coffee"
    And I select "Rum Barrel Cold Brew", "Whiskey Barrel Bags", "Whisky Barrel Cold Brew", and "Slay X Cold Brew"
    When I navigate to "Slay Gift Packs"
    And I add the gift pack to cart
    When I navigate to "Instant Coffee"
    And I select "Artisan Luxe Instant Coffee"
    When I navigate to "Gourmet Chocolates"
    And I select "Hazelnut Semi Dark Chocolate"
    When I navigate to "Slay Deals"
    And I navigate to "Slay Cafes"
    And I open the cart
    Then I should see the total price "₹1237"
