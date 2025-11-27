@Playwright
Feature: Playwright Home Page
  As a user
  I want to visit the Playwright home page
  So that I can learn how to install and use it

  Scenario: Navigation through Playwright documentation
    Given I am on the Playwright home page
    Then I should see the Playwright "Playwright enables reliable" heading
    When I click the "Get started" link
    Then I should see the Playwright "Installation" heading
    When I click the "Installing Playwright" link exactly
    And I click the "Using npm, yarn or pnpm" link exactly
    And I click the "Using the VS Code Extension" link exactly
    And I click the "What's Installed" link exactly
    And I click the "Running the Example Test" link exactly
    And I click the "HTML Test Reports" link exactly
    And I click the "Running the Example Test in UI Mode" link exactly
    And I click the "Updating Playwright" link exactly
    And I click the "System requirements" link exactly
    And I click the "What's next" link exactly
    And I click the "What's Installed" link exactly
    And I click the "Running the Example Test" link exactly
