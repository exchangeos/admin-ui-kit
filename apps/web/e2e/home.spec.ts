import { expect, test } from '@playwright/test';

test.describe('Home Page', () => {
  test('renders the homepage correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /admin ui kit app/i })).toBeVisible();
    await expect(page.getByText(/built with turborepo/i)).toBeVisible();
  });

  test('shows all dashboard cards', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Dashboard')).toBeVisible();
    await expect(page.getByText('Settings')).toBeVisible();
  });
});
