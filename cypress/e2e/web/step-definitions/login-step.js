const{Given,When,Then} = require("@badeball/cypress-cucumber-preprocessor")
import loginPage from "../pages/login-page"


Given("the user is on the login page", () => {
    cy.visit("/");
});
When("the user enters the username {string}",(user)=>{
    loginPage.writeUser(user);
})
Then("the user enters the password {string}",(password)=>{
    loginPage.writePassword(password);
})
Then("clicks the login button",()=>{
    loginPage.clickSubmitButtom();
})
Then("should see a {string} message in content",(title)=>{
    loginPage.validatePage(title);
})
Then("the user should see an error message {string} indicating the message error",(message)=>{
    loginPage.errorMessage(message)
})