
import { casePage } from '../PageObjects/CasePage';


describe("TestSuite-2",()=>{
 
  beforeEach(() => {
    const username = Cypress.env("SALESFORCE_USERNAME");
    const password = Cypress.env("SALESFORCE_PASSWORD");
    cy.navigateAndLoginSalesforce(username, password);
  });

  it("Case creation -> verification",()=>{


    cy.fixture('SampleData.json').then((data) => {
        const caseDetails = data.caseDetails;

    cy.xpath(casePage.caseTab).click()
    cy.xpath(casePage.caseNewButton).click()
    //cy.xpath(casePage.casePriorityDropdownValue()).click().should('be.visible').select('High')

   cy.xpath(casePage.casePriorityDropdownValue()).click().should('be.visible').type(caseDetails.priority).type('{enter}');
    cy.xpath(casePage.caseOriginDropdownValue).click().should('be.visible').wait(1000).type(caseDetails.origin, { delay: 500 }).type('{enter}',{ force: true });
    cy.xpath(casePage.casesaveButton).click();

    cy.xpath(casePage.caseCountriesEditPencil).click()


//Selecting Contact from Lookup
    cy.xpath(casePage.caseContactLookupField).click().type(caseDetails.contactName)
    cy.xpath(casePage.caseContactLookupSearchForMore).click()
    cy.xpath(casePage.caseSelectContactForLookup(caseDetails.contactName)).first().click()




    cy.xpath(casePage.caseSubjectField).click().type(caseDetails.subject)

    cy.xpath(casePage.caseDescriptionField).click().type(caseDetails.description)

    cy.xpath(casePage.caseInternalCommentsField).click().type(caseDetails.internalComments)

    //Email Validation

    cy.xpath(casePage.caseSuppliedWebEmail).click().type(caseDetails.webEmail)
    .then(($input) => {
      const inputValue = $input.val(); // Get the current value of the input
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format regex

      // Assert that the email matches the regex
      expect(inputValue).to.match(
        emailRegex,
        `The email '${inputValue}' is not in a valid format.`
      );
    });


    //Multipicklist- Countries
    cy.xpath(casePage.caseCountryPicklist(caseDetails.countries[0])).click();
    cy.xpath(casePage.caseCountriesMoveToChoosenButton).click()
    cy.xpath(casePage.caseCountryPicklist(caseDetails.countries[1])).click()
    cy.xpath(casePage.caseCountriesMoveToChoosenButton).click()

    cy.xpath(casePage.caseCountryPicklist(caseDetails.countries[2])).click()
    cy.xpath(casePage.caseCountriesMoveToChoosenButton).click()



    cy.xpath(casePage.casesaveButton).click();
    
    
    })
    
      
  })

});