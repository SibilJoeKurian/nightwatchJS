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
        submitButton:{
            selector:'//button[@id="SubmitLogin"]',
            locateStrategy:'xpath'
        },

    },
    commands: [{}]
}