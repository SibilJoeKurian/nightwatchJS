
module.exports = {
    beforeEach: function (browser) {
        const page = browser.page.automationPageObjects()
        page.navigate()
            .assert.titleContains('My Store')
            .click('@loginButton')
            .assert.titleContains('Login - My Store')

    },
    'Successful login': function (browser) {
        const page = browser.page.automationPageObjects()
        page
            .login('abclulu4@gmail.com','12345678')
            .checkLoginSuccessfull()
            .logout()

    },                            
    'Unscusseful login': function (browser) {
        const page = browser.page.automationPageObjects()
        page
            .login('abclulu6@gmail.com','1234567890000')
            .checkAuthentication()    
        },
    'Account Registeration': function (browser) {
        const page = browser.page.automationPageObjects()
            page.navigate()
            .useXpath()
            .click('@loginButton')
            .setValue("//input[@id='email_create']", 'abclulu12234@gmail.com')
            .click("//button[@id='SubmitCreate']")
            .assert.containsText("//h1[@class='page-heading']", "CREATE AN ACCOUNT")
            .click("//input[@type='radio'][@id='id_gender1']")
            .setValue('//input[@id="customer_firstname"]', 'firstname')
            .setValue('//input[@id="customer_lastname"]', 'lastname')

            .setValue('//input[@id="passwd"]', '12345678')
            .click('//select[@id="days"][@name="days"]/option[@value="5"]')
            .click('//select[@id="months"][@name="months"]/option[@value="2"]')
            .click('//select[@id="years"]/option[@value="1980"]')
            .setValue('//input[@id="address1"]', 'ABCDEFGJH')
            .setValue('//input[@id="city"]', "Montreal")

            .click('//select[@id="id_country"]/option[@value="21"]')
            .click('//select[@id="id_state"]/option[@value="4"]')
            .setValue('//input[@id="postcode"]', '00000')
            .setValue('//input[@id="phone_mobile"]', '1234567890')
            .click('//button[@id="submitAccount"]')
            .assert.titleContains('My account - My Store')
    }
}