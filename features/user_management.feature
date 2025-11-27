@user
Feature: User Management Flow

  Scenario: User performs login, adds a user, and navigates through the application
    Given I navigate to the application home page
    Then I should see the "To get started, edit the page" heading
    When I click the "Login" link
    Then I should see the "Login Side Illustration" image
    When I fill in the login form with email "helloreacts@gmail.com" and password "password123"
    And I click the "Continue" button
    Then I should be redirected to the dashboard
    When I click the "Add User" button
    And I fill in the user details with username "Hi Hello" and email "hello@gmail.com"
    And I click the "Save" button
    When I navigate to the "About" page
    And I navigate to the "Connect" page
    When I toggle the theme to "Dark"
    Then I should see the "Simple Starter Pack" heading
    When I click the "Logout" button
    Then I should see the "last used" text
