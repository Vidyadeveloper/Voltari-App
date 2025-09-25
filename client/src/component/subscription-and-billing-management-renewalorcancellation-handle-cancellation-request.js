
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class SubscriptionAndBillingManagementRenewalorcancellationHandleCancellationRequest extends FormDesignerComponent {
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
      
        <blaze-field-group id="fg-user" context="user"></blaze-field-group>
      
    `;

    
      const fgsubscription = this.shadowRoot.getElementById("fg-subscription");
            fgsubscription.context = "subscription";
      fgsubscription.model = {};
      console.log("Assigning fields for context:", "subscription", fgsubscription.fields);
      fgsubscription.fields = [{"id":"subscriptionId","name":"Subscription ID","type":"text","required":false,"description":"Unique identifier for the subscription.","label":"Subscription ID"},{"id":"status","name":"Status","type":"text","required":false,"description":"Current subscription status (active, canceled, past_due).","label":"Status"}];
      fgsubscription.data = { "subscription": this._formData.subscription || {} };
   
      const fguser = this.shadowRoot.getElementById("fg-user");
            fguser.context = "user";
      fguser.model = {};
      console.log("Assigning fields for context:", "user", fguser.fields);
      fguser.fields = [{"id":"userId","name":"User ID","type":"text","required":false,"description":"Unique user identifier.","label":"User ID"}];
      fguser.data = { "user": this._formData.user || {} };
   
  }
populateForm() {
  
    const fgsubscription = this.shadowRoot?.getElementById("fg-subscription");
    if (fgsubscription) {
      fgsubscription.data = { "subscription": this._formData["subscription"] || {} };
    }
  
    const fguser = this.shadowRoot?.getElementById("fg-user");
    if (fguser) {
      fguser.data = { "user": this._formData["user"] || {} };
    }
  
}

  
}

customElements.define("subscription-and-billing-management-renewalorcancellation-handle-cancellation-request", SubscriptionAndBillingManagementRenewalorcancellationHandleCancellationRequest);
export default SubscriptionAndBillingManagementRenewalorcancellationHandleCancellationRequest;
