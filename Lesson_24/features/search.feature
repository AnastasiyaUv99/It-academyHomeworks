Feature: Oz search testing

  Scenario: displaying header if search is successful
    Given I navigate on https://oz.by/ page
    When I input text 'тетрадь' to component "Home Page > Search Component > Search Input"
    And I click on "Home Page > Search Component > Search Button" button
    Then I expect that element "Search Result Page > Search Count Header" should contain text 'тетрадь'

  Scenario: displaying text if search is unsuccessful
    Given I navigate on https://oz.by/ page
    When I input text '56568696 аарарарв' to component "Home Page > Search Component > Search Input"
    And I click on "Home Page > Search Component > Search Button" button
    Then I expect that element "Search Result Page > Unsuccess search text" should contain text '» точного совпадения не найдено, посмотрите похожие товары'