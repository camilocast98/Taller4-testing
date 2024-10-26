
import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
    private readonly page                   : Page;
    private readonly testAccountBtn         : Locator;
    private readonly userInput              : Locator;
    private readonly successToast           : Locator;
    private readonly loginBtn               : Locator;

    constructor(page: Page) {
        this.page                = page;
        this.testAccountBtn      = page.getByText('Get a test account');
        this.userInput           = page.getByPlaceholder('Username');
        this.successToast        = page.locator('#toast-container').getByText('Generate success.');
        this.loginBtn            = page.locator('#login-btn');
    }

    async requestTestAccount(): Promise<void> {
        await this.testAccountBtn.click();
    }

    async waitForUserToBeGenerated(): Promise<string> {
        await expect(this.successToast).toHaveText('Generate success.');
        return await this.userInput.inputValue();
    }

    async submitLogin(): Promise<void> {
        await this.loginBtn.click();
    }
}
