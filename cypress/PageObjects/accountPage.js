class AccountPage {
   
    accountsTab = "//span[normalize-space()='Accounts']";
    accountnewButton = "//a[@title='New']";
    accountnextButton = "//span[normalize-space()='Next']";
    accountNameInput = "//input[@class='slds-input' and @name='Name']";
    accountStatusDropdown = "//button[@aria-label='Account Status']";
    accountStatusFailedOption = "//lightning-base-combobox-item[@data-value='Failed']";
    accountCurrencyDropdown = "//button[@aria-label='Account Currency']";
    accountCurrencyINROption = "//lightning-base-combobox-item[@data-value='INR']";
    accountbankHolderNameInput = '//input[@name="Bank_Holder_Name__c"]';
    accountsaveButton = '//button[@name="SaveEdit"]';
    accountSuccessMessage = '.toastMessage';
    accountDetailPageTab="//a[@id='detailTab__item']"
    accountRatingEditPencil="//button[@title='Edit Rating']"
    accountRatingField='//button[@aria-label="Rating"]'
    
 

     accountRatingUpdatedValue(value) {
      return `//lightning-formatted-text[normalize-space()='${value}']`;
    }
 
    // funaccountopenAccountsTab() {
      
     
    // }
 
    // funaccountenterAccountName() {
      
    // }

    // fundropdownRating()
    // {

    // }
      
  }
 
  export const accountPage = new AccountPage();