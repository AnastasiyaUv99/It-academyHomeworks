

const MainPage = require('../../pageobjects/mainPage');
const mainPage = new MainPage();

const LoginPage = require('../../pageobjects/loginPage');
const loginPage = new LoginPage();

const Header = require('../../pageobjects/components/header');
const header = new Header();


describe('Oz Test Authorization',  function () {
  it('should be error message if mobile telephone is wrong',  () => {
    cy.visit(mainPage.mainPageUrl);
    header.loginButton.click();
    cy.loginWithPhoneNumber(111111111);
    cy.contains('Введите корректный номер мобильного телефона').should('be.visible')
   
  });

  it('should be error message if sms-code is wrong',  () => {
    cy.visit(mainPage.mainPageUrl);
    header.loginButton.click();
    cy.loginWithPhoneNumber(291111121);
    loginPage.loginWithSmsCode(1, 2, 3, 4);
    cy.contains('Неверный код. Проверьте его на ошибки или отправьте код ещё раз').should('be.visible')
  });
});

describe('Oz search testing', function () {
  it('displaying products if search is successful',  () => {
    cy.visit(mainPage.mainPageUrl);
    header.searching('тетрадь');
    cy.get(header.successSearchText, { timeout: 10000 }).should ('be.visible')
  });

  it('displaying products if search is unsuccessful', () => {
    cy.visit(mainPage.mainPageUrl);
    header.searching('56568696 аарарарв', header.unsuccessSearchText);
    cy.get(header.unsuccessSearchText, { timeout: 10000 }).should ('be.visible');
  });
});


