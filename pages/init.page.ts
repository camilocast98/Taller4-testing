
import { Page, Locator } from "@playwright/test";

export class IntroPage {
    private readonly page       : Page;
    private readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page        = page;
        this.loginBtn = page.getByRole('navigation').getByRole('link', { name: 'Login' });
    }

    async navigateToIntro(): Promise<void> {
        await this.page.goto('http://127.0.0.1:5000/#intro');
    }

    async triggerLogin(): Promise<void> {
        await this.loginBtn.click();
    }
}
