import { Base } from './base.js';
import {Search} from "./components/search.js";

class LoginPage extends Base {
    constructor(){
        super()
        this['Search Component'] = new Search();
    }

    get 'Enter Button'() {
        return '[href="/personal/login.phtml?back_uri=https%3A%2F%2Foz.by%2F"]';
      }

    get 'Login Button'() {
        return '.btn.btn-lg.btn-primary.w-100.mt-3';
      }

    get 'Login Field'() {
        return $('.form-control');
      }

    get 'Error Message'() {
        return $('div.alert.alert-error.fs-5.mb-2');
      }
      get 'smsCodeFieldOne'() {
        return $('.otp-fieldset__input.form-control:first-of-type');
      }
    
      get 'smsCodeFieldTwo'() {
        return $('.otp-fieldset__input.form-control:nth-of-type(2)');
      }
    
      get 'smsCodeFieldThr'() {
        return $('.otp-fieldset__input.form-control:nth-of-type(3)');
      }
    
      get 'smsCodeFieldFour'() {
        return $('.otp-fieldset__input.form-control:nth-of-type(4)');
      }
}

export { LoginPage };