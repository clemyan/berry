import {defineConfig} from '@playwright/test';

// eslint-disable-next-line arca/no-default-export
export default defineConfig({
  testDir: `visual-test`,
  outputDir: `visual-test/output/results`,
  timeout: 60 * 1000,

  fullyParallel: true,
  workers: `100%`,

  expect: {
    toHaveScreenshot: {
      pathTemplate: `{testDir}/output/screenshots/{arg}{ext}`,
    },
  },
  reporter: [
    [`html`, {outputFolder: `visual-test/output/html-report`, open: `never`}],
    [`list`],
  ],

  webServer: {
    port: 3000,
    command: `yarn start --no-open`,
    reuseExistingServer: true,
  },
  use: {
    baseURL: `http://localhost:3000`,
  },
});
