
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";

import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";

class SubscriptionAndBillingManagementActivationNotifyUserOfActivation extends FormDesignerComponent {
   constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();
  }

  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-user" context="user"></blaze-field-group>
      
        <blaze-field-group id="fg-subscription" context="subscription"></blaze-field-group>
      
    `;

    
      const fguser = this.shadowRoot.getElementById("fg-user");
            fguser.context = "user";
      fguser.model = {};
      console.log("Assigning fields for context:", "user", fguser.fields);
      fguser.fields = [{"id":"email","name":"Email","type":"email","required":false,"description":"Contact email for notifications and verification.","label":"Email"}];
      fguser.data = { "user": this._formData.user || {} };
   
      const fgsubscription = this.shadowRoot.getElementById("fg-subscription");
            fgsubscription.context = "subscription";
      fgsubscription.model = {};
      console.log("Assigning fields for context:", "subscription", fgsubscription.fields);
      fgsubscription.fields = [{"id":"subscriptionId","name":"Subscription ID","type":"text","required":false,"description":"Unique identifier for the subscription.","label":"Subscription ID"}];
      fgsubscription.data = { "subscription": this._formData.subscription || {} };
   
  }
populateForm() {
  
    const fguser = this.shadowRoot?.getElementById("fg-user");
    if (fguser) {
      fguser.data = { "user": this._formData["user"] || {} };
    }
  
    const fgsubscription = this.shadowRoot?.getElementById("fg-subscription");
    if (fgsubscription) {
      fgsubscription.data = { "subscription": this._formData["subscription"] || {} };
    }
  
}

  
}

customElements.define("subscription-and-billing-management-activation-notify-user-of-activation", SubscriptionAndBillingManagementActivationNotifyUserOfActivation);
export default SubscriptionAndBillingManagementActivationNotifyUserOfActivation;
