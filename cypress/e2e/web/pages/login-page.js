class loginPage{
    elements = {
        username : () => cy.get("#user-name"),
        password: () => cy.get("#password"),
        submitButtom: () => cy.get("#login-button"),
        pageTitle: ()=> cy.get(".app_logo"),
        blockedMessage: () => cy.get("[data-test='error']")
    }

    writeUser(user){
        this.elements.username().type(user);
    }
    
    writePassword(password){
        this.elements.password().type(password);
    }

    clickSubmitButtom(){
        this.elements.submitButtom().click();
    }

    errorMessage(message){
        this.elements.blockedMessage().should("have.text",message)
    }

    validatePage(title){
        this.elements.pageTitle().should('contain.text',title)
    }


}

export default new loginPage();