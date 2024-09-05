const { Base } = require('./base');

class LoginPage extends Base {
  constructor() {
    super();
  }
  get loginField() {
    return $('.form-control');
  }

  get loginButton() {
    return $('.btn.btn-lg.btn-primary.w-100.mt-3');
  }

  get errorMessage() {
    return $('div.alert.alert-error.fs-5.mb-2');
  }

  get smsCodeFieldOne() {
    return $('.otp-fieldset__input.form-control:first-of-type');
  }

  get smsCodeFieldTwo() {
    return $('.otp-fieldset__input.form-control:nth-of-type(2)');
  }

  get smsCodeFieldThr() {
    return $('.otp-fieldset__input.form-control:nth-of-type(3)');
  }

  get smsCodeFieldFour() {
    return $('.otp-fieldset__input.form-control:nth-of-type(4)');
  }

  async loginTelephone(telephoneNumber) {
    await this.loginField.setValue(telephoneNumber);
    await this.pressElement(this.loginButton);
  }

  async loginSmsCode(numOne, numTwo, numThr, numFour) {
    await this.smsCodeFieldOne.setValue(numOne);
    await this.smsCodeFieldTwo.setValue(numTwo);
    await this.smsCodeFieldThr.setValue(numThr);
    await this.smsCodeFieldFour.setValue(numFour);
    await this.pressElement(this.loginButton);
  }
}

module.exports = LoginPage;
