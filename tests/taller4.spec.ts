
import { test } from '@playwright/test';
import { IntroPage } from '../pages/init.page';
import { LoginPage } from '../pages/autentication.page';
import { AppPage } from '../pages/aplication.page';

test.describe('Todoism Functional Test Suite', () => {
    const taskTitle = 'Taller 4 - Automated Testing';

    test.beforeEach(async ({ page }) => {
        test.slow();

        const introPage = new IntroPage(page);
        const loginPage = new LoginPage(page);

        await introPage.navigateToIntro();
        await introPage.triggerLogin();

        await loginPage.requestTestAccount();
        await loginPage.waitForUserToBeGenerated();
        await loginPage.submitLogin();
    });

    test('Task Creation Test', async ({ page }) => {
        test.slow();

        const appPage = new AppPage(page);

        await appPage.initializeApp();
        await appPage.addTask(taskTitle);
        await appPage.verifyTaskAdded(taskTitle);

        await page.screenshot({ path: 'evidences/task-creation.png' });
    });

    test('Task Completion Test', async ({ page }) => {
        test.slow();

        const appPage = new AppPage(page);

        await appPage.initializeApp();
        await appPage.addTask(taskTitle);
        await appPage.markTaskAsComplete(taskTitle);

        await appPage.verifyTaskCompleted(taskTitle);

        await page.screenshot({ path: 'evidences/task-completion.png' });
    });

    test('Clearing Completed Tasks Test', async ({ page }) => {
        test.slow();

        const appPage = new AppPage(page);

        await appPage.initializeApp();
        await appPage.addTask(taskTitle);
        await appPage.markTaskAsComplete(taskTitle);
        await appPage.removeCompletedTasks();

        await appPage.verifyTaskCleared(taskTitle);

        await page.screenshot({ path: 'evidences/task-clearance.png' });
    });

});
