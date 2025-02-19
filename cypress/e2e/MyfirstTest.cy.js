import { accountPage } from '../PageObjects/accountPage';
import { contactPage } from '../PageObjects/contactPage';
import { AccountPage } from '../PageObjects/accountPage';



describe("TestSuite-1",()=>{
 
  beforeEach(() => {
    const username = Cypress.env("SALESFORCE_USERNAME");
    const password = Cypress.env("SALESFORCE_PASSWORD");
    cy.navigateAndLoginSalesforce(username, password);
  });
 
   it("Account creation -> verification",()=>{
    cy.xpath(accountPage.accountsTab).click();
    cy.xpath(accountPage.accountnewButton).click();
    cy.xpath(accountPage.accountNameInput).type("Account Volvo XC");
      
    cy.xpath(accountPage.accountsaveButton).click();
    cy.get(accountPage.accountSuccessMessage).should('be.visible');
    cy.xpath(accountPage.accountDetailPageTab).click()
    cy.xpath(accountPage.accountRatingEditPencil).click()
    cy.xpath(accountPage.accountRatingField).click().type('Hot').type('{enter}'); 
    cy.xpath(accountPage.accountsaveButton).click()
    cy.wait(3000)
    cy.xpath(accountPage.accountRatingUpdatedValue('Hot')).should("be.visible")
  
  })
  //  it("Account Details Page Tab -> Rating field Update",()=>{
  //   accountPage.fundropdownRating();
  //  })
 
   it("Contact creation -> adding description -> Uploading files",()=>{
    cy.xpath(contactPage.contactObject).click();
        cy.xpath(contactPage.contactNewButton).click();
        cy.xpath(contactPage.contactNameFeild).type("XC90");
       // cy.xpath(this.contactCreationFeild).type("rf wegoiweg");
        cy.xpath(contactPage.contactSaveButton).click();
        cy.get(contactPage.contactsuccessMessage);
        cy.xpath(contactPage.contactDetailTab).click();
        cy.xpath(contactPage.contacteditDescriptionButton).click();
        cy.xpath(contactPage.contactdescriptionTextarea).type("Description XC series");
        cy.xpath(contactPage.contactSaveButton).click();
        cy.xpath(contactPage.contactRelatedTab).click();
        cy.xpath(contactPage.contactfileInput).selectFile("cypress/fixtures/Sample1.pdf",{force:true});
        cy.xpath(contactPage.contactdoneButton).should("be.visible");
        cy.xpath(contactPage.contactdoneButton).should("have.text","Done");
        cy.xpath(contactPage.contactdoneButton).click();
        cy.get(contactPage.contactsuccessMessage).should('be.visible')         
       })

    it("Negative test case for contact creation",()=>{
      cy.xpath(contactPage.contactObject).click();
      cy.xpath(contactPage.contactNewButton).click();
      cy.xpath(contactPage.contactFirstNameFeild).type("Demo FirstName1");
      cy.xpath(contactPage.contactSaveButton).click();
    
      cy.xpath(contactPage.contactsName).should("be.visible")
      })
});