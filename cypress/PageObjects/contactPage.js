class ContactPage {
 
    contactObject = "//span[@class='slds-truncate'][normalize-space()='Contacts']"
    contactNewButton = "//a[@title='New']"
    contactNameFeild = "//input[@placeholder='Last Name']"
    contactFirstNameFeild = "//input[@placeholder='First Name']"
    contactCreationFeild = "//input[@name='creation_day__c']"
    contactSaveButton = "//button[@name='SaveEdit']"
    contactDetailTab = "//a[@id='detailTab__item']";
    contactRelatedTab = "//a[@id='relatedListsTab__item']";
    contacteditDescriptionButton = "//button[@title='Edit Description']";
    contactdescriptionTextarea = "//textarea[@maxlength='32000']";
    contactfileInput = "//input[@type='file']";
    contactdoneButton = '//button[@type="button"]/span[(text()="Done")]';
    contactsuccessMessage = '.slds-theme--success';
    contactsName ="//a[normalize-space()='Name']"
 
    // funcontactObject(){
        
    // }
    // funcontactDetailTab() {
      
    // }  
     
    // funcontactfileinput(){
        
    // }
    // createContactUI_Negative(FirstName){

   

        
      
        
    // }
}
 
export const contactPage = new ContactPage();