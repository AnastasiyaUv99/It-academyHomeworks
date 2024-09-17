Feature: Oz Test Authorization

  Scenario: should be error message if mobile telephone is wrong
    Given I navigate on https://oz.by/ page
    Then I click on "Login Page > Enter Button" button
    Then I input text '111111111' to component "Login Page > Login Field"
    And I click on "Login Page > Login Button" button
    Then I expect that element "Login Page > Error Message" should contain text 'Введите корректный номер мобильного телефона'

    Scenario: should be error message if sms-code is wrong
    Given I navigate on https://oz.by/ page
    Then I click on "Login Page > Enter Button" button
    Then I input text '291111111' to component "Login Page > Login Field"
    And I click on "Login Page > Login Button" button
    Then I input sms-code '1,2,3,4' into "Login Page > smsCodeFieldOne", "Login Page > smsCodeFieldTwo", "Login Page > smsCodeFieldThr", "Login Page > smsCodeFieldFour"
    And I click on "Login Page > Login Button" button
    Then I expect that element "Login Page > Error Message" should contain text 'Неверный код. Проверьте его на ошибки или отправьте код ещё раз'




