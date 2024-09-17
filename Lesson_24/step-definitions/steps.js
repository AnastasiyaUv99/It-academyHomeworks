import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

Given(/^I navigate on (.*) page$/, async (url) => {
    await browser.url(url);
});

When('I input text {string} to component {locator}', async  (text, selector) => {
    await $(selector).setValue(text);
});

When('I click on {locator} button', async (selector) => {
    await $(selector).waitForDisplayed();
    await $(selector).click();
});

Then('I expect that element {locator} should contain text {string}', async (selector, text) => {
    await $(selector).waitForDisplayed();
    await expect(await $(selector).getText()).toContain(text)
});

Then ('I input sms-code {number} into {locator}, {locator}, {locator}, {locator}', async  (numOne, numTwo, numThr, numFour, selector1, selector2, selector3, selector4)=> {
    await $(selector1).setValue(numOne);
    await $(selector2).setValue(numTwo);
    await $(selector3).setValue(numThr);
    await $(selector4).setValue(numFour);
});