@american_tourister
Feature: American Tourister Shopping Flow

  Scenario: Navigate through American Tourister website and filter products
    Given I am on the American Tourister home page
    Then the "American Tourister Logo" link should be visible
    When I click the "Luggage" link
    Then I should see the text "₹4,550.00"
    When I click the "Backpacks" link
    And I click the "Duffles" link
    And I click the "Connect" link
    And I click the "Luggage" link
    And I open the dialog "_R_t5falb_" and click the button
    And I open the dialog "_R_1d5falb_" and click the button
    And I open the label dialog "_R_1t5falb_" and click the empty button
    And I open the label dialog "_R_2d5falb_" and click the empty button
    And I click the first element with text "4"
    And I click the 5th button
    And I click the 4th button
