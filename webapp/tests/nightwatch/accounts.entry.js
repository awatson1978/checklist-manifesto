// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "Accounts Entry" : function (client) {
    client
      .url("http://localhost:3000")
      .waitForElementVisible("body", 1000)

      .verify.elementPresent('#appBody')
      .verify.elementPresent('#sidebarMenu')
      .verify.elementPresent('#signInButton')

      .click("#signInButton").pause(200)

      .click("#signInButton").pause(500)

      .verify.elementPresent('body', "================================================")
      .verify.elementPresent('body', "== A. SIGN IN PAGE")

      .verify.elementPresent("#entrySignIn")
      .verify.elementPresent("#signInPageTitle")
      .verify.elementPresent("#needAnAccountButton")

      .click("#needAnAccountButton").pause(500)


      .verify.elementPresent('body', "================================================")
      .verify.elementPresent('body', "== B. SIGN UP PAGE")

      .verify.elementPresent("#entrySignUp")
      .verify.elementPresent("#signUpPageTitle")
      .verify.elementPresent("#signUpPageMessage")
      .verify.elementPresent("#signUpPageEmailInput")
      .verify.elementPresent("#signUpPagePasswordInput")
      .verify.elementPresent("#signUpPagePasswordConfirmInput")
      .verify.elementPresent("#signUpPageJoinNowButton")
      .verify.elementPresent("#signUpPageSignInButton")

      .verify.containsText("#signUpPageTitle", "Join")
      .verify.containsText("#signUpPageMessage", "Joining allows you to make private lists")

      .setValue('#signUpPageEmailInput', "janedoe@gmail.com")
      .setValue('#signUpPagePasswordInput', "janedoe")
      .setValue('#signUpPagePasswordConfirmInput', "janedoe")

      .click("#signUpPageJoinNowButton").pause(200)


      .verify.elementPresent('body', "================================================")
      .verify.elementPresent('body', "== B. FOO")



      .verify.elementPresent('#contentContainer')

      .end();
  }
};
