import { chromium, expect, test } from "@playwright/test";

// Define a Playwright test block named "Login to Salesfroce"
test("Login to Salesfroce", async () => {
    // Launch a new Chromium browser instance (runs in headless mode by default)
    const browser = await chromium.launch();

    // Create an isolated browser context (similar to an incognito session)
    const browserContext = await browser.newContext();

    // Open a new tab/page within the isolated context
    const page = await browserContext.newPage();

    // Navigate to the Salesforce login page
    await page.goto("https://login.salesforce.com/");

    // Set the expected page title and fetch the actual page title
    let expTitle = "Login | Salesforce";
    let actTitle = await page.title();

    // Assert that the page title matches the expected title
    expect(actTitle).toBe(expTitle);

    // Locate the username input field by ID and type the username
    await page.locator("#username").fill("sunilrockyna.27022dee2d2b@agentforce.com");

    // Locate the password input field by ID and type the password
    await page.locator("#password").fill("Change@2026");

    // Locate the Login button using its 'name' attribute and click it
    await page.locator("[name='Login']").click();

    // Pause execution for 10 seconds to allow authentication and page redirection
    await page.waitForTimeout(10000);

    // Log the page title and current URL after login to the console
    console.log(`Current Page title :`, await page.title());
    console.log(`Current Url :`, page.url());

    // Close the current page/tab
    await page.close();
});