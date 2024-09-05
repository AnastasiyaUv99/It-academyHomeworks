import { expect } from 'chai';

const MainPage = require('../pageobjects/mainPage');

const mainPage = new MainPage();
const LoginPage = require('../pageobjects/loginPage');

const loginPage = new LoginPage();
const Header = require('../pageobjects/components/header');

const header = new Header();
const Basket = require('../pageobjects/basket');

const basket = new Basket();

describe('Oz Test Authorization', () => {
  it('should be error message if mobile telephone is wrong', async () => {
    await mainPage.navigate(mainPage.mainPageUrl);
    await header.pressElement(await header.loginButton);
    await loginPage.loginTelephone(111111111);
    expect(await loginPage.errorMessage.getText()).to.equal('Введите корректный номер мобильного телефона');
  });

  it('should be error message if sms-code is wrong', async () => {
    await mainPage.navigate(mainPage.mainPageUrl);
    await header.pressElement(await header.loginButton);
    await loginPage.loginTelephone(291111121);
    await loginPage.loginSmsCode(1, 2, 3, 4);
    expect(await loginPage.errorMessage.getText()).to.equal('Неверный код. Проверьте его на ошибки или отправьте код ещё раз');
  });
});

describe('Oz search testing', () => {
  it('displaying products if search is successful', async () => {
    await header.navigate(mainPage.mainPageUrl);
    await header.searching('тетрадь', header.successSearchText);
    expect(await header.successSearchText.isDisplayed()).to.be.true;
  });

  it('displaying products if search is unsuccessful', async () => {
    await mainPage.navigate(mainPage.mainPageUrl);
    await header.searching('56568696 аарарарв', header.unsuccessSearchText);
    expect(await header.unsuccessSearchText.isDisplayed()).to.be.true;
  });
});

describe('working with Oz basket', () => {
  it('adding item', async () => {
    await header.navigate(mainPage.mainPageUrl);
    await header.searching('тетрадь', header.successSearchText);
    const productName = await basket.addToBasket(2);
    await basket.pressElement(await basket.basketButton);
    const isInBasket = await basket.isItemInBasket(productName);
    expect(isInBasket).to.be.true;
  });

  // it('deletion item', async () => {
  //     await basket.deleteAllFromBasket()
  //     expect(await basket.emptyBasketMessage.getText()).to.equal('В корзине пусто. Чтобы найти товары, используйте поиск или выберите товары из просмотренных ранее:')
  // })
});
