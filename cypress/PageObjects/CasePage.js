class CasePage
{
    caseTab = "//span[normalize-space()='Cases']";
    caseNewButton = "//a[@title='New']";
    caseOriginDropdownValue='//button[@type="button" and @data-value="--None--" and @aria-label="Case Origin"]'
    casesaveButton='//button[contains(@class, "slds-button_brand") and @name="SaveEdit" and text()="Save"]'
    caseCountriesEditPencil="//button[@title='Edit Countries']"

    caseCountriesMoveToChoosenButton="//button[contains(@title,'Move to Chosen')]"

    caseSubjectField="//input[@class='slds-input' and @name='Subject']"
    caseDescriptionField="//textarea[@maxlength='32000']"
    caseInternalCommentsField="//textarea[@maxlength='4000']"
    caseContactLookupField="//input[@placeholder='Search Contacts...']"
    caseContactLookupSearchForMore="//lightning-base-combobox-item[@data-value='actionAdvancedSearch']"
    caseSuppliedWebEmail="//input[@name='SuppliedEmail']"


    casePriorityDropdownValue() {
        return `//button[@type="button" and @data-value="Medium" and @role="combobox"]`;
      }

      caseCountryPicklist(country)
      {
        return `//span[contains(@title,'${country}')]`
      }

      caseSelectContactForLookup(contactName)
      {
        return `//a[normalize-space()='${contactName}']`
      }

      

}
export const casePage=new CasePage()