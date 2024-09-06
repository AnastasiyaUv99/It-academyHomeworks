const { Base } = require('./base');

class LoginPage extends Base {
  constructor(page) {
    super(page);
  }
  get loginField() {
    return this.page.locator('.form-control');
  }

  get loginButton() {
    return this.page.locator('.btn.btn-lg.btn-primary.w-100.mt-3');
  }

  get errorMessage() {
    return this.page.locator('div.alert.alert-error.fs-5.mb-2');
  }

  get smsCodeFieldOne() {
    return this.page.locator('.otp-fieldset__input.form-control:first-of-type');
  }

  get smsCodeFieldTwo() {
    return this.page.locator('.otp-fieldset__input.form-control:nth-of-type(2)');
  }

  get smsCodeFieldThr() {
    return this.page.locator('.otp-fieldset__input.form-control:nth-of-type(3)');
  }

  get smsCodeFieldFour() {
    return this.page.locator('.otp-fieldset__input.form-control:nth-of-type(4)');
  }

  async loginTelephone(telephoneNumber) {
    await this.loginField.fill(telephoneNumber.toString());
    await this.pressElement(this.loginButton);
  }

  async loginSmsCode(numOne, numTwo, numThr, numFour) {
    await this.smsCodeFieldOne.fill(numOne.toString());
    await this.smsCodeFieldTwo.fill(numTwo.toString());
    await this.smsCodeFieldThr.fill(numThr.toString());
    await this.smsCodeFieldFour.fill(numFour.toString());
    await this.pressElement(this.loginButton);
  }
}

module.exports = LoginPage;
