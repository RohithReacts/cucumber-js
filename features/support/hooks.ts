import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  Status,
  ITestCaseHookParameter,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { CustomWorld } from "./world";
import * as fs from "fs";
import * as path from "path";

let browser: Browser;

setDefaultTimeout(60 * 1000); // 60 seconds

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false, slowMo: 1000 });
});

Before(async function (this: CustomWorld) {
  this.context = await browser.newContext({
    viewport: { width: 1366, height: 768 },
    recordVideo: {
      dir: "videos/",
      size: { width: 1366, height: 768 },
    },
  });
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshotPath = `screenshots/${scenario.pickle.name.replace(
      / /g,
      "_"
    )}.png`;
    await this.page.screenshot({ path: screenshotPath });
    console.log(`Screenshot saved to ${screenshotPath}`);
  }

  await this.page.close();

  const videoPath = await this.page.video()?.path();
  await this.context.close();

  if (videoPath) {
    const newPath = path.join(
      "videos",
      scenario.pickle.name.replace(/ /g, "_") + ".webm"
    );
    fs.renameSync(videoPath, newPath);
    console.log(`Video saved to ${newPath}`);
  }
});

AfterAll(async function () {
  await browser.close();
});
