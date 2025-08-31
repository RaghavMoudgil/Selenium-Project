const{Builder, Key, By, until}= require('selenium-webdriver');
(async function example() {
    
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.instagram.com/');
        await driver.findElement(By.xpath('/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[1]/div/label/input')).click().sendKeys('lucifer27hell');
        await driver.findElement(By.xpath('/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[2]/div/label/input')).sendKeys('patani',Key.RETURN);
        
    }
    finally{
        //  await driver.quit();
        }
      })();