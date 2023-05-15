const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

let driver_fx = new webdriver.Builder().forBrowser("firefox").build();

let driver_chr = new webdriver.Builder().forBrowser("chrome").build();

searchTest(driver_fx);
searchTest(driver_chr);

function searchTest(driver) {
	driver.get("http://starwars2023.000webhostapp.com/");
	driver.findElement(By.id("movies-link")).sendKeys("webdriver");

	driver.sleep(1000).then(() => {
		driver.findElement(By.id("top-link")).sendKeys(webdriver.Key.TAB);
	});

	driver.findElement(By.className("button scrolly")).click();

	driver.sleep(2000).then(() => {
		driver.getTitle().then((title) => {
			if (title === "Star wars fan page") {
				console.log("Test passed");
			} else {
				console.log("Test failed");
			}

			// Find the "Google Search" button and click it
			driver.findElement(By.id("fanboy-link")).click();

			driver.sleep(2000).then(() => {
				driver.getTitle().then((title) => {
					if (title === "webdriver - Google Search") {
						console.log("Button test passed");
					} else {
						console.log("Button test failed");
					}
					driver.quit();
				});
			});
		});
	});
}
