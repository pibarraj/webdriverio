import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginDemoPage from '../pageobjects/log.page';
import MainPage from '../pageobjects/logindemo.main.page';

const pages = {
    login: LoginDemoPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (email, password) => {
    await LoginDemoPage.logindemo(email, password)
});

Then(/^I should see a button saying (.*)$/, async (email) => {
    await expect(MainPage.btnEmail).toBeExisting();
    await expect(MainPage.btnEmail).toHaveTextContaining(email);
});

