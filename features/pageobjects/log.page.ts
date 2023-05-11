import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginDemoPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $('#Email');
    }

    public get inputPassword () {
        return $('#Password');
    }

    public get btnSubmit () {
        return $('button-1 login-button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async logindemo (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginDemoPage();
