// @flow strict
import { test } from '@playwright/test';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Data Viz Color Palette Accessibility check', async ({ page }) => {
  await page.goto('/foundations/data_visualization/charts_and_graphs');
  await expectAccessiblePage({ page });
});
