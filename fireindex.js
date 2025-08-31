const{Builder, Key, By, until}= require('selenium-webdriver');
(async function example() {
    
    let driver = await new Builder().forBrowser('firefox').build();
    try {
      await driver.get('https://www.facebook.com/');
    //   await driver.findElement(By.name('//*[@id="loginForm"]/div/div[1]/div/label/input')).sendKeys('lucifer27hell');
    //   await driver.findElement(By.name('//*[@id="loginForm"]/div/div[2]/div/label/input')).sendKeys('patani').then(Key.RETURN); 


      // await driver.wait(until.elementLocated(By.xpath('/html/body/div/c-wiz/div/div/div[9]/div[3]/div/div/div[3]/div/div/div[1]/div[1]/div/div[4]/div[1]/div/div/div/div[1]')))
        // await driver.findElement(By.xpath('/html/body/div/c-wiz/div/div/div[9]/div[3]/div/div/div[3]/div/div/div[1]/div[1]/div/div[4]/div[1]/div/div/div/div[1]')).click();
        // await driver.wait(until.elementLocated(By.xpath('/html/body/div/c-wiz/div/div/div[9]/div[3]/div/div/div[3]/div/div/div[1]/div[1]/div/div[4]/div[1]/div/div/div/div[1]')))
        // await driver.findElement(By.xpath('/html/body/div/c-wiz/div/div/div[9]/div[3]/div/div/div[3]/div/div/div[1]/div[1]/div/div[4]/div[1]/div/div/div/div[1]')).click();
        


        await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div[1]/div/div/div/div[2]/div/div[1]/form/div[1]/div[1]/input')).sendKeys('8278145655');
        // await Thread.sleep(1000);
        await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div[1]/div/div/div/div[2]/div/div[1]/form/div[1]/div[2]/div/input')).sendKeys('muster6085au',Key.RETURN);     
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div/div[2]')).Key.RETURN;
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div/div[1]/div/div/div[1]/div/div/div[1]/ul/li/div/a/div[1]/div[2]/div/div/div/div/span/span')).click();
      

    } finally {
    //   await driver.quit();
    }
  })();