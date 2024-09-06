const { test, expect } = require('@playwright/test')


// test.describe('Oz test', async function () {
//     test('should be error message if mobile telephone is wrong', async ({page}) => {
//         await page.goto('https://oz.by/')
//         const enterButton = await page.locator('[href="/personal/login.phtml?back_uri=https%3A%2F%2Foz.by%2F"]')
//         await enterButton.click()
//         const loginField = await page.locator('.form-control')


//     })

// })




const MainPage = require('../page-objects/mainPage');
const LoginPage = require('../page-objects/loginPage');
const Header = require('../page-objects/components/header');
const Basket = require('../page-objects/basket');
const basket = new Basket();

let mainPage;
let loginPage
let header


test.beforeEach(async ({page}) => {
    mainPage = new MainPage(page)
    loginPage = new LoginPage(page)
    header = new Header(page)
})

test.describe('Oz Test Authorization', async function () {
  test('should be error message if mobile telephone is wrong', async ({page}) => {
    await mainPage.navigate(mainPage.mainPageUrl);
    await header.pressElement(await header.loginButton);
    await loginPage.loginTelephone(111111111);
    await loginPage.errorMessage.waitFor({ state: 'visible' })
    expect(await loginPage.errorMessage.innerText()).toEqual('Введите корректный номер мобильного телефона');
  });

  test('should be error message if sms-code is wrong', async ({page}) => {
    await mainPage.navigate(mainPage.mainPageUrl);
    await header.pressElement(await header.loginButton);
    await loginPage.loginTelephone(291111121);
    await loginPage.loginSmsCode(1, 2, 3, 4);
    await loginPage.errorMessage.waitFor({ state: 'visible' })
    expect(await loginPage.errorMessage.innerText()).toEqual('Неверный код. Проверьте его на ошибки или отправьте код ещё раз');
  });
});

test.describe('Oz search testing', async function () {
  test('displaying products if search is successful', async ({page}) => {
    await header.navigate(mainPage.mainPageUrl);
    await header.searching('тетрадь', header.successSearchText);
    expect(await header.successSearchText.isVisible()).toBe(true);
  });

  test('displaying products if search is unsuccessful', async ({page}) => {
    await header.navigate(mainPage.mainPageUrl);
    await header.searching('56568696 аарарарв', header.unsuccessSearchText);
    expect(await header.unsuccessSearchText.isVisible()).toBe(true);
  });
});

test.describe('working with Oz basket', async function () {
  test('adding item', async ({page}) => {
    await header.navigate(mainPage.mainPageUrl);
    await header.searching('тетрадь', header.successSearchText);
    const productName = await basket.addToBasket(2);
    await basket.pressElement(await basket.basketButton);
    const isInBasket = await basket.isItemInBasket(productName);
    expect(isInBasket).toBe(true);
  });

  // it('deletion item', async () => {
  //     await basket.deleteAllFromBasket()
  //     expect(await basket.emptyBasketMessage.getText()).to.equal('В корзине пусто. Чтобы найти товары, используйте поиск или выберите товары из просмотренных ранее:')
  // })
});