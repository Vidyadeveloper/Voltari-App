
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class SubscriptionAndBillingManagementRenewalorcancellationProcessRenewal extends FormDesignerComponent {
   constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-subscription" context="subscription"></blaze-field-group>
      
    `;

    
      const fgsubscription = this.shadowRoot.getElementById("fg-subscription");
            fgsubscription.context = "subscription";
      fgsubscription.model = {};
      console.log("Assigning fields for context:", "subscription", fgsubscription.fields);
      fgsubscription.fields = [{"id":"subscriptionId","name":"Subscription ID","type":"text","required":false,"description":"Unique identifier for the subscription.","label":"Subscription ID"},{"id":"endDate","name":"End Date","type":"date","required":false,"description":"Subscription end or renewal date.","label":"End Date"},{"id":"status","name":"Status","type":"text","required":false,"description":"Current subscription status (active, canceled, past_due).","label":"Status"}];
      fgsubscription.data = { "subscription": this._formData.subscription || {} };
   
  }
populateForm() {
  
    const fgsubscription = this.shadowRoot?.getElementById("fg-subscription");
    if (fgsubscription) {
      fgsubscription.data = { "subscription": this._formData["subscription"] || {} };
    }
  
}

  
}

customElements.define("subscription-and-billing-management-renewalorcancellation-process-renewal", SubscriptionAndBillingManagementRenewalorcancellationProcessRenewal);
export default SubscriptionAndBillingManagementRenewalorcancellationProcessRenewal;
