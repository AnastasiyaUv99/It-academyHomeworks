const { Base } = require('./base');

class LoginPage extends Base {
  constructor() {
    super();
  }
  get loginField() {
    return cy.get('.form-control');
  }

  get loginButton() {
    return cy.get('.btn.btn-lg.btn-primary.w-100.mt-3');
  }

  get errorMessage() {
    return cy.get('div.alert.alert-error.fs-5.mb-2');
  }

  get smsCodeFieldOne() {
    return cy.get('.otp-fieldset__input.form-control:first-of-type');
  }

  get smsCodeFieldTwo() {
    return cy.get('.otp-fieldset__input.form-control:nth-of-type(2)');
  }

  get smsCodeFieldThr() {
    return cy.get('.otp-fieldset__input.form-control:nth-of-type(3)');
  }

  get smsCodeFieldFour() {
    return cy.get('.otp-fieldset__input.form-control:nth-of-type(4)');
  }



  async loginWithSmsCode(numOne, numTwo, numThr, numFour) {
    this.smsCodeFieldOne.type(numOne);
    this.smsCodeFieldTwo.type(numTwo);
    this.smsCodeFieldThr.type(numThr);
    this.smsCodeFieldFour.type(numFour);
    this.loginButton.click();
  }
}

module.exports = LoginPage;
