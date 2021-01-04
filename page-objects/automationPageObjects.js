const loginCommands={
    login:function(username,password){
        return this
            .setValue('@emailTextBox',username)
            .setValue('@passwordTextBox',password)
            .click('@submitLoginButton')
    },
    checkLoginSuccessfull:function(){
        return this.assert.titleContains('My account - My Store')
    },
    logout:function(){
        return this.click('@logout')
    },
    checkAuthentication(){
        return this.
        waitForElementPresent('@authenticationFailed')    
        .assert.elementPresent('@authenticationFailed')
    }
}
module.exports = {
    url: 'http://automationpractice.com/index.php',
    elements: {

        loginButton:{
            selector:"//a[@class='login']",
            locateStrategy:'xpath'
        },
        emailTextBox:{
            selector:'//input[@id="email"]',
            locateStrategy:'xpath'
        },
        passwordTextBox:{
            selector:'//input[@id="passwd"]',
            locateStrategy:'xpath'
        },
        submitLoginButton:{
            selector:'//button[@id="SubmitLogin"]',
            locateStrategy:'xpath'
        },
        logout:{
            selector:"//a[@title='Log me out']",
            locateStrategy:'xpath'
        },
        authenticationFailed:{
            selector:'//li[contains(.,"Authentication failed")]',
            locateStrategy:'xpath'
        }

    },
    commands: [loginCommands]
}