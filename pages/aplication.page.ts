
import { Page, Locator, expect } from "@playwright/test";

export class AppPage {
    private readonly page             : Page;
    private readonly newTaskField     : Locator;
    private readonly taskListContainer: Locator;
    private readonly clearBtn         : Locator;

    constructor(page: Page) {
        this.page             = page;
        this.newTaskField     = page.locator('#item-input');
        this.taskListContainer = page.locator('.items');
        this.clearBtn         = page.locator('#clear-btn');
    }

    async initializeApp(): Promise<void> {
        await expect(this.newTaskField).toBeVisible();
    }

    async addTask(task: string): Promise<void> {
        await this.newTaskField.click();
        await this.newTaskField.pressSequentially(task);
        await this.newTaskField.press('Enter');
    }

    async markTaskAsComplete(task: string): Promise<void> {
        const taskSelector = this.page.locator(`//span[@class = "item-body" and contains(.,"${task}")]/a/i`);
        await taskSelector.click();
    }

    async removeCompletedTasks(): Promise<void> {
        await this.clearBtn.click();
    }

    async verifyTaskAdded(task: string): Promise<void> {
        await expect(this.taskListContainer.getByText(task)).toHaveClass('active-item');
    }

    async verifyTaskCompleted(task: string): Promise<void> {
        await expect(this.taskListContainer.getByText(task)).toHaveClass('inactive-item');
    }

    async verifyTaskCleared(task: string): Promise<void> {
        await expect(this.taskListContainer).not.toHaveText(task);
    }
}
