function launchBrowser(browserName)
{
    if(browserName === "chrome")
    {
        console.log("Chrome browser launched");
    }
    else if(browserName === "firefox")
    {
        console.log("Firefox browser launched");
    }
    else if(browserName === "safari")
    {
        console.log("Safari browser launched");
    }
    else
    {
        console.log("Invalid browser");
    }
}

function runTests(testName)
{
    switch(testName)
    {
        case "smoke" : console.log("Smoke tests started...");
        break;
        case "sanity" : console.log("Sanity tests started...");
        break;
        case "regression" : console.log("Regression tests started...");
        break;
        default : console.log("Smoke tests started...");
    }

}



console.log("<====== Execution starts ======>");
launchBrowser("safari");
runTests("sanity");
console.log("<====== Execution ends ======>");