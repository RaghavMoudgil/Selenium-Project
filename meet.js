const{Builder, Key, By, until}= require('selenium-webdriver');
(async function example() {
    
    let driver = await new Builder().forBrowser('firefox').build();
    try {
      await driver.get('https://accounts.google.com/signin/v2/identifier?ltmpl=meet&continue=https%3A%2F%2Fmeet.google.com%2Fnew%3Fhs%3D195&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
        await driver.findElement(By.xpath('//*[@id="identifierId"]')).sendKeys('dcsa2022raghav@kuk.ac.in',Key.RETURN);  
        await driver.findElement(By.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input')).sendKeys('Raghav6085au',Key.RETURN);  

    }
      finally {
        //   await driver.quit();
        }
      })();