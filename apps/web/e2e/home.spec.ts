import { expect, test } from '@playwright/test';

test.describe('Home Page', () => {
  test('renders the homepage correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/create turborepo/i);
    await expect(page.getByText('examples/with-tailwind -')).toBeVisible();
    await expect(page.getByText('web')).toBeVisible();
  });

  test('shows the starter shell content', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('code')).toHaveText('web');
  });
});
