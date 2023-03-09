Feature: Coins Finder
  Scenario: Check the coin finder
    Given I send a GET request to "/coin/BTC"
    And the response status code should be 200
    And the response content should be:
    """
    {
      "id":"BTC",
      "name":"Bitcoin",
      "price":"23000.00"
    }
    """

  Scenario: Check the coin finder returns not found when coin does not exists
    Given I send a GET request to "/coin/PACO"
    And the response status code should be 404
    And the response should be empty

