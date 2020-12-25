
module.exports={
    
    'my first test case'(browser){
        debugger
        browser
        .url('http://automationpractice.com/index.php')
        .assert.titleContains('My Store')
        .useXpath()
        .click("//a[@class='login']")
        .assert.titleContains('Login - My Store')
        .useXpath()
        .setValue("//input[@id='email_create']",'sibil.kurian@gmail.com')
        .useXpath()
        .click("//button[@id='SubmitCreate']")
        .assert.containsText("//h1[@class='page-heading']","CREATE AN ACCOUNT")
        .click("//input[@type='radio'][@id='id_gender1']")
        .setValue('//input[@id="customer_firstname"]','firstname')
        .setValue('//input[@id="customer_lastname"]','lastname')
        
        .setValue('//input[@id="passwd"]','12345678')
         .click('//select[@id="days"]/option[@value="2"]').pause(3000)
        //.click('option[value="2"]')
        // .pause(5000).keys(['\uE006'])
        // //.setValue('//select[@id="days"][@name="days"]/option[@value="1"]',"1")
        // .setValue('//select[@id="months"]',"January ")
        // .setValue('//select[@id="years"]/option[@value="1980"]',"1980")
        // .setValue('//input[@id="address1"]','ABCDEFGJH')
        // .setValue('//input[@id="city"]',"Montreal")
        
        // .setValue('//select[@name="id_state"]','1')
        //.waitForElementNotVisible('body',5000)
    }
}