@portfolio
Feature: Portfolio Navigation
  As a user
  I want to navigate through the portfolio sections
  So that I can view different parts of the portfolio

  Scenario: Navigate through all sections
    Given I am on the portfolio homepage
    When I click on the "Work" link
    Then I should see the "Work Experience" heading
    When I click on the "Projects" link
    Then I should see the "Selected Projects" heading
    When I click on the "About" link
    Then I should see the "About Me" heading
    When I click on the "Connect" link
    Then I should see the "Connect" heading
    When I click on the "Services" button
    And I click on the "Team" menu item
    Then I should see the "Meet the Team" heading
